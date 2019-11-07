import React from 'react'
import { Text, View } from 'react-native'
import { Styles } from "../constants/Style";
import { isString } from '../utilities/general';


const Message = (props) => {
  if (!props.text) {
    return null
  } else if (!isString(props.text)) {
    return "Error message is not a string"
  }


  return (
    <View style={Styles.message} >
      <Text style={Styles.messageText} >
        { props.text }
      </Text>
    </View>
  )
}

export default Message
