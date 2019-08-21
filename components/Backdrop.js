import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '../constants/Style';


const Backdrop = (props) => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Colors.gradient_dark, Colors.gradient_light]}
    >
      { props.children }
    </LinearGradient>
  )
}

export default Backdrop
