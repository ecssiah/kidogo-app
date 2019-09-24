import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'


const AccountCard = (props) => {
  const getChildNames = () => {
    const childNames = props.children.reduce((acc, child) => {
      acc.push(child.firstName + ' ' + child.lastName)
      return acc
    }, [])

    return childNames.join(', ')
  }


  const getGuardianNames = () => {
    const guardianNames = props.guardians.reduce((acc, guardian) => {
      acc.push(guardian.firstName + ' ' + guardian.lastName)
      return acc
    }, [])

    return guardianNames.join(', ')
  }


  return (
    <TouchableOpacity
      style={Styles.accountCard}
      onPress={() => props.navigate('Account', { id: props.id })}
    >
      <Text style={[Styles.h1, Styles.raleway]}>
        { props.name }
      </Text>

      <Text style={Styles.balance} >
        K{ props.balance }
      </Text>

      <View style={Styles.members} >
        <Text style={Styles.childNames} >
          { getChildNames() }
        </Text>

        <Text style={Styles.guardianNames} >
          { getGuardianNames() }
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default AccountCard
