import React from 'react';

import { Link } from 'react-router-dom';
import { FaClinicMedical, FaUserInjured, FaUserMd } from 'react-icons/fa';
import {AiOutlineLogout} from 'react-icons/ai';

// FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash

import './SideBar.css';

import { useTranslation } from "react-i18next";

import en from './en.png';
import fr from './fr.png';
import mg from './mg.png';

import { userLogoutAttempt } from '../../redux/Auth/auth.action';
import { connect } from 'react-redux';

const SideBar = (props) => {
	let { i18n } = useTranslation();

	let changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	const logout = () => {
	    props.userLogoutAttempt()
	}

	let { isAuthenticated } = props;

	return (
		<div id="my-side-bar" className="btn-group-vertical">
			<div className="my-icones"><Link className="btn" to="/"><FaClinicMedical /></Link></div>
			<div className="my-icones"><Link className="btn" to="/patient" onClick={(e)=>props.selectTreatmentCategory(null)}><FaUserInjured /></Link></div>
			{
				isAuthenticated ?
					<React.Fragment>
						<div className="my-icones"><Link className="btn" to="/doctor" onClick={(e)=>props.selectTreatmentCategory(null)}><FaUserMd /></Link></div>
						<div className="my-icones">
							<span className="btn" onClick={() => logout()}>
								<AiOutlineLogout />
							</span>
						</div>
					</React.Fragment>
				:
					<div className="my-icones" data-toggle="modal" data-target="#exampleModalCenter">
						<span className="btn">
							<FaUserMd/>
						</span>
					</div>
			}
			<img src={en} alt="en" className="image pointer" onClick={() => changeLanguage("en")}/>
			<img src={fr} alt="fr" className="image pointer" onClick={() => changeLanguage("fr")}/>
			<img src={mg} alt="mg" className="image pointer" onClick={() => changeLanguage("mg")}/>

		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogoutAttempt: () => dispatch(userLogoutAttempt())
    }
}

export default connect(null, mapDispatchToProps)(SideBar);


/*
▶ npm install redux-thunk redux history axios formik yup react-redux
*/
