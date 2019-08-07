import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { Audio } from 'expo-av'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '../constants/Style';

const Home = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [hidePassword, setHidePassword] = useState(true)
  const [loading, setLoading] = useState(false)
  const [soundObject, setSoundObject] = useState(null)
  const [error, setError] = useState(null)


  const toggleShowPassword = () => setHidePassword(!hidePassword)


  const onSignIn = () => {

  }


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
      showError(error)
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
            console.log(props)
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderBottomWidth: 2,
    borderColor: 'white',
    opacity:0.5,
    margin:10,
    fontSize:18,
    color:'white',
    paddingLeft:10
  },
  label:{
    fontSize:14,
    opacity:0.5,
    color:'white',
    marginLeft:20,
    marginBottom:10
  },
  passwordHolder:{
    flexDirection:'row',
  },
  showButton:{
    borderBottomWidth:2,
    borderColor:'white',
    opacity:0.5,
    marginVertical:10,
    marginRight:10,
    flex:0.1
  },
  nameHolder:{
    flexDirection:'row'
  },
  imageHolder:{
    height:220,
    width:220,
    borderRadius:110,
    alignSelf:'center',
    marginTop:20,
    marginBottom:10
  },
  error:{
    position: 'absolute',
    top:0,
    right: 0,
    left:0,
    height: 75,
    padding: 20,
    borderWidth:1,
    borderColor:'#ffffff80',
    backgroundColor:'#11011B',
  },
  errorText:{
    color:"white",
    fontSize:18
  },
  button: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ffffff80',
    paddingHorizontal: 10,
    flex: 0.5,
    marginVertical: 20,
    borderRadius:2
  },
  btnText: {
    fontSize: 24,
    lineHeight: 50,
    color: '#ffffff80',
    textAlign: 'center'
  },
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000000dd'
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    flex:0.4,
    color:'#ffffff80',
    marginLeft:10
  },
  content:{
    fontSize:18,
    color:'#ffffff80',
    flex:0.6,
    marginLeft:10
  },
});
