import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import HomePage from './HomePage/HomePage';
import ListTreatmentCategory from './ListTreatmentCategory/ListTreatmentCategory';
import SideBar from './SideBar/SideBar';

class App extends React.Component {
	render(){
		return(
			<BrowserRouter>
				<SideBar />
				<Switch>
					<Route path="/patient" component={ListTreatmentCategory} />
					<Route path="/doctor" component={HomePage} />
					<Route path="/" component={HomePage} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
