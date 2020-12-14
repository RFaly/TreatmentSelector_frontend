import React from 'react';
import CreatePatient from './CreatePatient';
import { useTranslation } from "react-i18next";
import Treatment from './Treatment'

const FormConfirmed = ({treatment,canceledChoice}) => {
	let { t } = useTranslation();

	return(
		<div>
			<h2>{t("formConfirmed.title")}</h2>

            <h2>
            	<small><strong>{t("etape")} 3:</strong> "{t("formConfirmed.small")}"</small>
            </h2>

            <div>
	            <p>{t("formConfirmed.paraph")} : "<Treatment treatment={treatment} noIcone={true} />"</p>
            </div>

            <CreatePatient canceledChoice={canceledChoice} treatmentId={treatment.id} />
		</div>
	)
}

export default FormConfirmed



