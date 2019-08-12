import * as SecureStore from 'expo-secure-store'
import bcrypt from 'react-native-bcrypt'
import uuid from 'uuid'


export const createCaregiver = async (caregiverData) => {
  const caregiverId = uuid()

  try {
    bcrypt.hash(
      caregiverData.password, 10,
      async (err, hash) => {
        caregiverData = {
          id: caregiverId,
          ...caregiverData,
          password: hash,
        }

        await SecureStore.setItemAsync(
          'CAREGIVER',
          JSON.stringify(caregiverData)
        )
      }
    )


    return caregiverId
  } catch(error) {
    console.error(error)

    return null
  }
}


export const getPayments = async () => {
  const paymentsResp = await SecureStore.getItemAsync('PAYMENTS')

  return paymentsResp === null ? {} : JSON.parse(paymentsResp)
}


export const getAccounts = async () => {
  const accountsResp = await SecureStore.getItemAsync('ACCOUNTS')

  return accountsResp === null ? {} : JSON.parse(accountsResp)
}


export const getAttendance = async () => {
  const attendanceResp = await SecureStore.getItemAsync('ATTENDANCE')

  return attendanceResp === null ? {} : JSON.parse(attendanceResp)
}


export const getFinances = async () => {
  const financesResp = await SecureStore.getItemAsync('FINANCES')

  return financesResp === null ? {} : JSON.parse(financesResp)
}


export const getQuestions = async () => {
  const questionsResp = await SecureStore.getItemAsync('QUESTIONS')

  return questionsResp === null ? {} : JSON.parse(questionsResp)
}


export const resetStore = async () => {
  try {
    await SecureStore.setItemAsync('CURRENT_USER', '')
    await SecureStore.setItemAsync('CAREGIVER', JSON.stringify({}))
    await SecureStore.setItemAsync('PAYMENTS', JSON.stringify({}))
    await SecureStore.setItemAsync('ACCOUNTS', JSON.stringify({}))
    await SecureStore.setItemAsync('FINANCES', JSON.stringify({}))
    await SecureStore.setItemAsync('QUESTIONS', JSON.stringify({}))
    await SecureStore.setItemAsync('ATTENDANCE', JSON.stringify({}))
  } catch(error) {
    console.error(error)
  }
}