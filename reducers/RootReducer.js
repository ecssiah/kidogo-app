import { combineReducers } from 'redux'

import newAccountReducer from './NewAccountReducer';
import attendanceReducer from './AttendanceReducer';
import childrenReducer from './ChildrenReducer';
import guardiansReducer from './GuardiansReducer';
import contactsReducer from './ContactsReducer';


const rootReducer = combineReducers({
  newAccount: newAccountReducer,
  attendance: attendanceReducer,
  children: childrenReducer,
  guardians: guardiansReducer,
  contacts: contactsReducer,
})


export default rootReducer
