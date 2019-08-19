import { combineReducers } from 'redux'
import attendanceReducer from './AttendanceReducer';
import accountsReducer from './AccountsReducer';

const rootReducer = combineReducers({
  accounts: accountsReducer,
  attendance: attendanceReducer,
})

export default rootReducer
