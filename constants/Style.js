import { StatusBar } from 'react-native'
import { Dimensions, StyleSheet } from 'react-native'


export const TopMargin = StatusBar.currentHeight


export const Screen = {
  Width: Dimensions.get("window").width,
  Height: Dimensions.get("window").height,
}

export const Size = {
  small: 4,
  medium: 16,
  large: 64,
  xlarge: 128,
}

export const Colors = {
  helpButton: '#3c233d',
  gradient_dark: '#11011b',
  gradient_light: '#3c233d',
}

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingBottom: 50,
  },
  headerStyle: {
    backgroundColor: Colors.gradient_dark,
  },
  headerTitleStyle: {
    fontFamily: 'arial',
    fontSize: 32,
    fontWeight: 'bold',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  h1: {
    fontSize: 36,
    color: '#ffffff80',
    margin: 10,
  },
  h2: {
    fontSize: 24,
    color: '#ffffff80',
    margin: 10,
  },
  input: {
    fontSize: 18,
    color: 'white',
    borderColor: 'white',
    borderBottomWidth: 2,
    margin: 10,
    paddingLeft: 10,
    opacity: 0.5,
  },
  textArea: {
    fontSize: 18,
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
    margin: 10,
    padding: 8,
    opacity: 0.5,
    textAlignVertical: 'top',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  codeInput: {
    flex: 1,
    color: 'white',
    fontSize: 32,
    borderWidth: 2,
    borderColor: 'white',
    opacity: 0.5,
    marginHorizontal: 86,
    padding: 10,
  },
  codeMessage: {
    margin: 18,
    color: '#ffffff80',
    fontSize: 22,
  },
  cameraBackground: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  cameraIcon: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    opacity: 0.5,
    color: 'white',
    marginLeft: 20,
    marginBottom: 10,
  },
  passwordHolder: {
    flexDirection: 'row',
  },
  showButton: {
    flex: 0.1,
    borderColor: 'white',
    borderBottomWidth: 2,
    opacity: 0.5,
    marginVertical: 10,
    marginRight: 10,
  },
  nameHolder: {
    flexDirection: 'row'
  },
  focused: {
    opacity: 1,
    fontSize: 18
  },
  next: {
    flexDirection: 'row',
    marginRight: 10,
    marginTop: 20,
    opacity: 0.5,
    borderWidth: 1,
    borderColor: 'white',
    height: 50,
    width: 250,
  },
  nextText: {
    fontSize: 24,
    color: 'white',
    marginRight: 10,
    textAlign: 'right',
    height: 50,
    lineHeight: 50,
  },
  notReady: {
    opacity: 0.5,
  },
  ready: {
    opacity: 1,
  },
  imageHolder: {
    height: 220,
    width: 220,
    borderRadius: 110,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  homeTitle: {
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  error: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 75,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ffffff80',
    backgroundColor: '#11011B',
  },
  errorText: {
    color: "white",
    fontSize: 18,
  },
  headerButtons: {
    flex: 1,
    height: 50,
    backgroundColor: '#0C000E',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'nowrap',
  },
  headerButton: {
    paddingTop: 10,
  },
  button: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ffffff80',
    paddingHorizontal: 10,
  },
  pairButton: {
    flex: 0.5,
    borderWidth: 1,
    borderColor: '#ffffff80',
    paddingHorizontal: 10,
    marginHorizontal: 4,
  },
  mainButton: {
    borderWidth: 1,
    borderColor: '#ffffff80',
    marginHorizontal: 8,
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
    backgroundColor: '#000000dd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 0.4,
    color: '#ffffff80',
    marginLeft: 10,
  },
  content: {
    fontSize: 18,
    color: '#ffffff80',
    flex: 0.6,
    marginLeft: 10,
  },
  img: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    borderRadius: 100,
    marginVertical: 10,
  },
  rowButtons: {
    height: 50,
    flexDirection: 'row',
    marginHorizontal: 4,
  },
  prefix: {
    flex: .2,
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    opacity: 0.5,
    borderColor: 'white',
    color: 'white',
    height: 30,
    marginVertical: 10,
    marginLeft: 10,
    paddingLeft: 10,
    lineHeight: 34
  },
  raleway: {
    fontFamily: 'Raleway-Bold',
  },
  helpButton: {
    backgroundColor: '#ffffff80',
    position: 'absolute',
    bottom: -75,
    left: -75,
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  helpButtonIcon: {
    position: 'absolute',
    bottom: 85,
    left: 80,
  },
  dash: {
    backgroundColor: '#aaa',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  dashFont: {
    fontSize: 24,
    zIndex: 99,
    fontSize: 36,
    height: 200,
    lineHeight: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingLeft: 30,
    flex: 1,
    color: 'white',
  },
  actionsContainer: {
    flex: 1,
    padding: 10,
    alignSelf: 'stretch',
  },
  actionButton: {
    height: 150,
    marginBottom: 10,
    zIndex: 100,
    borderRadius: 5,
    position: 'relative',
  },
  actionText: {
    zIndex: 101,
    fontSize: 24,
    top: 0,
    height: 150,
    lineHeight: 150,
    paddingLeft: 20,
    color: '#333',
  },
  buttonImage: {
    borderRadius: 5,
    height: 150
  },
  attendanceHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  attendanceCard: {
    width: 105,
    height: 150,
    padding: 10,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#ffffff80',
    marginBottom: 15,
    opacity: 1,
  },
  present: {
    backgroundColor: 'green',
    height: 30,
    width: 30,
    paddingTop: 3,
    borderRadius: 15,
    position: 'absolute',
    top: -10,
    right: -10,
    borderWidth: 2,
    borderColor: '#ffffff80',
    zIndex: 101,
  },
})
