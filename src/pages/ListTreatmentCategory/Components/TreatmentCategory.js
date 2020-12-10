import React from 'react';
import { FaListAlt } from 'react-icons/fa'

const TreatmentCategory = ({treatmentCategory}) => {
	return(
		<div>
			<h2><FaListAlt />{treatmentCategory.nameEn}</h2>
			{
				treatmentCategory.treatments.map(treatment => {
					<div key={treatment.id}>
			            <div>{treatment.nameEn}</div>
			            <div>{treatment.nameFr}</div>
			            <div>{treatment.nameMg}</div>
					</div>
				})
			}
			<hr />
		</div>
	)
}

export default TreatmentCategory
