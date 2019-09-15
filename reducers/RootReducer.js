import { combineReducers } from 'redux'

import attendanceReducer from './AttendanceReducer';
import childrenReducer from './ChildrenReducer';
import guardiansReducer from './GuardiansReducer';
import contactsReducer from './ContactsReducer';


const rootReducer = combineReducers({
  attendance: attendanceReducer,
  children: childrenReducer,
  guardians: guardiansReducer,
  contacts: contactsReducer,
})


export default rootReducer
