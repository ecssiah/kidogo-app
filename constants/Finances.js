import Language from '../languages'

export const SET_FINANCES = 'expenses:set_finances'
export const DELETE_FINANCES = 'expenses:delete_finances'
export const SET_PAYMENTS = 'expenses:set_payments'
export const DELETE_PAYMENTS = 'expenses:delete_payments'
export const SET_EXPENSES = 'expenses:set_expenses'
export const DELETE_EXPENSES = 'expenses:delete_expenses'


export const ExpenseType = {
  Rent: Language.Rent,
  Water: Language.Water,
  Food: Language.Food,
  Fuel: Language.Fuel,
  Electricity: Language.Electricity,
  Salary: Language.Salary,
  Equipment: Language.Equipment,
}


export const ExpenseTypeIcons = {
  [ExpenseType.Rent]: "home",
  [ExpenseType.Electricity]: "bolt",
  [ExpenseType.Fuel]: "fire",
  [ExpenseType.Food]: "spoon",
  [ExpenseType.Water]: "tint",
  [ExpenseType.Salary]: "money",
  [ExpenseType.Equipment]: "futbol",
}


export const PaymentType = {
  Payment: Language.Payment,
}


export const PaymentTypeIcons = {
  [PaymentType.PAYMENT]: "money-bill",
}
