import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { FaTrash,FaEdit } from 'react-icons/fa';

import Treatment from './Components/Treatment'
import FormConfirmed from './Components/FormConfirmed'
import CreateTreatment from '../Dashboard/CreateTreatment'

import { TREATMENTS } from '../../services/queries/TreatmentCategoriesQueries'
import { DESTROY_TREATMENT } from '../../services/mutations/MutationsTreatment';


function ListTreatment (props) {
	const [treatment, setTreatment] = useState(null);
	let path = props.match.path

	let canceledChoice = (value) => {
		setTreatment(value)
	}

	const [ destroyTreatment] = useMutation( DESTROY_TREATMENT );

	let toDestroyTreatment = (e,treatmentId) => {
		e.preventDefault();
		e.stopPropagation();
		destroyTreatment({ 
			variables: { treatmentId: parseInt(treatmentId)},
			optimisticResponse: true,
		    update: (cache) => {
				const existingTreatments = cache.readQuery({ 
					query: TREATMENTS, 
					variables: { treatmentCategory: parseInt(props.treatmentCategory.id) }
				});
				const newTreatments = existingTreatments.treatments.filter(t => (t.id !== treatmentId));
				cache.writeQuery({
					query: TREATMENTS, 
					variables: { treatmentCategory: parseInt(props.treatmentCategory.id) },
					data: {treatments: newTreatments}
				});
			}
		});
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
					<CreateTreatment treatmentCategory={props.treatmentCategory} />
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
								data.treatments.length === 0 ? 
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
