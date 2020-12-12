import React from 'react';
import { NavLink } from 'react-router-dom';

class HomePage extends React.Component {
	render(){
		return(
			<div>

				<img src="https://mtomady.mg/wp-content/uploads/2018/05/logo-mtomady-madagascar.png" alt="" width="90%"/>
				
				<center>

				<h1 className="text-red-500">I'm</h1>

				<div className="row">
					<div className="col-sm-6">
						<NavLink to="/patient" className="btn btn-primary" >Patient</NavLink>
					</div>
					<div className="col-sm-6">
						<NavLink to="/doctor" className="btn btn-primary" >Doctor</NavLink>
					</div>
				</div>

				</center>
			</div>
		)
	}
}

export default HomePage
