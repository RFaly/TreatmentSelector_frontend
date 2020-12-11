import React, { useState } from 'react';

import { useMutation } from '@apollo/client';

import { CREATE_PATIENT } from '../../../services/mutations/MutationsPatient';

function CreatePatient() {
  const [addTodo, { data }] = useMutation(CREATE_PATIENT);

  const [params, setParams] = useState({name:'',id:''});

  let changeParams = (e) => {
  	setParams({name: e.target.value})
  }

  return(
  	<div>
  		<input type="text" name="name" defaultValue={params.name} onChange={(e)=>{changeParams(e)}}/>
  	</div>
  )

}

export default CreatePatient
