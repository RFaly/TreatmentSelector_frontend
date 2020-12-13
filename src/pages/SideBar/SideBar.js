import React from 'react';

import { Link } from 'react-router-dom';
import { FaClinicMedical, FaUserInjured, FaUserMd } from 'react-icons/fa';
// FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash
import './SideBar.css';

import { Trans, useTranslation } from "react-i18next";

import en from './en.png';
import fr from './fr.png';
import mg from './mg.png';

const SideBar = ({selectTreatmentCategory}) => {
	let { t, i18n } = useTranslation();

	let changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	return (
		<div id="my-side-bar" className="btn-group-vertical">
			<div className="my-icones"><Link className="btn" to="/"><FaClinicMedical /></Link></div>
			<div className="my-icones"><Link className="btn" to="/patient" onClick={(e)=>selectTreatmentCategory(null)}><FaUserInjured /></Link></div>
			<div className="my-icones"><Link className="btn" to="/doctor" onClick={(e)=>selectTreatmentCategory(null)}><FaUserMd /></Link></div>

			<img src={en} alt="en" className="image pointer" onClick={() => changeLanguage("en")}/>
			<img src={fr} alt="fr" className="image pointer" onClick={() => changeLanguage("fr")}/>
			<img src={mg} alt="mg" className="image pointer" onClick={() => changeLanguage("mg")}/>
		</div>
	)
}

export default SideBar

// selectTreatmentCategory.bind(this,null)
// <FaListAlt />
// <FaCheckSquare />
// <FaPlusSquare />
// <FaTrash />
