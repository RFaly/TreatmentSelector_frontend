import React from 'react';
import { FaListAlt } from 'react-icons/fa'

const TreatmentCategory = ({treatmentCategory}) => {
	return(
		<div>
			<h2><FaListAlt />{treatmentCategory.nameEn}</h2>
			<hr />
		</div>
	)
}

export default TreatmentCategory
