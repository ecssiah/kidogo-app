import Language from '../languages'

export const SET_FINANCES = 'expenses:set_finances'
export const DELETE_FINANCES = 'expenses:delete_finances'
export const UPDATE_EXPENSES = 'expenses:update_expenses'
export const UPDATE_INCOME = 'expenses:update_income'
export const SET_PAYMENTS = 'expenses:set_payments'
export const DELETE_PAYMENTS = 'expenses:delete_payments'
export const SET_EXPENSES = 'expenses:set_expenses'
export const DELETE_EXPENSES = 'expenses:delete_expenses'
export const ADD_PAYMENT = 'expenses:add_payment'
export const ADD_EXPENSE = 'expenses:add_expense'


export const Frequency = {
  Daily: "daily",
  Weekly: "weekly",
  Termly: "termly",
}


export const FrequencyStrings = {
  [Frequency.Daily]: Language.Daily,
  [Frequency.Weekly]: Language.Weekly,
  [Frequency.Termly]: Language.Termly,
}


export const ExpenseType = {
  Rent: "rent",
  Water: "water",
  Food: "food",
  Fuel: "fuel",
  Electricity: "electricity",
  Salary: "salary",
  Equipment: "equipment",
}


export const ExpenseTypeString = {
  [ExpenseType.Rent]: Language.Rent,
  [ExpenseType.Water]: Language.Water,
  [ExpenseType.Food]: Language.Food,
  [ExpenseType.Fuel]: Language.Fuel,
  [ExpenseType.Electricity]: Language.Electricity,
  [ExpenseType.Salary]: Language.Salary,
  [ExpenseType.Equipment]: Language.Equipment,
}


export const ExpenseTypeIcons = {
  [ExpenseType.Rent]: 'home',
  [ExpenseType.Water]: 'tint',
  [ExpenseType.Food]: 'spoon',
  [ExpenseType.Fuel]: 'fire',
  [ExpenseType.Electricity]: 'bolt',
  [ExpenseType.Salary]: 'money',
  [ExpenseType.Equipment]: 'book',
}


export const PaymentType = {
  MPesa: "M-Pesa",
  Cash: "Cash",
}


export const PaymentTypeString = {
  [PaymentType.MPesa]: Language.MPesa,
  [PaymentType.Cash]: Language.Cash,
}


export const PaymentTypeIcons = {
  [PaymentType.MPesa]: "money-bill",
  [PaymentType.Cash]: "money-bill",
}
