import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage/HomePage';
import ListTreatmentCategory from './pages/ListTreatmentCategory/ListTreatmentCategory';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" component={HomePage} />
			<Route path="/patient" component={ListTreatmentCategory}/>
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
)
