import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import {persistReducer,persistStore} from 'redux-persist';
import {thunk} from 'redux-thunk';

import reducer from './Reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['SessionReducer'],
  blacklist: [''],
};

const persistedReducer = persistReducer(persistConfig, reducer);

// const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export {persistor,store};
