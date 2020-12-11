import gql from 'graphql-tag';

const CREATE_PATIENT = gql`
	mutation createPatient($name: String!, $treatmentId: int!){
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

export { CREATE_PATIENT };