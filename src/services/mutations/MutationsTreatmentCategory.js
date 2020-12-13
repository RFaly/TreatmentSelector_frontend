import { gql } from '@apollo/client';

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
				nameFr,
				nameMg
			}
			errors
		}
	}
`;

const UPDATE_TREATMENT_CATEGORY = gql`
	mutation updateTreatmentCategory($treatmentCategoryId: ID!, $nameEn: String!, $nameFr: String!, $nameMg: String!){
		updateTreatmentCategory(input:{
			nameEn: $nameEn,
			nameFr: $nameFr,
			nameMg: $nameMg,
			treatmentCategoryId: $treatmentCategoryId
		}){
			treatmentCategory{
				id,
				nameEn,
				nameFr,
				nameMg
			}
			errors
		}
	}
`;

const DESTROY_TREATMENT_CATEGORY = gql`
	mutation destroyTreatmentCategory($treatmentCategoryId: ID!){
		destroyTreatmentCategory(input:{
			treatmentCategoryId: $treatmentCategoryId
		}){
			errors
		}
	}
`;

export { CREATE_TREATMENT_CATEGORY, UPDATE_TREATMENT_CATEGORY, DESTROY_TREATMENT_CATEGORY };
