import * as SecureStore from 'expo-secure-store'
import {
  CAREGIVER, PAYMENTS, ACCOUNTS, ATTENDANCE, FINANCES, QUESTIONS, GUARDIAN
} from '../constants/Store';


export const GetCaregiver = async () => {
  const caregiverResp = await SecureStore.getItemAsync(CAREGIVER)

  return caregiverResp === null ? {} : JSON.parse(caregiverResp)
}


export const CreateCaregiver = async (caregiverData) => {
  return await SecureStore.setItemAsync(
    CAREGIVER, JSON.stringify(caregiverData)
  )
}


export const GetGuardian = async (id) => {
  const guardianResp = await SecureStore.getItemAsync(`${GUARDIAN}_${id}`)

  return guardianResp === null ? {} : JSON.parse(guardianResp)
}


export const CreateGuardian = async (guardianData) => {
  return await SecureStore.setItemAsync(
    `${GUARDIAN}_${guardianData.id}`, JSON.stringify(guardianData)
  )
}


export const GetChild = async (id) => {
  return await SecureStore.getItemAsync(`${CHILD}_${id}`)
}


export const CreateChild = async (childData) => {
  return await SecureStore.setItemAsync(
    `${CHILD}_${childData.id}`, JSON.stringify(childData)
  )
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
