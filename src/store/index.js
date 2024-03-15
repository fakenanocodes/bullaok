import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth_reducer from './auth_reducer';
import card_reducer from './reducers/card_reducer';
import kyc_reducer from './reducers/kyc_reducer';
import transact_reducer from './reducers/transact_reducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['card', 'auth', 'kyc', 'transact'],
};

const reducers = combineReducers({
  card: card_reducer,
  auth: auth_reducer,
  transact: transact_reducer,
  kyc: kyc_reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

export let persistor = persistStore(store);
