import { ATTENDANCE } from "../constants/Store"
import { SET_ATTENDANCE } from "../constants/Update"


const initialState = {
  [ATTENDANCE]: false,
}


const updateReducer = (state = initialState, action) => {
  const newState = { ...state }

  switch(action.type) {
    case SET_ATTENDANCE: {
      newState[ATTENDANCE] = action.update
      return newState
    }
    default: {
      return newState
    }
  }
}

export default updateReducer
