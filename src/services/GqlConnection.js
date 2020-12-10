import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = createHttpLink({
	uri: 'http://localhost:4000/graphql'
})

const GqlConnection = new ApolloClient({
	link: link,
	cache: new InMemoryCache()
})

export default GqlConnection
