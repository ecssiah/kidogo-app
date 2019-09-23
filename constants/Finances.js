import Language from '../languages'

export const SET_FINANCES = 'expenses:set_finances'
export const DELETE_FINANCES = 'expenses:delete_finances'
export const SET_PAYMENTS = 'expenses:set_payments'
export const DELETE_PAYMENTS = 'expenses:delete_payments'
export const SET_EXPENSES = 'expenses:set_expenses'
export const DELETE_EXPENSES = 'expenses:delete_expenses'


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
  Payment: Language.Payment,
}


export const PaymentTypeIcons = {
  [PaymentType.PAYMENT]: "money-bill",
}
