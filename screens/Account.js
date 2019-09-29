import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView, Text, View } from 'react-native'

import Backdrop from '../components/Backdrop';
import { Size, Styles } from '../constants/Style';
import Spacer from '../components/Spacer';
import AccountFinances from '../components/AccountFinances';
import DisplayMembers from '../components/DisplayMembers';
import { Update, Get } from '../utilities/localstore';
import { ACCOUNTS } from '../constants/Store';
import { SET_ACCOUNT } from '../constants/Account';
import Language from '../languages'


const Account = (props) => {
  const { id } = props.navigation.state.params

  const dispatch = useDispatch()

  const accounts = useSelector(state => state.accounts)
  const children = useSelector(state => state.children)
  const guardians = useSelector(state => state.guardians)
  const contacts = useSelector(state => state.contacts)

  const [rate, setRate] = useState(accounts[id].rate)
  const [frequency, setFrequency] = useState(accounts[id].frequency)


  const getFamilyName = () => {
    return guardians[accounts[id].guardians[0]].lastName
  }


  const onAddChild = () => {
    props.navigation.navigate('')
  }


  const onAddGuardian = () => {
    props.navigation.navigate('')
  }


  const onAddContact = () => {
    props.navigation.navigate('')
  }


  const updateRate = async (rate) => {
    setRate(rate)
    await Update(ACCOUNTS, id, { rate })

    const updatedAccount = {
      ...accounts[id],
      rate,
    }

    dispatch({ type: SET_ACCOUNT, id, account: updatedAccount })
  }


  const updateFrequency = async (frequency) => {
    setFrequency(frequency)
    await Update(ACCOUNTS, id, { frequency })

    const updatedAccount = {
      ...accounts[id],
      frequency,
    }

    dispatch({ type: SET_ACCOUNT, id, account: updatedAccount })
  }


  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <ScrollView>
        <Text style={[Styles.h1, Styles.raleway]} >
          { getFamilyName() }
        </Text>

        <View style={Styles.divider} />

        <AccountFinances
          account={accounts[id]}
          navigate={props.navigation.navigate}
          rate={rate}
          updateRate={updateRate}
          frequency={frequency}
          updateFrequency={updateFrequency}
        />

        <View style={Styles.divider} />

        <DisplayMembers
          title={Language.Children} addMember={onAddChild} members={children}
        />
        <DisplayMembers
          title={Language.Guardians} addMember={onAddGuardian} members={guardians}
        />
        <DisplayMembers
          title={Language.Contacts} addMember={onAddContact} members={contacts}
        />

        <Spacer height={Size.keyboard} />
      </ScrollView>
    </Backdrop>
  )
}

export default Account

// !!!!!!!!!!!!!!
//
// FREQUENCY PICKER
//
        // <View style={{ flex: .5, marginLeft: 5 }}>
        //   <View style={[Styles.input, { height: 30, paddingLeft: 0 }]} >
        //     <Picker
        //       style={{ color: 'white', marginTop: -10 }}
        //       selectedValue={props.frequency}
        //       onValueChange={(value, index) => props.setFrequency(value)}
        //     >
        //       <Picker.Item label={Frequency.Daily} value={Frequency.Daily} />
        //       <Picker.Item label={Frequency.Weekly} value={Frequency.Weekly} />
        //       <Picker.Item label={Frequency.Termly} value={Frequency.Termly} />
        //     </Picker>
        //   </View>

        //   <Text style={Styles.label}>
        //     { Language.Frequency }
        //   </Text>
        // </View>

      // <View style={Styles.nameHolder}>
      //   <View style={{ flex: .5, marginRight: 5 }}>
      //     <View style={{ flexDirection: 'row' }}>
      //       <Text style={Styles.prefix} >
      //         K
      //       </Text>

      //       <TextInput
      //         style={[Styles.input, { flex: .8, marginLeft: 0 }]}
      //         keyboardType="number-pad"
      //         value={props.rate}
      //         onChangeText={props.setRate}
      //       />
      //     </View>

      //     <Text style={Styles.label} >
      //       { Language.Rate }
      //     </Text>
      //   </View>
      // </View>