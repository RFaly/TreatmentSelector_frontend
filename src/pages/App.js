import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import HomePage from './HomePage/HomePage';
import SideBar from './SideBar/SideBar';
import Dashboard from './Dashboard/Dashboard';

import ListTreatmentCategory from './Patient/ListTreatmentCategory';
import ListTreatment from './Patient/ListTreatment';

class App extends React.Component {
	state = {
		selectedTreatmentCategory: null
	}

	selectTreatmentCategory = (treatmentCategory) => {
		this.setState({selectedTreatmentCategory: treatmentCategory})
	}

	render(){
		return(
			<BrowserRouter>
				<nav >
					<SideBar selectTreatmentCategory={this.selectTreatmentCategory} />
				</nav>
				<div id="main-div" className="d-flex flex-wrap justify-content-center align-items-center" >
					<Switch>
						<Route path="/patient">
							{
								this.state.selectedTreatmentCategory ?
								<ListTreatment pathName="/patient" treatmentCategory={this.state.selectedTreatmentCategory} selectTreatmentCategory={this.selectTreatmentCategory} />:
								<ListTreatmentCategory selectTreatmentCategory={this.selectTreatmentCategory} />
							}
						</Route>
						<Route path="/doctor">
							{
								this.state.selectedTreatmentCategory ?
								<ListTreatment pathName="/doctor" treatmentCategory={this.state.selectedTreatmentCategory} selectTreatmentCategory={this.selectTreatmentCategory} />:
								<ListTreatmentCategory selectTreatmentCategory={this.selectTreatmentCategory} />
							}
						</Route>
						<Route path="/" component={HomePage} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default App
