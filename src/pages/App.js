import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import HomePage from './HomePage/HomePage';
import SideBar from './SideBar/SideBar';

import ListTreatmentCategory from './ListTreatmentCategory/ListTreatmentCategory';
import ListTreatment from './ListTreatment/ListTreatment';

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
				<SideBar />
				<Switch>
					<Route path="/patient" render={
						this.state.selectedTreatmentCategory ?
						<ListTreatment treatmentCategory={this.state.treatmentCategory} selectTreatmentCategory={this.selectTreatmentCategory} /> : 
						<ListTreatmentCategory selectTreatmentCategory={this.selectTreatmentCategory} />
					} />

					<Route path="/doctor" component={HomePage} />
					<Route path="/" component={HomePage} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
