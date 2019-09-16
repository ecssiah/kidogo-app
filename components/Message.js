import React from 'react'
import { Text, View } from 'react-native'
import { Styles } from "../constants/Style";


const Message = (props) => {
  if (!props.text) {
    return null
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
