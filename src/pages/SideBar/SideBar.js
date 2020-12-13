import React from 'react';
import { Link } from 'react-router-dom';
import { FaClinicMedical, FaUserInjured, FaUserMd } from 'react-icons/fa';
// FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash
import './SideBar.css';

const SideBar = ({selectTreatmentCategory}) => (
	<div id="my-side-bar" className="btn-group-vertical">
		<div className="my-icones"><Link className="btn" to="/"><FaClinicMedical /></Link></div>
		<div className="my-icones"><Link className="btn" to="/patient" onClick={(e)=>selectTreatmentCategory(null)}><FaUserInjured /></Link></div>
		<div className="my-icones"><Link className="btn" to="/doctor" onClick={(e)=>selectTreatmentCategory(null)}><FaUserMd /></Link></div>
	</div>
)

export default SideBar

// selectTreatmentCategory.bind(this,null)
// <FaListAlt />
// <FaCheckSquare />
// <FaPlusSquare />
// <FaTrash />
