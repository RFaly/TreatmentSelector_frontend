import React from 'react';

const FormConfirmed = ({treatment,canceledChoice}) => {

	return(
		<div>
            <h2>{treatment.nameEn}</h2>
            <input type="text" />
			<div><strong onClick={canceledChoice.bind(this,null)}>Canceled</strong></div>
		</div>
	)
}

export default FormConfirmed



