import * as SecureStore from 'expo-secure-store'
import {
  CAREGIVER, PAYMENTS, ACCOUNTS, ATTENDANCE, FINANCES, QUESTIONS
} from '../constants/Store';


export const CreateCaregiver = async (caregiverData) => {
  try {
    await SecureStore.setItemAsync(CAREGIVER, JSON.stringify(caregiverData))
  } catch(error) {
    console.error(error)
  }
}


export const GetCaregiver = async () => {
  const caregiverResp = await SecureStore.getItemAsync(CAREGIVER)

  return caregiverResp === null ? {} : JSON.parse(caregiverResp)
}


export const GetPayments = async () => {
  const paymentsResp = await SecureStore.getItemAsync(PAYMENTS)

  return paymentsResp === null ? {} : JSON.parse(paymentsResp)
}


export const GetAccounts = async () => {
  const accountsResp = await SecureStore.getItemAsync(ACCOUNTS)

  return accountsResp === null ? {} : JSON.parse(accountsResp)
}


export const GetAttendance = async () => {
  const attendanceResp = await SecureStore.getItemAsync(ATTENDANCE)

  return attendanceResp === null ? {} : JSON.parse(attendanceResp)
}


export const UpdateAttendance = async () => {

}


export const GetFinances = async () => {
  const financesResp = await SecureStore.getItemAsync(FINANCES)

  return financesResp === null ? {} : JSON.parse(financesResp)
}


export const GetQuestions = async () => {
  const questionsResp = await SecureStore.getItemAsync(QUESTIONS)

  return questionsResp === null ? {} : JSON.parse(questionsResp)
}


export const ResetStore = async () => {
  try {
    await SecureStore.setItemAsync(CAREGIVER, JSON.stringify({}))
    await SecureStore.setItemAsync(ATTENDANCE, JSON.stringify({}))
    await SecureStore.setItemAsync(FINANCES, JSON.stringify({}))
    await SecureStore.setItemAsync(PAYMENTS, JSON.stringify({}))
    await SecureStore.setItemAsync(ACCOUNTS, JSON.stringify({}))
    await SecureStore.setItemAsync(QUESTIONS, JSON.stringify({}))
  } catch(error) {
    console.error(error)
  }
}