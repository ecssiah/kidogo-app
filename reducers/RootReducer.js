import { combineReducers } from 'redux'
import attendanceReducer from './AttendanceReducer';

const rootReducer = combineReducers({
  attendance: attendanceReducer,
})

export default rootReducer
