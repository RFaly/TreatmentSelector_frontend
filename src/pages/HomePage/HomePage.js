import React from 'react';
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

class HomePage extends React.Component {
	render(){
		return(
			<div>
				<FaListAlt />
				<FaCheckSquare />
				<FaPlusSquare />
				<FaTrash />

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
