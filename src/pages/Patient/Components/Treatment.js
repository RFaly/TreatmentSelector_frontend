import React from 'react';
import { FaAngleRight } from 'react-icons/fa';


const Treatment = ({treatment}) => {
	return(
		<span><FaAngleRight className="rose" /> {treatment.nameEn}</span>
	)
}

export default Treatment


// <div>{treatment.nameFr}</div>
// <div>{treatment.nameMg}</div>

