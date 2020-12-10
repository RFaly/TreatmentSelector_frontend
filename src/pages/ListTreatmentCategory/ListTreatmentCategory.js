import React, { useState } from 'react';
import TreatmentCategory from './Components/TreatmentCategory'

const ListTreatmentCategory = () => {
	return (
		<div>
			<TreatmentCategory name={"Traitement 1"} />
			<TreatmentCategory name={"Traitement 2"} />
		</div>
	)
}

export default ListTreatmentCategory
