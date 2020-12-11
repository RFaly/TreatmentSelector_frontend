import ReactDOM from 'react-dom';
import App from './pages/App';

import { ApolloProvider } from 'react-apollo';

import client from './services/GqlConnection'

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
)
