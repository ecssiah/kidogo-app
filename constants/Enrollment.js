import Language from '../languages'


export const Gender = {
  Male: "male",
  Female: "female",
  Other: "other",
}


export const GenderStrings = {
  [Gender.Male]: Language.Male,
  [Gender.Female]: Language.Female,
  [Gender.Other]: Language.Other,
}


export const SET_RATE = 'enrollment:set_rate'
export const SET_FREQUENCY = 'enrollment:set_frequency'
export const SET_NEW_CHILD = 'enrollment:set_new_child'
export const SET_NEW_GUARDIAN = 'enrollment:set_new_guardian'
export const SET_NEW_CONTACT = 'enrollment:set_new_contact'
export const DELETE_NEW_CHILD = 'enrollment:delete_new_child'
export const DELETE_NEW_CONTACT = 'enrollment:delete_new_contact'
export const DELETE_NEW_GUARDIAN = 'enrollment:delete_new_guardian'
export const CLEAR_NEW_ACCOUNT = 'enrollment:clear_new_account'
