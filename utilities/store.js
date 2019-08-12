import * as SecureStore from 'expo-secure-store'
import bcrypt from 'react-native-bcrypt'
import uuid from 'uuid'


export const createCentre = async (centreData) => {
  const centreId = uuid()

  centreData = {
    id: centreId,
    ...centreData,
  }

  console.log(centreData)

  try {
    // await SecureStore.setItemAsync('CENTRE', JSON.stringify(centres))

    return centreId
  } catch(error) {
    console.error(error)

    return null
  }
}


export const createCaregiver = async (caregiverData) => {
  const caregiverId = uuid()

  try {
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(caregiverData.password, saltRounds)

    caregiverData = {
      id: caregiverId,
      ...caregiverData,
      password: hashedPassword,
    }

    console.log(caregiverData)

    // await SecureStore.setItemAsync('CAREGIVERS', JSON.stringify(caregivers))

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
