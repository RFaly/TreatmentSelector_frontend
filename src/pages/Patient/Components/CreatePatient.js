import gql from 'graphql-tag';
import React from 'react';
import { Mutation } from 'react-apollo';

const CREATE_PATIENT = gql`
	mutation createPatient($name: String!, $treatmentId: ID!){
		createPatient(input:{
			name: $name,
	    	treatmentId: $treatmentId
		}){
			patient {
				id,
				name
			}
			errors
		}
	}
`;

class CreatePatient extends React.Component {
	state = {
		name: '',
		treatmentId: null
	}

	onSubmit = (e,createPatient) => {
		e.preventDefault();
		createPatient({variables: this.state})
		this.state({name:'',treatmentId:''})
	}

	render(){
		return(
			<Mutation mutation={CREATE_PATIENT} update={this.props.onCreatePatient}>
			{
				createPatientMutation => (
					<form onSubmit={e => this.onSubmit(e,createPatientMutation)}>
			            <h2>{treatment.nameEn}</h2>
						<input type="text" value={this.state.name} onChange={e=>this.setState({name: e.target.value})}/>
						<button type="submit">Confirmed</button>
						<hr/>
						<div><strong onClick={canceledChoice.bind(this,null)}>Canceled</strong></div>
					</form>
				)
			}
			</Mutation>
		);
	}
}

export default CreatePatient;

