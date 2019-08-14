import React from 'react'
import { Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '../constants/Style';

import Header from '../components/Header';


const Upload = (props) => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Colors.gradient_dark, Colors.gradient_light]}
    >
    </LinearGradient>
  )
}

export default Upload