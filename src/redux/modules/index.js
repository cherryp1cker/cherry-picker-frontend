// combine reducers and this will be used when store is generated
// using Ducks pattern for each slices
import { combineReducers } from 'redux';
import app from './app';
import reducer from './search'

export default combineReducers({
  app, reducer,
});
