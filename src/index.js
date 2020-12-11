import ReactDOM from 'react-dom';
import './index.css'
import App from './pages/App';
import { ApolloProvider } from '@apollo/client';

import client from './services/GqlConnection'

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
)
