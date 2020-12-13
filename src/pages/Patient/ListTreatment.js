import React, { useState } from 'react';

import Treatment from './Components/Treatment'
import FormConfirmed from './Components/FormConfirmed'
import CreateTreatment from '../Dashboard/CreateTreatment'

import { useQuery } from '@apollo/client';
import { TREATMENTS } from '../../services/queries/TreatmentCategoriesQueries'

function ListTreatment (props) {

	let path = props.match.path
	const [treatment, setTreatment] = useState(null);

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
								(data.treatments.length === 0) ? 
									<p>Aucun traitement dans cette liste</p>
								:

								<div className="card-columns text-center">
								{
									data.treatments.map(treatment => (
										<div className="card pointer text-left" key={treatment.id} onClick={ path === '/doctor' ? null :
										e => canceledChoice(treatment)}>
											<Treatment treatment={treatment} />
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
