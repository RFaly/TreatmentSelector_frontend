import React from 'react';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';

import { FaTrash,FaEdit,FaPlusSquare } from 'react-icons/fa';

import { TREATMENT_CATEGORIES } from '../../services/queries/TreatmentCategoriesQueries';
import { DESTROY_TREATMENT_CATEGORY } from '../../services/mutations/MutationsTreatmentCategory';

import TreatmentCategory from './Components/TreatmentCategory';
import CreateTreatmentCategory from '../Dashboard/CreateTreatmentCategory'

function ListTreatmentCategory(props){
	const {loading, error, data} = useQuery(TREATMENT_CATEGORIES);

	const [ destroyTreatmentCategory] = useMutation(DESTROY_TREATMENT_CATEGORY);

	let toDestroyTreatmentCategory = (e,treatmentCategoryId) => {
		e.preventDefault();
    	e.stopPropagation();

		destroyTreatmentCategory({ 
			variables: { treatmentCategoryId: parseInt(treatmentCategoryId)},
			optimisticResponse: true,
		    update: (cache) => {
				const existingTreatmentCategories = cache.readQuery({ query: TREATMENT_CATEGORIES });
				const newTreatmentCategories = existingTreatmentCategories.treatmentCategories.filter(t => (t.id !== treatmentCategoryId));
				cache.writeQuery({
					query: TREATMENT_CATEGORIES,
					data: {treatmentCategories: newTreatmentCategories}
				});
			}
		});
	}

	if (loading) return 'Loading ...';
	if (error) return `Error ${error.message}`;

	return(
		<div className="text-center container">
			{
				props.match.path==='/doctor' ?
					<div>
						<h2>Ajouter un nouveau categorie de traitement</h2>
						<FaPlusSquare type="button" className="add-btn-css" data-toggle="modal" data-target="#exampleModalCenter" />
						<CreateTreatmentCategory selectTreatmentCategory={props.selectTreatmentCategory} />
					</div>
					:
					<React.Fragment>
						<h2>
							CATEGORIE DE TRAITEMENT DISPONIBLE<br/>
							<small>"Quelle traitement vous voulez?"</small>
						</h2>
					</React.Fragment>
			}

			{
				data.treatmentCategories.length === 0 ? 
					<p>Aucun traitement dans cette liste</p>
				:
				<div className="card-columns text-center" id="listTC-container">
					{
						data.treatmentCategories.map(treatmentCategory => (
							<div className="card pointer text-left" key={treatmentCategory.id}>
								{
									props.match.path==='/doctor' ? 
										<React.Fragment>
											<FaTrash onClick={e => toDestroyTreatmentCategory(e,treatmentCategory.id)}/>
											<FaEdit/>
										</React.Fragment>
									: null
								}
								<div onClick={props.selectTreatmentCategory.bind(this,treatmentCategory)} >
									<TreatmentCategory treatmentCategory={treatmentCategory} />
								</div>
							</div>
						))
					}
				</div>
			}
		</div>
	)
}

export default ListTreatmentCategory
