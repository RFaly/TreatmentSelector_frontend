import React, { useState } from 'react';

import { useMutation } from '@apollo/client';

import { CREATE_PATIENT } from '../../../services/mutations/MutationsPatient';

function CreatePatient({treatmentId}) {
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
				<div className="row">
					<input className="form-control" placeholder="Full Name" type="text" id="name_patient" name="name" defaultValue={params.name} onChange={(e)=>{changeParams(e)}}/>
				</div>

				<button type="submit">Confirm</button>
			</form>
			{mutationLoading && <p>Loading...</p>}
	        {mutationError && <p>Error: ( Please try again)</p>}
	        {mutationsData && <p>Donné sauvegardé</p>}
	    </div>
	)
}

export default CreatePatient
