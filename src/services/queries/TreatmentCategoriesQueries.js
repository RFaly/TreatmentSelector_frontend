import { gql } from '@apollo/client';

const TREATMENT_CATEGORIES = gql`
	query{
	  treatmentCategories{
	    id,
	    nameEn,
	    nameFr,
	    nameMg,
	    countTreatments,
	    treatments {
	      id,
	      nameEn,
	      nameFr,
	      nameMg,
	      treatmentCategory{
	      	id
	      }
	    }
	  }
	}
`;

export { TREATMENT_CATEGORIES }
