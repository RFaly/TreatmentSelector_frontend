import { gql } from '@apollo/client';

const TREATMENT_CATEGORIES = gql`
	query{
	  treatmentCategories{
	    id,
	    nameEn,
	    nameFr,
	    nameMg,
	    countTreatments
	  }
	}
`;

const TREATMENTS = gql`
	query Treatments($treatmentCategory: ID!) {
	    treatments(treatmentCategory: $treatmentCategory) {
	      	id,
		    nameEn,
		    nameFr,
		    nameMg
	    }
	}
`;

export { TREATMENT_CATEGORIES, TREATMENTS }
