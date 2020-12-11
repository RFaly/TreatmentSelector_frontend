import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TREATMENT_CATEGORY, UPDATE_TREATMENT_CATEGORY } from '../../services/mutations/MutationsTreatmentCategory';

function CreateTreatmentCategory({treatmentCategory,addTCategory}) {
	const [ createTreatmentCategory, { data: mutationsData, loading: mutationLoading, error: mutationError }] = useMutation(CREATE_TREATMENT_CATEGORY);

	const [nameEn,setNameEn] = useState('')
	const [nameFr,setNameFr] = useState('')
	const [nameMg,setNameMg] = useState('')
	// const [treatmentCategoryId,setTreatmentCategoryId] = useState(treatmentCategory.id)

	let createPatientMutation = (e) => {
		e.preventDefault();
		createTreatmentCategory({ variables: { nameEn: nameEn, nameFr: nameFr, nameMg: nameMg }});
		addTCategory(false);
	}

	return(
		<div>
			<form onSubmit={ (e) => { createPatientMutation(e) }}>
				<input type="text" id="nameEn" name="nameEn" defaultValue={nameEn} onChange={(e)=>{setNameEn(e.target.value)}}/>
				<input type="text" id="nameFr" name="nameFr" defaultValue={nameFr} onChange={(e)=>{setNameFr(e.target.value)}}/>
				<input type="text" id="nameMg" name="nameMg" defaultValue={nameMg} onChange={(e)=>{setNameMg(e.target.value)}}/>
				<button type="submit">Confirm</button>
			</form>
			{mutationLoading && <p>Loading...</p>}
	        {mutationError && <p>Error: ( Please try again)</p>}
	        {mutationsData && <p>Donné sauvegardé</p>}
	    </div>
	)

}

export default CreateTreatmentCategory
