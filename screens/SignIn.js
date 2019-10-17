import React, { useState } from 'react'
import { TextInput, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Styles } from '../constants/Style';
import Spacer from '../components/Spacer';
import { SignInCaregiver } from '../utilities/auth';
import Loading from '../components/Loading';
import { GetCaregiversDB } from '../utilities/dbstore';
import { CreateCaregiver } from '../utilities/localstore';
import Backdrop from '../components/Backdrop';
import Language from '../languages'


const SignIn = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [hidePassword, setHidePassword] = useState(true)


  const toggleHidePassword = () => setHidePassword(!hidePassword)


  const onSignIn = async () => {
    setLoading(true)

    await SignInCaregiver(username, password)

    const caregiversResp = await GetCaregiversDB()
    const caregivers = caregiversResp["data"]["listCaregivers"]["items"]

    for (const caregiver of caregivers) {
      if (caregiver.username === username) {
        await CreateCaregiver(caregiver)
        break
      }
    }

    setLoading(false)

    props.navigation.navigate('Dash')
  }


  return (
    <Backdrop>
      {loading
        ? <Loading />
        : <View>
            <Spacer large />

            <Text style={[Styles.h1, { fontSize: 35 }, Styles.raleway]} >
              { Language.SignIn }
            </Text>

            <TextInput
              style={Styles.input}
              value={username}
              onChangeText={setUsername}
              blurOnSubmit={false}
            />

            <Text style={Styles.label} >
              { Language.Username }
            </Text>

            <View style={Styles.passwordHolder}>
              <TextInput
                style={[Styles.input, { flex: 0.9, marginRight: 0 }]}
                secureTextEntry={hidePassword}
                value={password}
                onChangeText={setPassword}
                blurOnSubmit={false}
              />

              <View style={Styles.showButton} >
                <TouchableOpacity onPress={toggleHidePassword} >
                  <Icon
                    color="white"
                    name={hidePassword ? "visibility-off" : 'visibility'}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={Styles.label} >
              { Language.Password }
            </Text>

            <Spacer large />

            <TouchableOpacity
              style={Styles.mainButton}
              onPress={onSignIn}
            >
              <Text style={Styles.buttonText}>{ Language.Confirm }</Text>
            </TouchableOpacity>
          </View>
      }
    </Backdrop>
  )
}


export default SignIn

