import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Styles, Colors } from '../constants/Style'
import Language from '../languages'
import Spacer from './Spacer'


const DisplayMembers = (props) => {
  const [active, setActive] = useState(false)


  const toggleActive = () => setActive(!active)


  const getMemberComponents = () => {
    return Object.values(props.members).map((member, i) => {
      return (
        <View key={i} >
          <Text style={Styles.h2} >
            { member.firstName } { member.lastName }
          </Text>
        </View>
      )
    })
  }


  const getAddMemberButton = () => {
    return (
      <View style={Styles.buttonContainer} >
        <TouchableOpacity
          style={Styles.button}
          onPress={props.addMember}
        >
          <Text style={Styles.btnText} >
            { Language.New }
          </Text>
        </TouchableOpacity>
      </View>
    )
  }


  const getBody = () => {
    if (active) {
      return (
        <View>
          { getMemberComponents() }
          { getAddMemberButton() }
          <Spacer medium />
        </View>
      )
    } else {
      return null
    }
  }


  return (
    <View>
      <TouchableOpacity
        style={Styles.accountHeader}
        onPress={toggleActive}
      >
        <Text style={Styles.h2} >
          { props.title }
        </Text>

        <Icon
          iconStyle={Styles.expandIcon}
          size={36}
          color={Colors.mainText}
          name={active ? "expand-less" : "expand-more"}
        />
      </TouchableOpacity>

      <View style={Styles.divider} />

      { getBody() }

      <View style={Styles.divider} />
    </View>
  )
}


export default DisplayMembers
