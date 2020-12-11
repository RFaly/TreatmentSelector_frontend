import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaClinicMedical, FaUserInjured, FaUserMd, FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa';

const SideBar = ({selectTreatmentCategory}) => (
	<div>
		<ul>
			<li><NavLink to="/"><FaClinicMedical /></NavLink></li>
			<li><NavLink to="/patient" onClick={(e)=>selectTreatmentCategory(null)}><FaUserInjured /></NavLink></li>
			<li><NavLink to="/doctor" onClick={(e)=>selectTreatmentCategory(null)}><FaUserMd /></NavLink></li>
		</ul>
		<hr/>
	</div>
)

export default SideBar

// selectTreatmentCategory.bind(this,null)
// <FaListAlt />
// <FaCheckSquare />
// <FaPlusSquare />
// <FaTrash />
