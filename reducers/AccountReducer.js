import {
  SET_ACCOUNT, DELETE_ACCOUNT
} from "../constants/Account"


const accountReducer = (state = {}, action) => {
  const newState = { ...state }

  switch (action.type) {
    case SET_ACCOUNT: {
      newState[action.id] = action.account
      return newState
    }
    case DELETE_ACCOUNT: {
      delete newState[action.id]
      return newState
    }
    default: {
      return newState
    }
  }
}

export default accountReducer
