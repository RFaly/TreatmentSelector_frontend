import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Trans, useTranslation } from "react-i18next";

const Treatment = ({treatment}) => {
	
	let { t, i18n } = useTranslation();
	let language = i18n.language;

	let treatmentName = treatment.nameEn

	if (language == "mg") {
		treatmentName = (treatment.nameMg == "") ? treatment.nameFr : treatment.nameMg
		treatmentName = (treatmentName == "") ? treatment.nameEn : treatmentName
	}else if (language == "fr") {
		treatmentName = (treatment.nameFr == "") ? treatment.nameEn : treatment.nameFr
	}

	return(
		<span><FaAngleRight className="rose" /> {treatmentName}</span>
	)
}

export default Treatment


// <div>{treatment.nameFr}</div>
// <div>{treatment.nameMg}</div>





