import React, { useState } from 'react';

import { useMutation } from '@apollo/client';

import { CREATE_PATIENT } from '../../../services/mutations/MutationsPatient';

function CreatePatient({treatmentId,canceledChoice}) {
	// const [addTodo, { data }] = useMutation(CREATE_PATIENT);
  	const [ addTodo, { data: mutationsData, loading: mutationLoading, error: mutationError }] = useMutation(CREATE_PATIENT);

	const [params, setParams] = useState({name:'',id:treatmentId});

	let changeParams = (e) => {
		setParams({name: e.target.value, id:params.id})
	}

	let createPatientMutation = (e) => {
		document.getElementById("name_patient").value = "";
		e.preventDefault();
		addTodo({ variables: { name:params.name , treatmentId: parseInt(params.id) } });
	}

	if (mutationsData){
		console.log("dsfsdf",mutationsData)
	}

	return(
		<div>
			<form onSubmit={ (e) => { createPatientMutation(e) }}>
				<div className="form-group">
					<input required="required" className="form-control" placeholder="Full Name" type="text" id="name_patient" name="name" defaultValue={params.name} onChange={(e)=>{changeParams(e)}}/>
				</div>
				<div className="form-group">
					<button type="submit" className="btn pointer mr-3">Confirmé</button>
					<button className="btn pointer" onClick={canceledChoice.bind(this,null)}>Annulé</button>
				</div>
			</form>
			{mutationLoading && <p>Loading...</p>}
	        {mutationError && <p>Error: ( Please try again)</p>}
	        {mutationsData && <p>Donné sauvegardé</p>}
	    </div>
	)
}

export default CreatePatient
