import { SET_PAYMENTS, ADD_PAYMENT } from "../constants/Finances"

const paymentsReducer = (state = {}, action) => {
  const newState = { ...state }

  switch (action.type) {
    case SET_PAYMENTS: {
      newState[action.id] = action.payments
      return newState
    }
    case ADD_PAYMENT: {
      newState[action.id] = Object.assign({}, newState[action.id], action.payment)
      return newState
    }
    default: {
      return newState
    }
  }
}

export default paymentsReducer
