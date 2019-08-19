import { Auth } from 'aws-amplify'
import { GetCaregiver } from './localstore';


export const SignedIn = async () => {
  const caregiver = await GetCaregiver()

  if ("id" in caregiver) {
    console.log("Caregiver present")
    return true
  }

  return false
}


export const SignUpCaregiver = async (caregiverData) => {
  // const phone_number = '+254' + phone.split('-').join('')
  const phone_number = '+1' + caregiverData.phone.split('-').join('')

  try {
    await Auth.signUp({
      username: caregiverData.username,
      password: caregiverData.password,
      attributes: {
        email: caregiverData.email,
        phone_number,
      },
    })
  } catch(error) {
    console.error(error)
  }
}


export const ConfirmCaregiver = async (username, code) => {
  try {
    return await Auth.confirmSignUp(username, code)
  } catch(error) {
    console.error(error)
  }
}


export const ResendConfirmCode = async (username) => {
  try {
    await Auth.resendSignUp(username)
  } catch(error) {
    console.error(error)
  }
}


export const SignInCaregiver = async (username, password) => {
  try {
    await Auth.signIn(username, password)


  } catch(error) {
    console.error(error)
  }
}
