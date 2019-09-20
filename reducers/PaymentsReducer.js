import { SET_PAYMENTS } from "../constants/Finances"

const paymentsReducer = (state = {}, action) => {
  const newState = { ...state }

  switch (action.type) {
    case SET_PAYMENTS: {
      newState[action.id] = action.payments
      return newState
    }
    default: {
      return newState
    }
  }
}

export default paymentsReducer
