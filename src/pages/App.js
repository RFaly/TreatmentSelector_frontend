import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import HomePage from './HomePage/HomePage';
import SideBar from './SideBar/SideBar';

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
				<SideBar selectTreatmentCategory={this.selectTreatmentCategory} />
				<Switch>
					<Route path="/patient">
						{
							this.state.selectedTreatmentCategory ?
							<ListTreatment treatmentCategory={this.state.selectedTreatmentCategory} selectTreatmentCategory={this.selectTreatmentCategory} />:
							<ListTreatmentCategory selectTreatmentCategory={this.selectTreatmentCategory} />
						}
					</Route>
					<Route path="/doctor" component={HomePage} />
					<Route path="/" component={HomePage} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
