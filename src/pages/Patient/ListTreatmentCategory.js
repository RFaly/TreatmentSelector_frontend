import React from 'react';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { useTranslation } from "react-i18next";
import { FaTrash,FaEdit,FaPlusSquare } from 'react-icons/fa';

import { TREATMENT_CATEGORIES } from '../../services/queries/TreatmentCategoriesQueries';
import { DESTROY_TREATMENT_CATEGORY } from '../../services/mutations/MutationsTreatmentCategory';

import TreatmentCategory from './Components/TreatmentCategory';
import CreateTreatmentCategory from '../Dashboard/CreateTreatmentCategory'

function ListTreatmentCategory(props){
	let { t } = useTranslation();

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
						<h2>{t("listTreatmentCategory.doctor.titleMain")}</h2>
						<FaPlusSquare type="button" className="add-btn-css" data-toggle="modal" data-target="#exampleModalCenter0" />
						<CreateTreatmentCategory treatmentCategory={0} />
					</div>
					:
					<React.Fragment>
						<h2>
							{t("listTreatmentCategory.public.title")}<br/>
							<small><strong>{t("etape")} 1:</strong> "{t("listTreatmentCategory.public.small")}"</small>
						</h2>
					</React.Fragment>
			}

			{
				data.treatmentCategories.length === 0 ? 
					<p>{t("listTreatmentCategory.public.message")}</p>
				:
				<div className="card-columns text-center" id="listTC-container">
					{
						data.treatmentCategories.map(treatmentCategory => (
							<div className="listTC-items card pointer text-left" key={treatmentCategory.id}>
								{
									props.match.path==='/doctor' ? 
										<React.Fragment>
											<FaTrash onClick={e => {
												let isTrue = window.confirm(`${t("listTreatmentCategory.doctor.confirm")}`);
												if(isTrue===true){
													toDestroyTreatmentCategory(e,treatmentCategory.id)
												}
											}}/>
											<FaEdit data-toggle="modal" data-target={`#exampleModalCenter${treatmentCategory.id}`} />
											<CreateTreatmentCategory treatmentCategory={treatmentCategory} />
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
