import { Auth } from 'aws-amplify'
import { SecureStore } from 'expo'


export async function signUp(username, password, phone, showError) {
  const phone_number = '+254' + phone.split('-').join('')

  await Auth.signUp({
    username,
    password,
    attributes: {
      preferred_username: username,
      phone_number,
    },
  })
    .then(data => console.log(data))
    .catch(err => {
      showError(err.message || 'Something went wrong')
    })
}


export const signIn = async (username, password, success, failure) => {
  const signInResp = Auth.signIn({ username, password })
    .then(async user => {
      const tokenObj = {
        accessToken: user.signInUserSession.accessToken.jwtToken,
        idToken: user.signInUserSession.idToken.jwtToken,
        refreshToken: user.signInUserSession.refreshToken.token,
      }

      await SecureStore.setItemAsync('_TOKEN', JSON.stringify(tokenObj))

      return Promise.all([
        success(false, 'needSignIn'),
        success(false, 'loading'),
        failure('Authorization successful')
      ])
    })
    .catch(err => {
      console.log(err)
      return failure('Sign in unsuccessful')
    })

  return signInResp
}


export function confirm(username, code, success, failure, changeLoading) {
  Auth.confirmSignUp(username, code, { forceAliasCreation: true })
    .then(() => success())
    .catch(err => {
      return Promise.all([
        failure(err.message || 'Error confirming code.'),
        changeLoading(false, 'loading')
      ])
    })
}


export function resend(username, failure) {
  Auth.resendSignUp(username)
    .then(() => console.log('code resent successfully'))
    .catch(err => failure(err))
}


export function changePassword(oldPassword, newPassword) {
  Auth.currentAuthenticatedUser()
    .then(user => Auth.changePassword(user, oldPassword, newPassword))
    .then(data => console.log(data))
    .catch(err => console.log(err))
}


export function forgotPassword(username) {
  Auth.forgotPassword(username)
    .then(data => console.log(data))
    .catch(err => console.log(err))

  Auth.forgotPasswordSubmit(username, code, new_password)
    .then(data => console.log(data))
    .catch(err => console.log(err))
}