import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { App } from './App'
import { createStore,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import currentUser from './reducers/AuthReducer'
import { AppProvider } from './Context/Context'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

const httpLink = createHttpLink({
  uri: 'https://petgram-backendapi.vercel.app/graphql'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = window.sessionStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: onError(({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location = '/user'
    }
  })
})

const store = createStore(currentUser)
ReactDOM.render(
  <AppProvider>
<Provider store={store}>
  <ApolloProvider client={client}><App /> </ApolloProvider></Provider> </AppProvider>,
  document.getElementById('app'))

//{"input":{"email":"a@.es","password": "sdas"} }
