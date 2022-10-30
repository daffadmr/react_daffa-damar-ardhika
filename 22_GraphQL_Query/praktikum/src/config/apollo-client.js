import {ApolloClient, InMemoryCache} from '@apollo/client'
import CONST from '../utils/constants'

const client = new ApolloClient({
    uri: CONST.BASE_URL,
    cache: new InMemoryCache(),
    headers:{
        'x-hasura-admin-secret': CONST.API_KEY
    }
})

export default client;