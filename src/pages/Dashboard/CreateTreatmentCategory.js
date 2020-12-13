import React, { useState } from 'react';
import $ from 'jquery';
import { useMutation } from '@apollo/client';

import { CREATE_TREATMENT_CATEGORY, UPDATE_TREATMENT_CATEGORY } from '../../services/mutations/MutationsTreatmentCategory';

import { TREATMENT_CATEGORIES } from '../../services/queries/TreatmentCategoriesQueries';

function CreateTreatmentCategory(props) {

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

	// const [treatmentCategoryId,setTreatmentCategoryId] = useState(treatmentCategory.id)

	const [ createTreatmentCategory, { loading: mutationLoading, error: mutationError }] = useMutation(CREATE_TREATMENT_CATEGORY,
		{onCompleted : resetInput, update: updateCache}
	);

	let submitTreatmentCategory = (e) => {
		e.preventDefault();
		createTreatmentCategory(
			{ variables: { nameEn: nameEn, nameFr: nameFr, nameMg: nameMg }}
		);
	}

	const updateCacheUpdate = (cache, {data}) => {
		console.log("Bonjour a tous")
	}

	const [ updateTreatmentCategory ] = useMutation(UPDATE_TREATMENT_CATEGORY
		,{onCompleted : resetInput, update: updateCacheUpdate}
	);

	let submitUpdateTreatmentCategory = (e) => {
		e.preventDefault();
		const TC = props.treatmentCategory
		updateTreatmentCategory({
		  variables: { variables: { treatmentCategoryId: parseInt(TC.id), nameEn: "nameEn", nameFr: "nameFr", nameMg: "nameMg" }}
		});
	}


	return(
		<div>
			{
				mutationLoading && 
				<div className="alert alert-primary" role="alert">
				  Loading...
				</div>
			}

			{
				mutationError && 
				<div className="alert alert-danger" role="alert">
				  Error: ( Please try again)
				</div>
			}

	        <div className="modal fade" id={`exampleModalCenter${treatmentCategory === 0 ? '0' : treatmentCategory.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			  <div className="modal-dialog modal-dialog-centered" role="document">
			    	<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalCenterTitle">
								{ treatmentCategory === 0 ? 
								"Crée un nouveau categorie de traitement"
								: 
								`Modification de la categorie de traitment suivant : "${treatmentCategory.nameEn}"`
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
									<label htmlFor="nameEn">Version anglais</label>
									<input type="text" required="required" id="nameEn" className="form-control" name="nameEn" defaultValue={nameEn} onChange={(e)=>{setNameEn(e.target.value)}}/>
								</div>
								<div className="form-group">
									<label htmlFor="nameFr">Version français</label>
									<input type="text" id="nameFr" className="form-control" name="nameFr" defaultValue={nameFr} onChange={(e)=>{setNameFr(e.target.value)}}/>
								</div>
								<div className="form-group">
									<label htmlFor="nameMg">Version malagasy</label>
									<input type="text" id="nameMg" className="form-control" name="nameMg" defaultValue={nameMg} onChange={(e)=>{setNameMg(e.target.value)}}/>
								</div>
								{mutationLoading && <p>Loading...</p>}
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="submit" className="btn btn-primary">Confirm</button>
							</div>
						</form>
			    	</div>
			  	</div>
			</div>
	    </div>
	)

}

export default CreateTreatmentCategory
