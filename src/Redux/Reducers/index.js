/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';

// import {SIGNOUT_REQUEST} from '../actions/Types';
import SessionReducer from './SessionReducer';

const appReducer = combineReducers({
  SessionReducer,
});

const rootReducer = (state, action) => {
  // if (action.type === SIGNOUT_REQUEST) {
  //   // for all keys defined in your persistConfig(s)
  //   AsyncStorage.removeItem('persist:root');
  //   // storage.removeItem('persist:otherKey')
  //   state = undefined;
  // }
  return appReducer(state, action);
};
export default rootReducer;
