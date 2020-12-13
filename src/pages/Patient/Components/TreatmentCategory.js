import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const TreatmentCategory = ({treatmentCategory}) => {
	return(
		<React.Fragment>
			<FaChevronDown className="rose" /> {treatmentCategory.nameEn}
		</React.Fragment>
	)
}

export default TreatmentCategory

