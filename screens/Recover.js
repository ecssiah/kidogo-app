import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '../constants/Style';


const Recover = (props) => {
  useEffect(() => {
  })

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Colors.gradient_dark, Colors.gradient_light]}
    >
    </LinearGradient>
  )
}


export default Recover
