import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { TREATMENT_CATEGORIES } from '../../services/queries/TreatmentCategoriesQueries'

import TreatmentCategory from './Components/TreatmentCategory';
import CreateTreatmentCategory from '../Dashboard/CreateTreatmentCategory'

function ListTreatmentCategory(props){

	const [newTreatmentCategories,setNewTreatmentCategories] = useState(null)

	let addNewTreatmentCategory = (treatmentCategory) => {
		setNewTreatmentCategories(treatmentCategory)
	}

	const {loading, error, data} = useQuery(TREATMENT_CATEGORIES);

	if (loading) return 'Loading ...';
	if (error) return `Error ${error.message}`;

	if (data) {
		console.log(data)
	}

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
						<div className="card pointer text-left" key={treatmentCategory.id} onClick={props.selectTreatmentCategory.bind(this,treatmentCategory)} >
							<TreatmentCategory treatmentCategory={treatmentCategory} />
						</div>
					))
				}
				{
					newTreatmentCategories ? 
					<h1>Bonjour BDBDBD {newTreatmentCategories.id} </h1>
					: <h1>Bonjour {newTreatmentCategories} </h1>
				}
			</div>
		</div>
	)
}

export default ListTreatmentCategory
