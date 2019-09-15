import {
  SET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT
} from "../constants/Contacts"


const contactsReducer = (state = {}, action) => {
  const newState = { ...state }

  switch (action.type) {
    case SET_CONTACT: {
      newState[action.id] = action.contact
      return newState
    }
    case UPDATE_CONTACT: {
      newState[action.id] = Object.assign(
        {}, newState[action.id], action.update
      )
      return newState
    }
    case DELETE_CONTACT: {
      delete newState[action.id]
      return newState
    }
    default: {
      return newState
    }
  }
}

export default contactsReducer
