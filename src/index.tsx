import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import { setContext } from "@apollo/client/link/context"

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client"


const authlink = setContext(async (_, { headers }) => {
  return { headers : { ...headers },}
})

const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: "https://dr3dd.ap-south-1.aws.cloud.dgraph.io/graphql",
  })

  return new ApolloClient({
    link: authlink.concat(httpLink),
    cache: new InMemoryCache(),
  })
}


ReactDOM.render(
  <ApolloProvider client={createApolloClient()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
