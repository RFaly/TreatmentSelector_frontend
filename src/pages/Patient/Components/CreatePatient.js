import React, { useState } from 'react';
import history from '../../../history';
import { useMutation } from '@apollo/client';
import { CREATE_PATIENT } from '../../../services/mutations/MutationsPatient';
import { useTranslation } from "react-i18next";

function CreatePatient({treatmentId,canceledChoice}) {
	let { t } = useTranslation();
  	const [ addPatientToTreatment, { data: mutationsData, loading: mutationLoading, error: mutationError }] = useMutation(CREATE_PATIENT);

	const [params, setParams] = useState({name:'',id:treatmentId});

	let changeParams = (e) => {
		setParams({name: e.target.value, id:params.id})
	}

	let createPatientMutation = (e) => {
		document.getElementById("name_patient").value = "";
		e.preventDefault();
		addPatientToTreatment({ variables: { name:params.name , treatmentId: parseInt(params.id) } });

		setTimeout(() => {
			history.push("/")
			window.location.reload()
		}, 5000);
	}
	
	return(
		<div>
			<form onSubmit={ (e) => { createPatientMutation(e) }}>
				<div className="form-group">
					<input required="required" className="form-control" placeholder={t("createPatien.input")} type="text" id="name_patient" name="name" defaultValue={params.name} onChange={(e)=>{changeParams(e)}}/>
				</div>
				<div className="form-group">
					<button type="submit" className="btn pointer mr-3">{t("createPatien.button1")}</button>
					<button className="btn pointer" onClick={canceledChoice.bind(this,null)}>{t("createPatien.button2")}</button>
				</div>
			</form>
			{mutationLoading && <p>{t("mutationLoading")}</p>}
	        {mutationError && <p className="alert alert-danger">{t("mutationError")}</p>}
	        {
	        	mutationsData && <p className="alert alert-success">
	        		{t("createPatien.notice")}
	        	</p>
	        }
	    </div>
	)
}

export default CreatePatient
