import React from 'react'
import { Picker, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Styles } from '../constants/Style'
import { Frequency, FrequencyStrings } from '../constants/Finances'
import Language from '../languages'
import Spacer from './Spacer'
import CurrencyInput from './CurrencyInput'


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

      <View style={Styles.rowElements} >
        <CurrencyInput
          label={Language.Rate}
          amount={props.rate.toString()}
          setAmount={props.updateRate}
        />

        <View style={Styles.rowElement}>
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
