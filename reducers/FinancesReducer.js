import {
  SET_FINANCES, UPDATE_EXPENSES, UPDATE_INCOME
} from "../constants/Finances"

const financesReducer = (state = {}, action) => {
  const newState = { ...state }

  switch (action.type) {
    case SET_FINANCES: {
      newState[action.id] = action.finances
      return newState
    }
    case UPDATE_EXPENSES: {
      newState[action.id].expenses += action.amount
      return newState
    }
    case UPDATE_INCOME: {
      newState[action.id].income += action.amount
      return newState
    }
    default: {
      return newState
    }
  }
}

export default financesReducer
