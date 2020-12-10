import React from 'react';
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa'

class HomePage extends React.Component {
	render(){
		return(
			<div>
				<FaListAlt />
				<FaCheckSquare />
				<FaPlusSquare />
				<FaTrash />

				<h1>Kilinika mtomady</h1>
			</div>
		)
	}
}

export default HomePage
