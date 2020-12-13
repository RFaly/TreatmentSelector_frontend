import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import $ from 'jquery';
import { FaTrash,FaEdit } from 'react-icons/fa';

import { TREATMENT_CATEGORIES } from '../../services/queries/TreatmentCategoriesQueries';
import { DESTROY_TREATMENT_CATEGORY } from '../../services/mutations/MutationsTreatmentCategory';


import TreatmentCategory from './Components/TreatmentCategory';
import CreateTreatmentCategory from '../Dashboard/CreateTreatmentCategory'

function ListTreatmentCategory(props){

	const deleteElementInNode = (e) => {
		$(e.target).parent().closest('div').remove()
	};

	const [ destroyTreatmentCategory] = useMutation(DESTROY_TREATMENT_CATEGORY);

	let toDestroyTreatmentCategory = (e,treatmentCategoryId) => {
		destroyTreatmentCategory(
			{ 
				variables: { treatmentCategoryId: parseInt(treatmentCategoryId)},
				onCompleted: deleteElementInNode(e)
			}
		);
	}

	const [newTreatmentCategories,setNewTreatmentCategories] = useState([])

	let addNewTreatmentCategory = (treatmentCategory) => {
		let arrayTC = [...newTreatmentCategories,treatmentCategory]
		setNewTreatmentCategories(arrayTC)
	}

	const {loading, error, data} = useQuery(TREATMENT_CATEGORIES);

	if (loading) return 'Loading ...';
	if (error) return `Error ${error.message}`;

	return(
		<div className="text-center container">
			{
				props.match.path==='/doctor' ?
					<div>
						<CreateTreatmentCategory selectTreatmentCategory={props.selectTreatmentCategory} addNewTreatmentCategory={addNewTreatmentCategory} />
					</div>
					:
					<React.Fragment>
						<h2>
							CATEGORIE DE TRAITEMENT DISPONIBLE<br/>
							<small>"Quelle traitement vous voulez?"</small>
						</h2>
					</React.Fragment>
			}
			<div className="card-columns text-center" id="listTC-container">
				{
					data.treatmentCategories.map(treatmentCategory => (
						<div className="card pointer text-left" key={treatmentCategory.id}>
							<FaTrash onClick={e => toDestroyTreatmentCategory(e,treatmentCategory.id)}/>
							<FaEdit/>
							<div onClick={props.selectTreatmentCategory.bind(this,treatmentCategory)} >
								<TreatmentCategory treatmentCategory={treatmentCategory} />
							</div>
						</div>
					))
				}
				{
					newTreatmentCategories.length===0 ? null 
						:
					newTreatmentCategories.map(treatmentCategory => (
						<div className="card pointer text-left" key={treatmentCategory.id}>
							<FaTrash onClick={e => toDestroyTreatmentCategory(e,treatmentCategory.id)}/>
							<FaEdit/>
							<div onClick={props.selectTreatmentCategory.bind(this,treatmentCategory)} >
								<TreatmentCategory treatmentCategory={treatmentCategory} />
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default ListTreatmentCategory
