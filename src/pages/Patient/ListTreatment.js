import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { FaPlusSquare, FaTrash, FaEdit } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

import Treatment from './Components/Treatment'
import FormConfirmed from './Components/FormConfirmed'
import CreateTreatment from '../Dashboard/CreateTreatment'

import { TREATMENTS } from '../../services/queries/TreatmentCategoriesQueries'
import { DESTROY_TREATMENT } from '../../services/mutations/MutationsTreatment';


function ListTreatment (props) {
	let { t } = useTranslation();
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
				path==='/doctor' ? 
					<React.Fragment>
						<h2>{t("listTreatment.doctor.titleMain")}</h2>
						<FaPlusSquare type="button" className="add-btn-css" data-toggle="modal" data-target="#exampleModalCenter0" />
						<CreateTreatment treatmentItem={0} treatmentCategory={props.treatmentCategory} />
					</React.Fragment>
				: null
			}
			{
				treatment?
					<FormConfirmed treatment={treatment} canceledChoice={canceledChoice} />
				:
					<React.Fragment>
						{ path==='/doctor' ?  null : 
							<h2>
								{t("listTreatment.doctor.title")}<br/>
								<small><strong>{t("etape")} 2:</strong> "{t("listTreatment.doctor.small")}"</small>
								</h2>
						}

						<h2>{ props.treatmentCategory.nameEn }:</h2>
						
							{
								data.treatments.length === 0 ? 
									<p>{t("listTreatment.public.message")}</p>
								:
								<div className="card-columns text-center">
									{
										data.treatments.map(treatment => (
											<div className="card pointer text-left" key={treatment.id}>
												{
													path==='/doctor' ? 
														<React.Fragment>
															<FaTrash onClick={ e => {
																let isTrue = window.confirm(`${t("listTreatment.doctor.confirm")}`);
																if(isTrue===true){
																	toDestroyTreatment(e,treatment.id)
																}
															}} />
															<FaEdit data-toggle="modal" data-target={`#exampleModalCenter${treatment.id}`} />
															<CreateTreatment treatmentItem={treatment} treatmentCategory={props.treatmentCategory} />
														</React.Fragment>
													: null
												}
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
							{t("listTreatment.public.botton")}
						</button>
					</React.Fragment>
			}
		</div>
	)
}

export default ListTreatment
