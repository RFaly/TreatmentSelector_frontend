import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import $ from 'jquery';
import { useMutation } from '@apollo/client';

import { CREATE_TREATMENT_CATEGORY, UPDATE_TREATMENT_CATEGORY } from '../../services/mutations/MutationsTreatmentCategory';
import { TREATMENT_CATEGORIES } from '../../services/queries/TreatmentCategoriesQueries';

function CreateTreatmentCategory(props) {
	let { t, i18n } = useTranslation();
	const treatmentCategory = props.treatmentCategory

	const [nameEn,setNameEn] = useState(treatmentCategory === 0 ? '' : treatmentCategory.nameEn)
	const [nameFr,setNameFr] = useState(treatmentCategory === 0 ? '' : treatmentCategory.nameFr)
	const [nameMg,setNameMg] = useState(treatmentCategory === 0 ? '' : treatmentCategory.nameMg)

	const resetInput = () => {
		$("#nameEn").val('');
		$("#nameFr").val('');
		$("#nameMg").val('');
	    window.$(`#exampleModalCenter${treatmentCategory === 0 ? '0' : treatmentCategory.id}`).modal('hide');
	};

	const updateCache = (cache, {data}) => {
		const existingTreatmentCategories = cache.readQuery({
		  query: TREATMENT_CATEGORIES
		});
		const newTreatmentCategory = data.createTreatmentCategory.treatmentCategory;
		cache.writeQuery({
		  query: TREATMENT_CATEGORIES,
		  data: {treatmentCategories: [newTreatmentCategory, ...existingTreatmentCategories.treatmentCategories]}
		});
	}

	const [ createTreatmentCategory, { loading: mutationLoading, error: mutationError }] = useMutation(CREATE_TREATMENT_CATEGORY,
		{onCompleted : resetInput, update: updateCache}
	);

	let submitTreatmentCategory = (e) => {
		e.preventDefault();
		createTreatmentCategory(
			{ variables: { nameEn: nameEn, nameFr: nameFr, nameMg: nameMg }}
		);
	}

	const [ updateTreatmentCategory ] = useMutation(UPDATE_TREATMENT_CATEGORY
		,{onCompleted : resetInput}
	);

	let submitUpdateTreatmentCategory = (e) => {
		e.preventDefault();
		const TC = props.treatmentCategory
		updateTreatmentCategory({
		  variables: { treatmentCategoryId: parseInt(TC.id), nameEn: nameEn, nameFr: nameFr, nameMg: nameMg }
		});
	}

	return(
		<div>
			{
				mutationLoading && 
				<div className="alert alert-primary" role="alert">
					{t("mutationLoading")}
				</div>
			}

			{
				mutationError && 
				<div className="alert alert-danger" role="alert">
					{t("mutationError")}
				</div>
			}

	        <div className="modal fade" id={`exampleModalCenter${treatmentCategory === 0 ? '0' : treatmentCategory.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			  <div className="modal-dialog modal-dialog-centered" role="document">
			    	<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalCenterTitle">
								{ treatmentCategory === 0 ? 
									`${t("createTreatmentCategory.create.title")}`
								: 
									`${t("createTreatmentCategory.edit.title")} : "${treatmentCategory.nameEn}"`
								}
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
				      	<form onSubmit={
				      		treatmentCategory === 0 ? (e) => { submitTreatmentCategory(e) } :
				      			(e) => { submitUpdateTreatmentCategory(e) }
				      		}>

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

export default CreateTreatmentCategory
