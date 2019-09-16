import {
  SET_NEW_CHILD, SET_NEW_GUARDIAN, SET_NEW_CONTACT,
  DELETE_NEW_CHILD, DELETE_NEW_GUARDIAN, DELETE_NEW_CONTACT
} from "../constants/Enrollment"


const initialState = {
  children: {},
  guardians: {},
  contacts: {},
}


const newAccountReducer = (state = initialState, action) => {
  const newState = { ...state }

  switch(action.type) {
    case SET_NEW_CHILD: {
      newState.children[action.id] = action.child
      return newState
    }
    case SET_NEW_GUARDIAN: {
      newState.guardians[action.id] = action.guardian
      return newState
    }
    case SET_NEW_CONTACT: {
      newState.contacts[action.id] = action.contact
      return newState
    }
    case DELETE_NEW_CHILD: {
      delete newState.contacts[action.id]
      return newState
    }
    case DELETE_NEW_GUARDIAN: {
      delete newState.guardians[action.id]
      return newState
    }
    case DELETE_NEW_CONTACT: {
      delete newState.contacts[action.id]
      return newState
    }
    case CLEAR_NEW_ACCOUNT: {
      return {
        children: {},
        guardians: {},
        contacts: {},
      }
    }
    default: {
      return newState
    }
  }
}

export default newAccountReducer
