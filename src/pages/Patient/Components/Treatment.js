import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const Treatment = ({treatment, noIcone}) => {
	
	let { i18n } = useTranslation();
	let language = i18n.language;

	let treatmentName = treatment.nameEn

	if (language === "mg") {
		treatmentName = [null,""].includes(treatment.nameMg) ? treatment.nameFr : treatment.nameMg
		treatmentName = [null,""].includes(treatmentName) ? treatment.nameEn : treatmentName
	}else if (language === "fr") {
		treatmentName = [null,""].includes(treatment.nameFr) ? treatment.nameEn : treatment.nameFr
	}

	return(
		<span>{noIcone === true ? null : <FaAngleRight className="rose" />}{treatmentName}</span>
	)
}

export default Treatment


// <div>{treatment.nameFr}</div>
// <div>{treatment.nameMg}</div>





