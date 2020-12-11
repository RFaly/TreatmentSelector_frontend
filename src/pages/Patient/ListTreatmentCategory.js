import React from 'react';
import TreatmentCategory from './Components/TreatmentCategory';

// ~~~~~~~~~~~~~~~~~~~~~~~
import { useQuery } from '@apollo/react-hooks';
import { TREATMENT_CATEGORIES } from '../../services/queries/TreatmentCategoriesQueries'

function ListTreatmentCategory({selectTreatmentCategory}){
	const {loading, error, data} = useQuery(TREATMENT_CATEGORIES);
	if (loading) return 'Loading ...';
	if (error) return `Error ${error.message}`;
	
	return(
		<div>
			{
				data.treatmentCategories.map(treatmentCategory => (
					<div key={treatmentCategory.id} onClick={selectTreatmentCategory.bind(this,treatmentCategory)} >
						<TreatmentCategory treatmentCategory={treatmentCategory} />
						<hr />
					</div>
				))
			}
		</div>
	)
}

export default ListTreatmentCategory
