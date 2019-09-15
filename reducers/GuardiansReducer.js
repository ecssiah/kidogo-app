import {
  SET_GUARDIAN, UPDATE_GUARDIAN, DELETE_GUARDIAN
} from "../constants/Guardians"


const guardiansReducer = (state = {}, action) => {
  const newState = { ...state }

  switch (action.type) {
    case SET_GUARDIAN: {
      newState[action.id] = action.guardian
      return newState
    }
    case UPDATE_GUARDIAN: {
      newState[action.id] = Object.assign(
        {}, newState[action.id], action.update
      )
      return newState
    }
    case DELETE_GUARDIAN: {
      delete newState[action.id]
      return newState
    }
    default: {
      return newState
    }
  }
}

export default guardiansReducer
