import gql from 'graphql-tag';

const TREATMENT_CATEGORIES = gql`
	query{
	  treatmentCategories{
	    id,
	    nameEn,
	    nameFr,
	    nameMg,
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
