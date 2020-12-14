import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const TreatmentCategory = ({treatmentCategory}) => {
	let { i18n } = useTranslation();
	let language = i18n.language;
	let treatmentCategoryName = treatmentCategory.nameEn

	if (language === "mg") {
		treatmentCategoryName = [null,""].includes(treatmentCategory.nameMg) ? treatmentCategory.nameFr : treatmentCategory.nameMg
		treatmentCategoryName = [null,""].includes(treatmentCategoryName) ? treatmentCategory.nameEn : treatmentCategoryName
	}else if (language === "fr") {
		treatmentCategoryName = [null,""].includes(treatmentCategory.nameFr) ? treatmentCategory.nameEn : treatmentCategory.nameFr
	}

	return(
		<React.Fragment>
			<FaChevronDown className="rose" /> {treatmentCategoryName}
		</React.Fragment>
	)
}

export default TreatmentCategory
