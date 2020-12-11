import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = ({selectTreatmentCategory}) => (
	<div>
		<ul>
			<li><NavLink to="/">Homme</NavLink></li>
			<li><NavLink to="/patient" onClick={(e)=>selectTreatmentCategory(null)}>Patient</NavLink></li>
			<li><NavLink to="/doctor">Doctor</NavLink></li>
		</ul>
		<hr/>
	</div>
)

export default SideBar

//selectTreatmentCategory.bind(this,null)