import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SWRConfig } from 'swr';
import App from './App.jsx';
import init from './api/config.js';
import './index.css';
import store, { persistor } from './store/index.js';

const fetcher = async (...args) => {
  const res = await axios(...args);
  return res.data;
};
const mutation = async (key, newData) => {
  await mutate(key);
  console.log(`Mutating ${key} with data:`, newData);
  await axios.put(key, newData);

  mutate(key, newData, false);
};
init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <SWRConfig value={{ fetcher, mutations: { mutation } }}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </SWRConfig>
    </Provider>
  </React.StrictMode>
);
