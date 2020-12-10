import React from 'react';

function ListTreatment({treatmentCategory,selectTreatmentCategory}){
	return(
		<div>
			<h2>{treatmentCategory.nameEn}</h2>
			{
				treatmentCategory.treatments.map(treatment => (
					<div key={treatment.id}>
			            <div>{treatment.nameEn}</div>
			            <div>{treatment.nameFr}</div>
			            <div>{treatment.nameMg}</div>
						<hr />
					</div>
				))
			}
			<button onClick={selectTreatmentCategory.bind(this,null)}>
				Back
			</button>
		</div>
	)
}

export default ListTreatment
