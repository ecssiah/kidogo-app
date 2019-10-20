import { SET_QUESTIONS, UPDATE_QUESTIONS, DELETE_QUESTIONS } from "../constants/Questions"

const questionsReducer = (state = {}, action) => {
  const newState = { ...state }

  switch (action.type) {
    case SET_QUESTIONS: {
      newState[action.id] = action.questions
      return newState
    }
    case UPDATE_QUESTIONS: {
      newState[action.id] = Object.assign({}, newState[action.id], action.update)
      return newState
    }
    case DELETE_QUESTIONS: {
      delete newState[action.id]
      return newState
    }
    default: {
      return newState
    }
  }
}

export default questionsReducer
