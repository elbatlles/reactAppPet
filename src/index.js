import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient, InMemoryCache, ApolloProvider } from"@apollo/client"
import { App } from './App'
import { createStore,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import currentUser from './reducers/AuthReducer'

const client = new ApolloClient({
  uri: 'https://petgram-backendapi.vercel.app/graphql',
  cache: new InMemoryCache()
})
const reducer = combineReducers({
    currentUser,
}

)
const store = createStore(currentUser)
ReactDOM.render(
<Provider store={store}>
  <ApolloProvider client={client}><App /> </ApolloProvider></Provider>, document.getElementById('app'))
