import {
  ADD_CHILD, ADD_GUARDIAN, ADD_CONTACT,
  UPDATE_CHILD, UPDATE_GUARDIAN, UPDATE_CONTACT,
  DELETE_CHILD, DELETE_GUARDIAN, DELETE_CONTACT,
} from "../constants/Enrollment"


const initialState = {
  children: {},
  guardians: {},
  contacts: {},
}


const newAccountReducer = (state = initialState, action) => {
  const newState = { ...state }

  switch(action.type) {
    case ADD_CHILD: {
      newState.children[action.child.id] = action.child
      return newState
    }
    case ADD_GUARDIAN: {
      newState.guardians[action.guardian.id] = action.guardian
      return newState
    }
    case ADD_CONTACT: {
      newState.contacts[action.contact.id] = action.contact
      return newState
    }
    case DELETE_CHILD: {
      delete newState.contacts[action.child.id]
      return newState
    }
    case DELETE_GUARDIAN: {
      delete newState.guardians[action.guardian.id]
      return newState
    }
    case DELETE_CONTACT: {
      delete newState.contacts[action.contact.id]
      return newState
    }
    case UPDATE_CHILD: {
      newState.children[action.id] = Object.assign(
        {}, newState.children[action.id], action.update
      )
      return newState
    }
    case UPDATE_GUARDIAN: {
      newState.guardians[action.id] = Object.assign(
        {}, newState.guardians[action.id], action.update
      )
      return newState
    }
    case UPDATE_CONTACT: {
      newState.contacts[action.id] = Object.assign(
        {}, newState.contacts[action.id], action.update
      )
      return newState
    }
    default: {
      return newState
    }
  }
}

export default newAccountReducer
