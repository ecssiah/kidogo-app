import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Styles, Colors } from '../constants/Style'


const DisplayMembers = (props) => {
  const [active, setActive] = useState(false)


  const toggleActive = () => setActive(!active)


  const getMemberComponents = () => {
    if (active) {
      return Object.values(props.members).map((member, i) => {
        return (
          <View>
            <Text>
              { member.firstName }
            </Text>

          </View>
        )
      })
    } else {
      return null
    }
  }


  return (
    <View>
      <TouchableOpacity
        style={Styles.header}
        onPress={toggleActive}
      >
        <Text style={Styles.h2} >
          { props.title }
        </Text>

        <Icon
          size={36}
          color={Colors.mainText}
          name={active ? "expand-less" : "expand-more"}
        />
      </TouchableOpacity>

      { getMemberComponents() }

      <View style={Styles.divider} />
    </View>
  )
}


export default DisplayMembers
