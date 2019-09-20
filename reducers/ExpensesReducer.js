import { SET_EXPENSES } from "../constants/Finances"

const expensesReducer = (state = {}, action) => {
  const newState = { ...state }

  switch (action.type) {
    case SET_EXPENSES: {
      newState[action.id] = action.expenses
      return newState
    }
    default: {
      return newState
    }
  }
}

export default expensesReducer
