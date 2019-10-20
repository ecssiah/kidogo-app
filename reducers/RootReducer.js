import { combineReducers } from 'redux'

import newAccountReducer from './NewAccountReducer';
import accountsReducer from './AccountsReducer';
import childrenReducer from './ChildrenReducer';
import guardiansReducer from './GuardiansReducer';
import contactsReducer from './ContactsReducer';
import attendanceReducer from './AttendanceReducer';
import financesReducer from './FinancesReducer';
import paymentsReducer from './PaymentsReducer';
import expensesReducer from './ExpensesReducer';
import questionsReducer from './QuestionsReducer';


const rootReducer = combineReducers({
  newAccount: newAccountReducer,
  accounts: accountsReducer,
  children: childrenReducer,
  guardians: guardiansReducer,
  contacts: contactsReducer,
  attendance: attendanceReducer,
  finances: financesReducer,
  payments: paymentsReducer,
  expenses: expensesReducer,
  questions: questionsReducer,
})


export default rootReducer
