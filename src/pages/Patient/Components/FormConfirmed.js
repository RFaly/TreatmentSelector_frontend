import React from 'react';
import CreatePatient from './CreatePatient';

const FormConfirmed = ({treatment,canceledChoice}) => {

	return(
		<div>
            <h2>Traitement demandé: "{treatment.nameEn}"</h2>
            <CreatePatient canceledChoice={canceledChoice} treatmentId={treatment.id} />
		</div>
	)
}

export default FormConfirmed



