import { combineReducers } from 'redux'

import newAccountReducer from './NewAccountReducer';
import accountReducer from './AccountReducer';
import attendanceReducer from './AttendanceReducer';
import childrenReducer from './ChildrenReducer';
import guardiansReducer from './GuardiansReducer';
import contactsReducer from './ContactsReducer';
import financesReducer from './FinancesReducer';
import paymentsReducer from './PaymentsReducer';
import expensesReducer from './ExpensesReducer';


const rootReducer = combineReducers({
  newAccount: newAccountReducer,
  account: accountReducer,
  attendance: attendanceReducer,
  finances: financesReducer,
  payments: paymentsReducer,
  expenses: expensesReducer,
  children: childrenReducer,
  guardians: guardiansReducer,
  contacts: contactsReducer,
})


export default rootReducer
