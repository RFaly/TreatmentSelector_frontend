import React, { useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa'
import { useMutation } from '@apollo/client';
import $ from 'jquery';

import { CREATE_TREATMENT } from '../../services/mutations/MutationsTreatment';
//UPDATE_TREATMENT
import { TREATMENTS } from '../../services/queries/TreatmentCategoriesQueries';

function CreateTreatment({treatmentCategory}) {
	const [nameEn,setNameEn] = useState('')
	const [nameFr,setNameFr] = useState('')
	const [nameMg,setNameMg] = useState('')

	// const [treatmentCategoryId,setTreatmentCategoryId] = useState(treatmentCategory.id)

	const resetInput = () => {
		$("#nameEn").val('');
		$("#nameFr").val('');
		$("#nameMg").val('');
	    window.$('#exampleModalCenter').modal('hide');
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

	return(
		<div>

			<h2>Ajouter un nouveau traitement</h2>
			<FaPlusSquare type="button" className="add-btn-css" data-toggle="modal" data-target="#exampleModalCenter" />

	        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			  <div className="modal-dialog modal-dialog-centered" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id="exampleModalCenterTitle">Entrer le nom du traitement</h5>
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      	<form onSubmit={ (e) => { submitTreatment(e) }}>
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
							{mutationError && <p>Error: ( Please try again)</p>}
							{
								mutationsData && 
								<p>
									Donné sauvegardé
								</p>
							}
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

export default CreateTreatment
