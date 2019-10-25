import React, { useState } from 'react'
import { TouchableOpacity, TextInput, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Styles } from '../constants/Style'


const SecureInput = (props) => {
  const [hideId, setHideId] = useState(true)


  const toggleHideId = () => setHideId(!hideId)


  return (
    <View style={Styles.passwordHolder}>
      <TextInput
        style={[Styles.input, { flex: 0.85, marginRight: 0 }]}
        secureTextEntry={hideId}
        value={props.value}
        onChangeText={props.setValue}
      />

      <View style={Styles.showButton} >
        <TouchableOpacity onPress={toggleHideId} >
          <Icon
            color="white"
            name={hideId ? "visibility-off" : 'visibility'}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default SecureInput

