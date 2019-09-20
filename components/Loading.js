import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Styles, Colors } from '../constants/Style';

const Loading = (props) => {
  return (
    <View style={Styles.loading}>
      <ActivityIndicator size="large" color={Colors.mainText} />
    </View>
  )
}

export default Loading