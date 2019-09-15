import {
  SET_ATTENDANCE, UPDATE_ATTENDANCE, DELETE_ATTENDANCE
} from "../constants/Attendance"


const attendanceReducer = (state = {}, action) => {
  const newState = { ...state }

  switch (action.type) {
    case SET_ATTENDANCE: {
      newState[action.id] = action.attendance
      return newState
    }
    case UPDATE_ATTENDANCE: {
      newState[action.id] = Object.assign(
        {}, newState[action.id], action.update
      )
      return newState
    }
    case DELETE_ATTENDANCE: {
      delete newState[action.id]
      return newState
    }
    default: {
      return newState
    }
  }
}

export default attendanceReducer
