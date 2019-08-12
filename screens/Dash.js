import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../components/Header'
import DashView from '../components/DashView'
import ActionButtons from '../components/ActionButtons'


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
      colors={['#11011B', '#3C233D']}
    >
      <Header onHeader={onHeader} />

      <ScrollView>
        <DashView onDashView={onDashView} />
        <ActionButtons onActionButtons={onActionButtons} />
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