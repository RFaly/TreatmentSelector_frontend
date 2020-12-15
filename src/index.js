import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import { ApolloProvider } from '@apollo/client';

import client from './services/GqlConnection';

import './i18n';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<ApolloProvider client={client}>
			<Suspense fallback={<div>Loading...</div>}>
				<App />
		    </Suspense>
		</ApolloProvider>
	</Provider>,
	document.getElementById('root')
)


