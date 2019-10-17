import { StatusBar } from 'react-native'
import { Dimensions, StyleSheet } from 'react-native'


export const Screen = {
  Width: Dimensions.get("window").width,
  Height: Dimensions.get("window").height,
}


export const Size = {
  small: 4,
  medium: 16,
  large: 64,
  xlarge: 128,
  keyboard: 320,
  statusbar: StatusBar.currentHeight,
}


export const Colors = {
  mainText: '#dadada',
  helpButton: '#3c233d',
  gradient_dark: '#11011b',
  gradient_light: '#3c233d',
  backgroundHighlight: '#42314b',
  attendanceSelect: '#c38fff',
  attendanceEmpty: '#888888',
}


export const Styles = StyleSheet.create({
  tabLabel: {
    color: Colors.mainText,
  },
  frequencyDisplay: {
    margin: 10,
    fontSize: 18,
    color: Colors.mainText,
  },
  accountCard: {
    flex: 1,
    margin: 10,
    padding: 10,
    minHeight: 150,
    borderWidth: 1,
    backgroundColor: '#635066',
    borderColor: Colors.mainText,
  },
  balance: {
    fontSize: 28,
    margin: 6,
    color: Colors.mainText,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.backgroundHighlight,
  },
  members: {
    flex: .5,
    borderColor: 'red',
    marginTop: 20,
    marginBottom: 20
  },
  childNames: {
    fontSize: 18,
    fontWeight:'bold',
    color: Colors.mainText,
  },
  guardianNames: {
    fontSize: 14,
    color: Colors.mainText,
  },
  financePickerContainer: {
    borderBottomWidth: 2,
    borderColor: Colors.mainText,
    margin: 10,
    fontSize: 18,
    color: Colors.mainText,
    height: 30,
    paddingLeft: 0,
  },
  financePicker: {
    height: 30,
    color: Colors.mainText,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.mainText,
  },
  financeButtonContainer: {
    paddingTop: 16,
    paddingHorizontal: 36,
  },
  financeHistoryContainer: {
    paddingTop: 16,
  },
  financeHeadline: {
    margin: 10,
    fontSize: 32,
    color: Colors.mainText,
  },
  financeIcon: {
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  expenses: {
    flex: 0.5,
    margin: 10,
  },
  financeDisplay: {
    flex: 0.5,
    fontSize: 36,
    textAlign: 'center',
  },
  dashText: {
    fontSize: 36,
  },
  subText: {
    fontSize: 18,
    color: Colors.mainText,
  },
  buttonContainer: {
    paddingTop: 16,
    paddingHorizontal: 36,
  },
  button: {
    height: 50,
    borderWidth: 1,
    borderColor: Colors.mainText,
    margin: 10,
    borderRadius: 2,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.mainText,
  },
  input: {
    borderBottomWidth: 2,
    borderColor: Colors.mainText,
    margin: 10,
    fontSize: 18,
    color: Colors.mainText,
    paddingLeft: 10,
  },
  dateInput: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: Colors.mainText,
    margin: 10,
    fontSize: 18,
    color: Colors.mainText,
    paddingLeft: 10,
  },
  prefix: {
    flex: 0.2,
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: Colors.mainText,
    color: Colors.mainText,
    height: 30,
    marginVertical: 10,
    marginLeft: 10,
    paddingLeft: 10,
    lineHeight: 34,
  },
  currencyInput: {
    flex: 0.8,
    fontSize: 18,
    color: Colors.mainText,
    borderColor: Colors.mainText,
    borderBottomWidth: 2,
    marginLeft: 0,
    marginRight: 10,
    marginVertical: 10,
    paddingLeft: 10,
  },
  label: {
    fontSize: 14,
    color: Colors.mainText,
    marginLeft: 20,
    marginBottom: 10,
  },
  financeRow: {
    height: 50,
    flexDirection: 'row',
  },
  iconHolder: {
    flex: 0.19,
    paddingTop: 5,
  },
  expandIcon: {
    marginTop: 8,
  },
  entryIcon: {
    height: 30,
    width: 30,
    margin: 10,
    borderRadius: 15,
    paddingTop: 2.5,
  },
  tableHeader: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#222222',
    borderColor: Colors.mainText,
    height: 50,
  },
  focused: {
    fontSize: 18,
    color: Colors.mainText,
  },
  tableRow: {
    lineHeight: 50,
    flex: 0.27,
    color: Colors.mainText,
  },
  container: {
    flex: 1,
    padding: 5,
    paddingBottom: 50,
  },
  attendanceDate: {
    width: 40,
  },
  attendanceDateText: {
    fontSize: 14,
    color: Colors.mainText,
    transform: [{ rotate: '-66deg' }],
  },
  attendanceHeader: {
    backgroundColor: '#00000090',
    height: 100,
  },
  attendanceControlContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  attendanceDates: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  attendanceDateArrow: {
    flex: 0.08,
  },
  attendanceDateRangeText: {
    flex: 0.84,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 26,
    color: Colors.mainText,
  },
  attendanceStatusComponents: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 14,
  },
  dateStatusHolder: {
    margin: 5,
  },
  dateStatus: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  name: {
    fontSize: 14,
    marginLeft: 5,
    color: Colors.mainText,
  },
  attendanceRow: {
    flexDirection: 'row',
    padding: 5,
  },
  attendanceHistoryImageView: {
    zIndex: 100,
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    marginHorizontal: 6,
  },
  attendanceHistoryImage: {
    flex: 1,
    width: 70,
    height: null,
    resizeMode: 'cover',
  },
  attendanceName: {
    fontSize: 14,
    textAlign: 'center',
    color: Colors.mainText,
  },
  attendanceChild: {
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
    color: Colors.mainText,
    margin: 10,
  },
  h2: {
    fontSize: 24,
    color: Colors.mainText,
    margin: 10,
  },
  input: {
    fontSize: 18,
    color: Colors.mainText,
    borderColor: Colors.mainText,
    borderBottomWidth: 2,
    margin: 10,
    paddingLeft: 10,
  },
  textArea: {
    fontSize: 18,
    color: Colors.mainText,
    borderColor: Colors.mainText,
    borderWidth: 2,
    margin: 10,
    padding: 8,
    textAlignVertical: 'top',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  codeInput: {
    flex: 1,
    color: Colors.mainText,
    fontSize: 32,
    borderWidth: 2,
    borderColor: Colors.mainText,
    marginHorizontal: 86,
    padding: 10,
  },
  codeMessage: {
    margin: 18,
    color: Colors.mainText,
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
    color: Colors.mainText,
    marginLeft: 20,
    marginBottom: 10,
  },
  passwordHolder: {
    flexDirection: 'row',
  },
  showButton: {
    flex: 0.1,
    borderColor: Colors.mainText,
    borderBottomWidth: 2,
    marginVertical: 10,
    marginRight: 10,
  },
  nameHolder: {
    flexDirection: 'row'
  },
  focused: {
    fontSize: 18
  },
  next: {
    flexDirection: 'row',
    marginRight: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: Colors.mainText,
    height: 50,
    width: 250,
  },
  dateHolder:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginTop: 0,
    height: 40,
  },
  nextText: {
    fontSize: 24,
    color: Colors.mainText,
    marginRight: 10,
    textAlign: 'right',
    height: 50,
    lineHeight: 50,
  },
  notReady: {
  },
  ready: {
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
  message: {
    position: 'absolute',
    zIndex: 100,
    top: Size.statusbar,
    right: 0,
    left: 0,
    padding: 20,
    borderWidth: 2,
    borderRadius: 12,
    overflow: 'hidden',
    borderColor: Colors.mainText,
    backgroundColor: Colors.gradient_light,
  },
  messageText: {
    color: Colors.mainText,
    fontSize: 18,
  },
  error: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 75,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.mainText,
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
    borderColor: Colors.mainText,
    paddingHorizontal: 10,
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
    color: Colors.mainText,
    marginLeft: 10,
  },
  content: {
    fontSize: 18,
    color: Colors.mainText,
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
  rowElements: {
    flexDirection: 'row',
  },
  rowElement: {
    flex: 0.5,
  },
  rowButton: {
    flex: 0.5,
    borderWidth: 1,
    borderColor: Colors.mainText,
    marginHorizontal: 8,
  },
  mainButton: {
    borderWidth: 1,
    borderColor: Colors.mainText,
    marginHorizontal: 8,
  },
  buttonText: {
    fontSize: 24,
    lineHeight: 50,
    color: Colors.mainText,
    textAlign: 'center'
  },
  raleway: {
    fontFamily: 'Raleway-Bold',
  },
  helpButton: {
    backgroundColor: Colors.mainText,
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
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashFont: {
    zIndex: 99,
    fontSize: 36,
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 78,
    paddingLeft: 32,
    color: Colors.mainText,
    textShadowColor: 'rgba(0, 0, 0, 1.0)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  financeHeader: {
    backgroundColor: Colors.gradient_light,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 28,
    top: 0,
    height: 150,
    lineHeight: 150,
    paddingLeft: 20,
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 1.0)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
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
  imgNameHolder:{
    height: 80,
    width: 80,
    zIndex: 100,
    overflow: 'hidden'
  },
  attendanceCard: {
    width: 105,
    height: 150,
    padding: 10,
    position: 'relative',
    borderWidth: 1,
    borderColor: Colors.mainText,
    marginBottom: 15,
  },
  attendanceImage: {
    flex: 1,
    width: 80,
    height: 80,
    resizeMode: 'cover',
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
    borderColor: Colors.mainText,
    zIndex: 101,
  },
  text: {
    fontSize: 18,
    color: Colors.mainText,
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: Colors.mainText,
    padding: 22,
    alignSelf: 'center',
  },
  uploadButtonText: {
    fontSize: 32,
    color: Colors.mainText,
  },
})
