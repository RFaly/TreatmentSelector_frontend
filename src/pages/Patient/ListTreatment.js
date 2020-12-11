import React from 'react';
import Treatment from './Components/Treatment'
import FormConfirmed from './Components/FormConfirmed'

class ListTreatment extends React.Component {
	state = {
		treatment: null
	}

	canceledChoice = (value) => {
		this.setState({treatment: value})
	}

	render(){
		return(
			this.state.treatment?
			<FormConfirmed treatment={this.state.treatment} canceledChoice={this.canceledChoice} />:
			<div>
				<h2>{this.props.treatmentCategory.nameEn}</h2>
				{
					this.props.treatmentCategory.treatments.map(treatment => (
						<div key={treatment.id} onClick={() => this.canceledChoice(treatment)}>
							<Treatment treatment={treatment} />
							<hr />
						</div>
					))
				}
				<button onClick={this.props.selectTreatmentCategory.bind(this,null)}>
					Back
				</button>
			</div>
		)
	}

}

export default ListTreatment
