import React from 'react';

function ListTreatment({treatmentCategory,selectTreatmentCategory}){
	return(
		<div>
			<h2><FaListAlt />{treatmentCategory.nameEn}</h2>
			{
				treatmentCategory.treatments.map(treatment => {
					<div key={treatment.id}>
			            <div>{treatment.nameEn}</div>
			            <div>{treatment.nameFr}</div>
			            <div>{treatment.nameMg}</div>
					</div>
					<hr />
				})
			}
			<button onClick={selectTreatmentCategory.bind(this,null)}>
				Back
			</button>
		</div>
	)
}

export default ListTreatment
