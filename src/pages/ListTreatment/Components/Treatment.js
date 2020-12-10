import React from 'react';

const Treatment = ({treatment}) => {
	return(
		<div>
			<div>{treatment.nameEn}</div>
            <div>{treatment.nameFr}</div>
            <div>{treatment.nameMg}</div>
            <div>{treatment.treatmentCategory.id}</div>
		</div>
	)
}

export default Treatment
