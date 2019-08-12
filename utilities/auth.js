import { Auth } from 'aws-amplify'
import bcrypt from 'react-native-bcrypt'
import * as SecureStore from 'expo-secure-store'


export const SignUpCaregiver = async (caregiverData) => {
  // const phone_number = '+254' + phone.split('-').join('')
  const phone_number = '+1' + caregiverData.phone.split('-').join('')

  try {
    const data = await Auth.signUp({
      username: caregiverData.username,
      password: caregiverData.password,
      attributes: {
        email: caregiverData.email,
        phone_number,
      },
    })

    return data
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
    await SecureStore.setItemAsync('CURRENT_USER', username)
  } catch(error) {
    console.error(error)
  }
}


// const ChangeUserPassword = async (oldPassword, newPassword) => {
//   Auth.currentAuthenticatedUser()
//     .then(user => Auth.changePassword(user, oldPassword, newPassword))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }


// const ForgotUserPassword = (username) => {
//   Auth.forgotPassword(username)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//   Auth.forgotPasswordSubmit(username, code, new_password)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }