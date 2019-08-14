import React, { useEffect } from 'react'
import { ScrollView, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors, Styles } from '../constants/Style';

import Spacer from '../components/Spacer';
import Header from '../components/Header'
import DashContent from '../components/DashContent'


const Dash = (props) => {
  useEffect(() => {
  })

  const onHeader = () => {

  }

  const onDashView = () => {

  }

  const onActionButtons = () => {

  }


  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Colors.gradient_dark, Colors.gradient_light]}
    >
      <DashContent />
    </LinearGradient>
  )
}


export default Dash
