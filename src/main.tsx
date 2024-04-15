import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

import App from './App.tsx'
import './index.css'
import { createFragmentRegistry } from '@apollo/client/cache';
import { ResourcesList_ProjectFragment } from './components/ResourceList/fragments.ts';

let bearerToken = localStorage.getItem('do-bearer-token');
if (!bearerToken || bearerToken === 'null') {
  // https://docs.digitalocean.com/reference/api/oauth-api/#2-receive-access-token
  bearerToken = (new URLSearchParams(location.hash.substring(1))).get("access_token")
  location.hash = "";
  if (!bearerToken || bearerToken === 'null') {
    location.assign(`https://cloud.digitalocean.com/v1/oauth/authorize?client_id=${encodeURIComponent(import.meta.env.VITE_DO_CLIENT_ID || '')}&redirect_uri=${encodeURIComponent(window.location.origin + window.location.pathname)}&response_type=token`)
  }
} else {
  localStorage.setItem('do-bearer-token', bearerToken);
}

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_SERVER || '/query',
  cache: new InMemoryCache({
    fragments: createFragmentRegistry(
      ResourcesList_ProjectFragment
    )
  }),
  headers: {
    Authorization: `bearer ${bearerToken}`,
  },
});

if (import.meta.env.DEV) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  </React.StrictMode>,
)
