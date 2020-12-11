import gql from 'graphql-tag';

const CREATE_TREATMENT = gql`
	mutation createTreatment($nameEn: String!, $nameFr: String!, $nameMg: String!, $treatmentCategoryId: int!){
		createTreatment(input:{
			nameEn: $nameEn
	    	nameFr: $nameFr
	    	nameMg: $nameMg
	    	treatmentCategoryId: $treatmentCategoryId
		}){
			treatment {
				id,
				nameEn,
				nameFr,
				nameMg
			}
			errors
		}
	}
`;

const UPDATE_TREATMENT = gql`
	mutation updateTreatment($treatmentId: int!, $nameEn: String!, $nameFr: String!, $nameMg: String!){
		updateTreatment(input:{
			treatmentId: $treatmentId,
			nameEn: $nameEn,
			nameFr: $nameFr,
			nameMg: $nameMg
		}){
			treatment{
				id,
				nameEn,
				nameMg,
				nameFr
			}
			errors
		}
	}
`;

const DESTROY_TREATMENT = gql`
	mutation destroyTreatment($treatmentId: int!){
		destroyTreatment(input:{
			treatmentId: $treatmentId
		}){
			errors
		}
	}
`;

export { CREATE_TREATMENT, UPDATE_TREATMENT, DESTROY_TREATMENT };
