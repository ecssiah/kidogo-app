import {
  SET_ACCOUNT, UPDATE_ACCOUNT, DELETE_ACCOUNT
} from "../constants/Accounts"


const accountsReducer = (state = {}, action) => {
  const newState = { ...state }

  switch (action.type) {
    case SET_ACCOUNT: {
      newState[action.id] = action.account
      return newState
    }
    case UPDATE_ACCOUNT: {
      newState[action.id] = Object.assign(
        {}, newState[action.id], action.update
      )
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

export default accountsReducer
