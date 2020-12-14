import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import $ from 'jquery';
import { useTranslation } from "react-i18next";

import { CREATE_TREATMENT, UPDATE_TREATMENT } from '../../services/mutations/MutationsTreatment';
import { TREATMENTS } from '../../services/queries/TreatmentCategoriesQueries';

function CreateTreatment({treatmentCategory,treatmentItem}) {

	let { t, i18n } = useTranslation();
	const [nameEn,setNameEn] = useState(treatmentItem === 0 ? '' : treatmentItem.nameEn)
	const [nameFr,setNameFr] = useState(treatmentItem === 0 ? '' : treatmentItem.nameFr)
	const [nameMg,setNameMg] = useState(treatmentItem === 0 ? '' : treatmentItem.nameMg)

	const resetInput = () => {
		$("#nameEn").val('');
		$("#nameFr").val('');
		$("#nameMg").val('');
		window.$(`#exampleModalCenter${treatmentItem === 0 ? '0' : treatmentItem.id}`).modal('hide');
	};

	const updateCache = (cache, {data}) => {
		const existingTreatments = cache.readQuery({
		  	query: TREATMENTS, variables: { 
	  			treatmentCategory: parseInt(treatmentCategory.id) 
	  		}
		});

		const newTreatment = data.createTreatment.treatment;

		cache.writeQuery({
			query: TREATMENTS, variables: { 
				treatmentCategory: parseInt(treatmentCategory.id) 
			},
		  	data: {treatments: [newTreatment, ...existingTreatments.treatments]}
		});
	}

	const [ createTreatment, { data: mutationsData, loading: mutationLoading, error: mutationError }] = useMutation(CREATE_TREATMENT,
		{onCompleted : resetInput, update: updateCache}
	);


	let submitTreatment = (e) => {
		e.preventDefault();
		createTreatment({ variables: { nameEn: nameEn, nameFr: nameFr, nameMg: nameMg, treatmentCategoryId: parseInt(treatmentCategory.id) }});
	}

	const [ updateTreatment ] = useMutation(UPDATE_TREATMENT
		,{onCompleted : resetInput}
	);

	let submitUpdateTreatment = (e) => {
		e.preventDefault();
		updateTreatment({
		  variables: { treatmentId: parseInt(treatmentItem.id), nameEn: nameEn, nameFr: nameFr, nameMg: nameMg }
		});
	}

	return(
		<div>
	        <div className="modal fade" id={`exampleModalCenter${treatmentItem === 0 ? '0' : treatmentItem.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			  <div className="modal-dialog modal-dialog-centered" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id="exampleModalCenterTitle">
			        	{ treatmentItem === 0 ? 
							`${t("createTreatment.create.title")}`
						: 
							`${t("createTreatment.edit.title")} : "${treatmentItem.nameEn}"`
						}
			        </h5>
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>

			      	<form onSubmit={ treatmentItem === 0 ? (e) => { submitTreatment(e) } :
					      			(e) => { submitUpdateTreatment(e) } } >
						<div className="modal-body">
							<div className="form-group">
								<label htmlFor="nameEn">{t("createTreatmentCategory.nameEn")}</label>
								<input type="text" required="required" id="nameEn" className="form-control" name="nameEn" defaultValue={nameEn} onChange={(e)=>{setNameEn(e.target.value)}}/>
							</div>
							<div className="form-group">
								<label htmlFor="nameFr">{t("createTreatmentCategory.nameFr")}</label>
								<input type="text" id="nameFr" className="form-control" name="nameFr" defaultValue={nameFr} onChange={(e)=>{setNameFr(e.target.value)}}/>
							</div>
							<div className="form-group">
								<label htmlFor="nameMg">{t("createTreatmentCategory.nameMg")}</label>
								<input type="text" id="nameMg" className="form-control" name="nameMg" defaultValue={nameMg} onChange={(e)=>{setNameMg(e.target.value)}}/>
							</div>
							{mutationLoading && <p>{t("mutationLoading")}</p>}
							{mutationError && <p>{t("mutationError")}</p>}
							{
								mutationsData && 
								<p>
									{t("mutationsData")}
								</p>
							}
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">{t("createTreatmentCategory.button2")}</button>
							<button type="submit" className="btn btn-primary">{t("createTreatmentCategory.button1")}</button>
						</div>
					</form>
			    </div>
			  </div>
			</div>
	    </div>
	)
}

export default CreateTreatment
