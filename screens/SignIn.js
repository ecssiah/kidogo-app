import React, { useState } from 'react'
import { TextInput, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors, Styles } from '../constants/Style';
import Spacer from '../components/Spacer';
import { SignInCaregiver } from '../utilities/auth';
import Loading from '../components/Loading';


const SignIn = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [hidePassword, setHidePassword] = useState(true)


  const toggleHidePassword = () => setHidePassword(!hidePassword)


  const onSignIn = async () => {
    setLoading(true)

    // await SignInCaregiver(username, password)

    setLoading(false)

    props.navigation.navigate('Dash')
  }


  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Colors.gradient_dark, Colors.gradient_light]}
    >
      {loading
        ? <Loading />
        : <View>
            <Spacer large />

            <Text style={[Styles.h1, { fontSize: 35 }, Styles.raleway]} >
              Sign In
            </Text>

            <TextInput
              style={Styles.input}
              value={username}
              onChangeText={setUsername}
              blurOnSubmit={false}
            />

            <Text style={Styles.label} >
              Username
            </Text>

            <View style={Styles.passwordHolder}>
              <TextInput
                style={[
                  Styles.input,
                  { flex: 0.9, marginRight: 0 },
                ]}
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
              Password
            </Text>

            <Spacer large />

            <TouchableOpacity
              style={Styles.mainButton}
              onPress={onSignIn}
            >
              <Text style={Styles.btnText}>Confirm</Text>
            </TouchableOpacity>
          </View>
      }
    </LinearGradient>
  )
}


export default SignIn

