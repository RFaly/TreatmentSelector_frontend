import React from 'react';
import { FaList } from 'react-icons/fa';

const TreatmentCategory = ({treatmentCategory}) => {
	return(
		<div>
			<h2><FaList />{treatmentCategory.nameEn}</h2>
			<hr />
		</div>
	)
}

export default TreatmentCategory
