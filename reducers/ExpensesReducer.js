import { SET_EXPENSES, ADD_EXPENSE } from "../constants/Finances"

const expensesReducer = (state = {}, action) => {
  const newState = { ...state }

  switch (action.type) {
    case SET_EXPENSES: {
      newState[action.id] = action.expenses
      return newState
    }
    case ADD_EXPENSE: {
      newState[action.id] = Object.assign({}, newState[action.id], action.expense)
      return newState
    }
    default: {
      return newState
    }
  }
}

export default expensesReducer
