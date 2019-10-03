import React, { useState } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Styles, Colors } from '../constants/Style'
import Language from '../languages'
import Spacer from './Spacer'


const DisplayMembers = (props) => {
  const [active, setActive] = useState(false)


  const toggleActive = () => setActive(!active)


  const getMemberComponents = () => {
    const members = Object.values(props.members)
    const sortedMembers = members.sort((a, b) => {
      return (a.lastName + a.firstName) > (b.lastName + b.firstName)
    })

    return sortedMembers.map((member, i) => {
      return (
        <TouchableOpacity
          key={i}
          onPress={() => props.updateMember(member.id)}
        >
          <Text style={Styles.h2} >
            { member.firstName } { member.lastName }
          </Text>
        </TouchableOpacity>
      )
    })
  }


  const getAddMemberButton = () => {
    return (
      <View style={Styles.buttonContainer} >
        <TouchableOpacity
          style={Styles.button}
          onPress={() => props.addMember()}
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
