import React from 'react'
import { Picker, Text, TextInput, View } from 'react-native'
import { Styles } from '../constants/Style';
import { Frequency } from '../constants/Enrollment';


const RateEntry = (props) => {

  return (
    <View style={Styles.nameHolder}>
      <View style={{ flex: .5, marginRight: 5 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={Styles.prefix} >
            K
          </Text>

          <TextInput
            style={[Styles.input, { flex: .8, marginLeft: 0 }]}
            keyboardType="number-pad"
            value={props.rate}
            onChangeText={props.setRate}
          />
        </View>

        <Text style={Styles.label} >
          Kiwango
        </Text>
      </View>

      <View style={{ flex: .5, marginLeft: 5 }}>
        <View style={[Styles.input, { height: 30, paddingLeft: 0 }]} >
          <Picker
            style={{ color: 'white', marginTop: -10 }}
            selectedValue={props.frequency}
            onValueChange={(value, index) => props.setFrequency(value)}
          >
            <Picker.Item label={Frequency.DAILY} value={Frequency.DAILY} />
            <Picker.Item label={Frequency.WEEKLY} value={Frequency.WEEKLY} />
            <Picker.Item label={Frequency.TERMLY} value={Frequency.TERMLY} />
          </Picker>
        </View>

        <Text style={Styles.label}>
          Mara ngapi
        </Text>
      </View>
    </View>
  )
}

export default RateEntry
