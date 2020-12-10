import React from 'react';
import { FaListAlt } from 'react-icons/fa'

const TreatmentCategory = ({name}) => {
	return(
		<div>
			<h2><FaListAlt />{name}</h2>
		</div>
	)	
}

export default TreatmentCategory
