import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { TREATMENT_CATEGORIES } from '../../services/queries/TreatmentCategoriesQueries'
import { FaPlusSquare } from 'react-icons/fa'

import TreatmentCategory from './Components/TreatmentCategory';
import CreateTreatmentCategory from '../Dashboard/CreateTreatmentCategory'

function ListTreatmentCategory(props){

	const [path, setPath] = useState(window.location.pathname);

	const [addTC, setAddTC] = useState(false);
	// const [dataList, setDataList] = useState(null);
	let addTCategory = (value) => {
		setAddTC(value)
	}

	const {loading, error, data} = useQuery(TREATMENT_CATEGORIES);

	if (loading) return 'Loading ...';
	if (error) return `Error ${error.message}`;
	
	

	return(
		<div className="text-center">
			{
				props.match.path==='/doctor' ?
					<div>
						<CreateTreatmentCategory addTCategory={addTCategory}/>
					</div>
					:
					<React.Fragment>
						<h2>
							CATEGORIE DE TRAITEMENT DISPONIBLE<br/>
							<small>"Quelle traitement vous voulez?"</small>
						</h2>
					</React.Fragment>
			}
			<div className="card-columns text-center">
				{
					data.treatmentCategories.map(treatmentCategory => (
						<div className="card pointer text-left" key={treatmentCategory.id} onClick={props.selectTreatmentCategory.bind(this,treatmentCategory)} >
							<TreatmentCategory treatmentCategory={treatmentCategory} />
						</div>
					))
				}
			</div>
		</div>
	)
}

export default ListTreatmentCategory
