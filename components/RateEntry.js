import React from 'react'
import { Picker, Text, TextInput, View } from 'react-native'
import { Styles } from '../constants/Style';


const RateEntry = (props) => {

  return (
    <View style={Styles.nameHolder}>
      <View style={{ flex: .5, marginRight: 5 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={Styles.prefix} >
            K
          </Text>

          <TextInput
            keyboardType="number-pad"
            value={props.rate}
            style={[Styles.input, { flex: .8, marginLeft: 0 }]}
            onChangeText={(text) => props.handleNumberChange(text, 'rate')}
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
            onValueChange={(value, index) => props.pickerChange(value)}
          >
            <Picker.Item label="Kila siku" value="daily" />
            <Picker.Item label="Kila wiki" value="weekly" />
            <Picker.Item label="Kila Muhula" value="termly" />
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
