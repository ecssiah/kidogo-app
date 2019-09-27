import React from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'

import Backdrop from '../components/Backdrop';
import { Size, Styles } from '../constants/Style';
import Spacer from '../components/Spacer';
import AccountFinances from '../components/AccountFinances';


const Account = (props) => {
  const { id } = props.navigation.state.params

  const accounts = useSelector(state => state.accounts)
  const children = useSelector(state => state.children)
  const guardians = useSelector(state => state.guardians)
  const contacts = useSelector(state => state.contacts)

  const getFamilyName = () => {
    return guardians[accounts[id].guardians[0]].lastName
  }

  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <Text style={[Styles.h1, Styles.raleway]} >
        { getFamilyName() }
      </Text>

      <AccountFinances account={accounts[id]} />
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