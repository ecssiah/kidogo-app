
export const SET_FINANCES = 'expenses:set_finances'
export const DELETE_FINANCES = 'expenses:delete_finances'
export const SET_PAYMENTS = 'expenses:set_payments'
export const DELETE_PAYMENTS = 'expenses:delete_payments'
export const SET_EXPENSES = 'expenses:set_expenses'
export const DELETE_EXPENSES = 'expenses:delete_expenses'


export const ExpenseMemo = {
  RENT: "Kodi ya Nyumba",
  WATER: "Maji",
  FOOD: "Chakula",
  FUEL: "Mafuta anayotumia",
  ELECTRICITY: "Umeme",
  SALARY: "Mushahara",
}


export const ExpenseMemoIcons = {
  [ExpenseMemo.RENT]: "home",
  [ExpenseMemo.ELECTRICITY]: "bolt",
  [ExpenseMemo.FUEL]: "fire",
  [ExpenseMemo.FOOD]: "spoon",
  [ExpenseMemo.WATER]: "tint",
  [ExpenseMemo.SALARY]: "money",
}


export const PaymentMemo = {
  PAYMENT: "Malipo",
}


export const PaymentMemoIcons = {
  [PaymentMemo.PAYMENT]: "money-bill",
}
