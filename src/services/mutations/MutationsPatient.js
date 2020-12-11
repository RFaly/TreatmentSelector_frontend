import { gql } from '@apollo/client';

const CREATE_PATIENT = gql`
	mutation createPatient($name: String!, $treatmentId: Int!){
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
