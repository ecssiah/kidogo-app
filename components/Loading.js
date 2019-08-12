import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Styles } from '../constants/Style';

const Loading = (props) => {
  return (
    <View style={Styles.loading}>
      <ActivityIndicator size="large" color="#ffffff80" />
    </View>
  )
}

export default Loading