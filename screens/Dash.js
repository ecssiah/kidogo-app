import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import Header from '../components/Header'
import DashContent from '../components/DashContent'
import { Colors } from '../constants/Style';


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
      <Header onHeader={onHeader} />

      <ScrollView>
        <DashContent onDashView={onDashView} />
      </ScrollView>
    </LinearGradient>
  )
}


export default Dash

// const mapStateToProps = state => ({
//   payments: state.payments
// })

// const mapDispatchToProps = dispatch => bindActionCreators(
//   {addFees, getAttendance}, dispatch
// )

// export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)