import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const TreatmentCategory = ({treatmentCategory}) => {
	return(
		<React.Fragment>
			<FaChevronDown className="rose" /> {treatmentCategory.nameEn} <span className="badge badge-primary badge-pill">{treatmentCategory.countTreatments}</span>
		</React.Fragment>
	)
}

export default TreatmentCategory

