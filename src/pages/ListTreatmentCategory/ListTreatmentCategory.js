import React, { useState } from 'react';
import TreatmentCategory from './Components/TreatmentCategory';

// ~~~~~~~~~~~~~~~~~~~~~~~
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_TREATMENT_CATEGORIES = gql`
	{
	  treatmentCategories{
	    id,
	    nameEn,
	    nameFr,
	    nameMg,
	    treatments {
	      id,
	      nameEn,
	      nameFr,
	      nameMg
	    }
	  }
	}
`;

function ListTreatmentCategory({selectTreatmentCategory}){
	const {loading, error, data} = useQuery(GET_TREATMENT_CATEGORIES);
	if (loading) return 'Loading ...';
	if (error) return `Error ${error.message}`;
	return(
		<div>
			{
				data.treatmentCategories.map(treatmentCategory => {
					<div key={treatmentCategory.id} onClick={selectTreatmentCategory.bind(this,treatmentCategory)} >
						<TreatmentCategory treatmentCategory={treatmentCategory} />
					</div>
					<hr />
				})
			}
		</div>
	)
}

export default ListTreatmentCategory
