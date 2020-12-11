import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaClinicMedical, FaUserInjured, FaUserMd, FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa';
import './SideBar.css';

const SideBar = ({selectTreatmentCategory}) => (
	<div id="my-side-bar" className="btn-group-vertical">
		<div className="my-icones"><NavLink className="btn" to="/"><FaClinicMedical /></NavLink></div>
		<div className="my-icones"><NavLink className="btn" to="/patient" onClick={(e)=>selectTreatmentCategory(null)}><FaUserInjured /></NavLink></div>
		<div className="my-icones"><NavLink className="btn" to="/doctor" onClick={(e)=>selectTreatmentCategory(null)}><FaUserMd /></NavLink></div>
	</div>
)

export default SideBar

// selectTreatmentCategory.bind(this,null)
// <FaListAlt />
// <FaCheckSquare />
// <FaPlusSquare />
// <FaTrash />
