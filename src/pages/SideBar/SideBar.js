import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { FaClinicMedical, FaUserInjured, FaUserMd } from 'react-icons/fa';

import { userLogoutAttempt } from '../../redux/Auth/auth.action';
import './SideBar.css';

import en from './en.png';
import fr from './fr.png';
import mg from './mg.png';

const SideBar = (props) => {
	let { i18n } = useTranslation();

	let changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	const logout = () => {
	    props.userLogoutAttempt()
	}

	return (
		<div id="my-side-bar" className="btn-group-vertical">
			<div className="my-icones"><Link className="btn" to="/"><FaClinicMedical /></Link></div>
			<div className="my-icones"><Link className="btn" to="/patient" onClick={(e)=>props.selectTreatmentCategory(null)}><FaUserInjured /></Link></div>
			<div className="my-icones"><Link className="btn" to="/doctor" onClick={(e)=>props.selectTreatmentCategory(null)}><FaUserMd /></Link></div>

			<img src={en} alt="en" className="image pointer" onClick={() => changeLanguage("en")}/>
			<img src={fr} alt="fr" className="image pointer" onClick={() => changeLanguage("fr")}/>
			<img src={mg} alt="mg" className="image pointer" onClick={() => changeLanguage("mg")}/>

			<button onClick={() => logout()}>Déconnecter</button>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogoutAttempt: () => dispatch(userLogoutAttempt())
    }
}

export default connect(null, mapDispatchToProps)(SideBar);
