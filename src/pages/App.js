import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import HomePage from './HomePage/HomePage';
import SideBar from './SideBar/SideBar';

import ListTreatmentCategory from './Patient/ListTreatmentCategory';
import ListTreatment from './Patient/ListTreatment';

import SignIn from "./Dashboard/SignIn";

import { connect } from 'react-redux';

class App extends React.Component {
	state = {
		selectedTreatmentCategory: null,
	}

	selectTreatmentCategory = (treatmentCategory) => {
		this.setState({selectedTreatmentCategory: treatmentCategory})
	}

	render(){

		const { isAuthenticated } = this.props;

		return(
			<BrowserRouter>
				<nav>
					<SideBar selectTreatmentCategory={this.selectTreatmentCategory} />
				</nav>
				<div id="main-div" className="d-flex flex-wrap justify-content-center align-items-center" >
					<SignIn />
					<Switch>
						<Route path="/patient">
							{ (props) => 
								this.state.selectedTreatmentCategory ?
								<ListTreatment {...props} pathName="/patient" treatmentCategory={this.state.selectedTreatmentCategory} selectTreatmentCategory={this.selectTreatmentCategory} /> :
								<ListTreatmentCategory {...props} selectTreatmentCategory={this.selectTreatmentCategory} />
							}
						</Route>
						{
							isAuthenticated ?
							<Route path="/doctor">
								{	(props) => 
									this.state.selectedTreatmentCategory ?
									<ListTreatment {...props} pathName="/doctor" treatmentCategory={this.state.selectedTreatmentCategory} selectTreatmentCategory={this.selectTreatmentCategory} /> :
									<ListTreatmentCategory {...props} selectTreatmentCategory={this.selectTreatmentCategory} />
								}
							</Route>
							: null
						}

						<Route path="/" component={HomePage} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

const mapStateToprops =(state) => {
  return {
    ...state.auth
  }
}

export default connect(mapStateToprops)(App);
