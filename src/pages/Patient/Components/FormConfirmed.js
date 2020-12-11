import React from 'react';
import CreatePatient from './CreatePatient';

const FormConfirmed = ({treatment,canceledChoice}) => {

	return(
		<div>
            <h2>{treatment.nameEn}</h2>
            <CreatePatient treatmentId={treatment.id} />
			<div><strong onClick={canceledChoice.bind(this,null)}>Canceled</strong></div>
		</div>
	)
}

export default FormConfirmed



