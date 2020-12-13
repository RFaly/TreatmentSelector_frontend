import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import $ from 'jquery';

import Treatment from './Components/Treatment'
import FormConfirmed from './Components/FormConfirmed'
import CreateTreatment from '../Dashboard/CreateTreatment'

import { useQuery } from '@apollo/client';
import { TREATMENTS } from '../../services/queries/TreatmentCategoriesQueries'
import { DESTROY_TREATMENT } from '../../services/mutations/MutationsTreatment';

import { FaTrash,FaEdit } from 'react-icons/fa';


function ListTreatment (props) {

	const deleteElementInNode = (e) => {
		$(e.target).parent().closest('div').remove()
	};

	const [ destroyTreatment] = useMutation( DESTROY_TREATMENT );

	let toDestroyTreatment = (e,treatmentId) => {
		destroyTreatment(
			{ 
				variables: { treatmentId: parseInt(treatmentId)},
				onCompleted: deleteElementInNode(e)
			}
		);
	}

	const [newTreatments,setNewTreatment] = useState([])
	let path = props.match.path
	const [treatment, setTreatment] = useState(null);

	let addNewTreatment = (treatment) => {
		let arrayT = [...newTreatments,treatment]
		setNewTreatment(arrayT)
	}

	let canceledChoice = (value) => {
		setTreatment(value)
	}

	const {loading, error, data} = useQuery(TREATMENTS, { 
		variables: { treatmentCategory: parseInt(props.treatmentCategory.id) },
	});

	if (loading) return 'Loading ...';

	if (error) return `Error ${error.message}`;

	return(
		<div className="text-center">
			{
				path==='/doctor' ? (
					<CreateTreatment addNewTreatment={addNewTreatment} treatmentCategory={props.treatmentCategory} />
				)
				: null
			}
			{
				treatment?
					<FormConfirmed treatment={treatment} canceledChoice={canceledChoice} />
				:
					<React.Fragment>
						{ path==='/doctor' ?  null : 
							<h2>
								LES TRAITMENTS DISPONIBLES<br/>
								<small>"Vous pouvez choisir le traitement parmi ses listes"</small>
							</h2>
						}

						<h2>{ props.treatmentCategory.nameEn }:</h2>
						
							{
								(data.treatments.length === 0 && newTreatments.length===0) ? 
									<p>Aucun traitement dans cette liste</p>
								:

								<div className="card-columns text-center">
									{
										data.treatments.map(treatment => (
											<div className="card pointer text-left" key={treatment.id}>
												<FaTrash onClick={e => toDestroyTreatment(e,treatment.id)}/>
												<FaEdit/>
												<div onClick={ path === '/doctor' ? null :
												e => canceledChoice(treatment)}>
													<Treatment treatment={treatment} />
												</div>
											</div>
										))
									}
									{
										newTreatments.length===0 ? null 
											:
										newTreatments.map(treatment => (
											<div className="card pointer text-left" key={treatment.id}>
												<FaTrash onClick={e => toDestroyTreatment(e,treatment.id)}/>
												<FaEdit/>
												<div onClick={ path === '/doctor' ? null :
												e => canceledChoice(treatment)}>
													<Treatment treatment={treatment} />
												</div>
											</div>
										))
									}
								</div>
							}
						<button className="btn pointer" onClick={props.selectTreatmentCategory.bind(this,null)}>
							Back
						</button>
					</React.Fragment>
			}
		</div>
	)
}

export default ListTreatment
