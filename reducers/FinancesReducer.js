import { SET_FINANCES } from "../constants/Finances"

const financesReducer = (state = {}, action) => {
  const newState = { ...state }

  switch (action.type) {
    case SET_FINANCES: {
      newState[action.id] = action.finances
      return newState
    }
    default: {
      return newState
    }
  }
}

export default financesReducer
