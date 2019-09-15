import { combineReducers } from 'redux'

import updateReducer from './UpdateReducer';
import newAccountReducer from './NewAccountReducer';


const rootReducer = combineReducers({
  update: updateReducer,
  newAccount: newAccountReducer,
})


export default rootReducer
