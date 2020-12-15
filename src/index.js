import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import client from './services/GqlConnection';
import * as serviceWorker from './serviceWorker';
import store from './store';

import './index.css';
import './i18n';

import App from './pages/App';

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

serviceWorker.unregister();
