
export const SET_FINANCES = 'expenses:set_finances'
export const DELETE_FINANCES = 'expenses:delete_finances'
export const SET_PAYMENTS = 'expenses:set_payments'
export const DELETE_PAYMENTS = 'expenses:delete_payments'
export const SET_EXPENSES = 'expenses:set_expenses'
export const DELETE_EXPENSES = 'expenses:delete_expenses'


export const ExpenseType = {
  RENT: "Kodi ya Nyumba",
  WATER: "Maji",
  FOOD: "Chakula",
  FUEL: "Mafuta anayotumia",
  ELECTRICITY: "Umeme",
  SALARY: "Mushahara",
}


export const ExpenseTypeIcons = {
  [ExpenseType.RENT]: "home",
  [ExpenseType.ELECTRICITY]: "bolt",
  [ExpenseType.FUEL]: "fire",
  [ExpenseType.FOOD]: "spoon",
  [ExpenseType.WATER]: "tint",
  [ExpenseType.SALARY]: "money",
}


export const PaymentType = {
  PAYMENT: "Malipo",
}


export const PaymentTypeIcons = {
  [PaymentType.PAYMENT]: "money-bill",
}
