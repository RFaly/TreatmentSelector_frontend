import React from 'react';
import { NavLink } from 'react-router-dom';

class HomePage extends React.Component {
	render(){
		return(
			<div>

				<hr/>
				<NavLink to="/patient">Patient</NavLink>
				<hr/>
				<NavLink to="/doctor">Doctor</NavLink>
				<hr/>

				<h1>Kilinika mtomady</h1>

			</div>
		)
	}
}

export default HomePage
