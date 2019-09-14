import { combineReducers } from 'redux'
import newAccountReducer from './NewAccountReducer';

const rootReducer = combineReducers({
  newAccount: newAccountReducer,
})

export default rootReducer
