import React from 'react'
import { Picker, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Styles } from '../constants/Style'
import { Frequency, FrequencyStrings } from '../constants/Finances'
import Language from '../languages'
import Spacer from './Spacer'


const AccountFinances = (props) => {
  const getRateSummary = () => {
    const rate = props.account.rate
    const frequency = FrequencyStrings[props.account.frequency].toLowerCase()

    return `${ Language.ThisAccountPays } K${ rate } ${ frequency }.`
  }


  const getFrequencyItems = () => {
    return Object.values(Frequency).map((frequency, i) =>
      <Picker.Item
        key={i} label={FrequencyStrings[frequency]} type={frequency}
      />
    )
  }


  return (
    <View>
      <Text style={Styles.balance} >
        { Language.Balance }: K{ props.account.balance }
      </Text>

      <Text style={Styles.frequencyDisplay} >
        { getRateSummary() }
      </Text>

      <View style={Styles.nameHolder}>
        <View style={{ flex: .5, marginRight: 5 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={Styles.prefix} >
              K
            </Text>

            <TextInput
              style={[Styles.input, { flex: .8, marginLeft: 0 }]}
              keyboardType="number-pad"
              value={props.rate.toString()}
              onChangeText={props.updateRate}
            />
          </View>

          <Text style={Styles.label} >
            { Language.Rate }
          </Text>
        </View>

        <View style={{ flex: .5, marginLeft: 5 }}>
          <View style={[Styles.input, { height: 30, paddingLeft: 0 }]} >
            <Picker
              style={{ color: 'white', marginTop: -10 }}
              selectedValue={props.frequency}
              onValueChange={(value, index) => props.updateFrequency(value)}
            >
              { getFrequencyItems() }
            </Picker>
          </View>

          <Text style={Styles.label}>
            { Language.Frequency }
          </Text>
        </View>
      </View>
    </View>
  )
}

export default AccountFinances
