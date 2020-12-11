import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { TREATMENT_CATEGORIES } from '../../services/queries/TreatmentCategoriesQueries'
import { FaPlusSquare } from 'react-icons/fa'

import TreatmentCategory from './Components/TreatmentCategory';
import CreateTreatmentCategory from '../Dashboard/CreateTreatmentCategory'

function ListTreatmentCategory({selectTreatmentCategory}){

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
		<div>
			{
				data.treatmentCategories.map(treatmentCategory => (
					<div key={treatmentCategory.id} onClick={selectTreatmentCategory.bind(this,treatmentCategory)} >
						<TreatmentCategory treatmentCategory={treatmentCategory} />
						<hr />
					</div>
				))
			}
			{
				path=='/doctor' ? (
					<div>
						{
							addTC ? <CreateTreatmentCategory addTCategory={addTCategory}/> : <FaPlusSquare onClick={() => setAddTC(true)}/>
						}
					</div>
				) : null
			}
		</div>
	)
}

export default ListTreatmentCategory
