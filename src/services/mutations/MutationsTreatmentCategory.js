import gql from 'graphql-tag';

const CREATE_TREATMENT_CATEGORY = gql`
	mutation createTreatmentCategory($nameEn: String!, $nameFr: String!, $nameMg: String!){
		createTreatmentCategory(input:{
			nameEn: $nameEn
	    	nameFr: $nameFr
	    	nameMg: $nameMg
		}){
			treatmentCategory {
				id,
				nameEn,
				nameMg,
				nameFr
			}
			errors
		}
	}
`;

const UPDATE_TREATMENT_CATEGORY = gql`
	mutation updateTreatmentCategory($treatmentCategoryId: int!, $nameEn: String!, $nameFr: String!, $nameMg: String!){
		updateTreatmentCategory(input:{
			treatmentCategoryId: $treatmentCategoryId,
			nameEn: $nameEn,
			nameFr: $nameFr,
			nameMg: $nameMg
		}){
			treatmentCategory{
				id,
				nameEn,
				nameMg,
				nameFr
			}
			errors
		}
	}
`;

const DESTROY_TREATMENT_CATEGORY = gql`
	mutation destroyTreatmentCategory($treatmentCategoryId: int!){
		destroyTreatmentCategory(input:{
			treatmentCategoryId: $treatmentCategoryId
		}){
			errors
		}
	}
`;

export { CREATE_TREATMENT_CATEGORY, UPDATE_TREATMENT_CATEGORY, DESTROY_TREATMENT_CATEGORY };
