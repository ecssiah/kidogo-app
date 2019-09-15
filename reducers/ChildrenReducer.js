import {
  SET_CHILD, UPDATE_CHILD, DELETE_CHILD
} from "../constants/Children"


const childrenReducer = (state = {}, action) => {
  const newState = { ...state }

  switch (action.type) {
    case SET_CHILD: {
      newState[action.id] = action.child
      return newState
    }
    case UPDATE_CHILD: {
      newState[action.id] = Object.assign(
        {}, newState[action.id], action.update
      )
      return newState
    }
    case DELETE_CHILD: {
      delete newState[action.id]
      return newState
    }
    default: {
      return newState
    }
  }
}

export default childrenReducer
