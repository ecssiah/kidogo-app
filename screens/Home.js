import React, { useState } from 'react';
import {
  Image, StyleSheet, View, Text, TextInput, TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements'
import { Audio } from 'expo-av'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '../constants/Style';
import styles from '../components/styles'
import * as SecureStore from 'expo-secure-store'

const Home = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [hidePassword, setHidePassword] = useState(true)
  const [loading, setLoading] = useState(false)
  const [soundObject, setSoundObject] = useState(null)
  const [error, setError] = useState(null)


  const onSignIn = () => {

  }


  const toggleShowPassword = () => setHidePassword(!hidePassword)


  const toggleHelpAudio = async () => {
    try {
      if (soundObject) {
        await soundObject.stopAsync()

        setSoundObject(null)
      } else {
        const soundObject = new Audio.Sound()
        await soundObject.loadAsync(require('../assets/audio/signin.mp3'))
        await soundObject.playAsync()

        setSoundObject(soundObject)
      }
    } catch(error) {
      console.error(error)
    }
  }


  const showError = error => {
    setError(error)
    setTimeout(() => setError(null), 2000)
  }


  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Colors.gradient_dark, Colors.gradient_light]}
    >
      <View style={styles.imageHolder}>
        <Image
          source={require('../assets/images/kidogo_logo.png')}
          style={{ width: 180, height: 180, margin: 20 }}
        />
      </View>

      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label} >
        Username
      </Text>

      <View style={styles.passwordHolder}>
        <TextInput
          style={[
            styles.input,
            { flex: 0.9, marginRight: 0 },
          ]}
          value={password}
          secureTextEntry={hidePassword}
          onChangeText={setPassword}
        />

        <View style={styles.showButton} >
          <TouchableOpacity onPress={toggleShowPassword} >
            <Icon
              color="white"
              name={hidePassword ? "visibility-off" : 'visibility'}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.label} >
        Password
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          height: 50,
        }}
      >
        <TouchableOpacity
          style={[
            styles.button,
            { flex: 0.5, marginRight: 5 }
          ]}
          onPress={() => {
            props.navigation.navigate('SignUp')
          }}
        >
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { flex: 0.5, marginLeft: 5 }]}
          onPress={onSignIn}
        >
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#ffffff80',
          position: 'absolute',
          bottom: -75, left: -75,
          width: 150, height: 150,
          borderRadius: 75
        }}
        onPress={toggleHelpAudio}
      >
        <View style={{ position: 'absolute', bottom: 85, left: 80 }}>
          <Icon name="record-voice-over" color="#3C233D" size={36} />
        </View>
      </TouchableOpacity>

      { loading ? <Loading /> : null }

      {
        !!error === true
          ? <View style={styles.error} >
              <Text style={styles.errorText} >
                { error }
              </Text>
            </View>
          : null
      }
    </LinearGradient>
  );
}

export default Home
