import {ApolloClient, HttpLink, InMemoryCache, split} from '@apollo/client'
import CONST from '../utils/constants'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
    uri: CONST.BASE_URL,
    headers:{
        'x-hasura-admin-secret': CONST.API_KEY
    }
  });

const wsLink = new GraphQLWsLink(createClient({
  url: 'wss://db-daffa.hasura.app/v1/graphql',
  connectionParams:{
    headers:{
        'x-hasura-admin-secret': CONST.API_KEY
    }
}
}));

const splitLink = split(
    ({query}) =>{
        const definition = getMainDefinition(query);
        return(
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})

export default client;