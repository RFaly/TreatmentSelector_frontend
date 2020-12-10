import React from 'react';

const FormConfirmed = ({treatment,canceledChoice}) => {
	return(
		<form>
            <h2>{treatment.nameEn}</h2>
			<input type="text"/>
			<input type="submit"/>
			<div><strong onClick={canceledChoice.bind(this,null)}>Canceled</strong></div>
		</form>
	)
}

export default FormConfirmed
