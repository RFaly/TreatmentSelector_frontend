import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => (
	<div>
		<ul>
			<li><NavLink to="/">Homme</NavLink></li>
			<li><NavLink to="/patient">Patient</NavLink></li>
			<li><NavLink to="/doctor">Doctor</NavLink></li>
		</ul>
		<hr/>
	</div>
)

export default SideBar
