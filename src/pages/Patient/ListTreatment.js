import React from 'react';

import Treatment from './Components/Treatment'
import FormConfirmed from './Components/FormConfirmed'
import CreateTreatment from '../Dashboard/CreateTreatment'

class ListTreatment extends React.Component {
	state = {
		treatment: null,
		path: window.location.pathname,
		addTC: false,
	}

	addTreatment = () => {
		this.setState(prevState => ({addTC: !prevState.addTC}))
	}

	canceledChoice = (value) => {
		this.setState({treatment: value})
	}


	render(){
		return(
			<div className="text-center">
				{
					this.props.match.path=='/doctor' ? (
						<CreateTreatment treatmentCategory={this.props.treatmentCategory} />
					)
					: null
				}
				{
					this.state.treatment?
						<FormConfirmed treatment={this.state.treatment} canceledChoice={this.canceledChoice} />
					:
						<React.Fragment>
							{this.props.match.path=='/doctor' ?  null : 
								<h2>
									LES TRAITMENTS DISPONIBLES<br/>
									<small>"Vous pouvez choisir le traitement parmi ses listes"</small>
								</h2>}
							<h2>{this.props.treatmentCategory.nameEn}:</h2>
							<div className="card-columns text-center">
								{
									this.props.treatmentCategory.treatments.map(treatment => (
										<div className="card pointer text-left" key={treatment.id} onClick={ this.state.path === '/doctor' ? null :
										e => this.canceledChoice(treatment)}>
											<Treatment treatment={treatment} />
										</div>
									))
								}
							</div>
							<button className="btn pointer" onClick={this.props.selectTreatmentCategory.bind(this,null)}>
								Back
							</button>
						</React.Fragment>
				}

			</div>
		)
	}

}

export default ListTreatment
