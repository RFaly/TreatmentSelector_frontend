import React from 'react';
import { FaPlusSquare } from 'react-icons/fa'

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
			<div>
				{this.state.treatment?
				<FormConfirmed treatment={this.state.treatment} canceledChoice={this.canceledChoice} />:
				<div>
					<h2>{this.props.treatmentCategory.nameEn}</h2>
					{
						this.props.treatmentCategory.treatments.map(treatment => (
							<React.Fragment key={treatment.id}>
								<div onClick={ this.state.path === '/doctor' ? null :
								e => this.canceledChoice(treatment)}>
									<Treatment treatment={treatment} />
								</div>
							</React.Fragment>
						))
					}
					<button onClick={this.props.selectTreatmentCategory.bind(this,null)}>
						Back
					</button>
				</div>}
				{
					this.state.path=='/doctor' ? (
					<div>
						{
							this.state.addTC ? <CreateTreatment treatmentCategory={this.props.treatmentCategory} addTreatment={this.addTreatment}/> : <FaPlusSquare onClick={() => this.addTreatment()}/>
						}
					</div>
				) : null
				}

			</div>
		)
	}

}

export default ListTreatment
