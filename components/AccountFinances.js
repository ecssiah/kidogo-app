import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Styles } from '../constants/Style'
import { FrequencyStrings } from '../constants/Finances'
import Language from '../languages'


const AccountFinances = (props) => {
  const getRateSummary = () => {
    const rate = props.account.rate
    const frequency = FrequencyStrings[props.account.frequency].toLowerCase()

    return `${ Language.ThisAccountPays } K${ rate } ${ frequency }.`
  }


  const onSelectPayment = () => {
    props.navigation.navigate('Payments', { id: props.account.id })
  }


  const onEditRate = () => {

  }


  return (
    <View>
      <Text style={Styles.balance} >
        { Language.Balance }: K{ props.account.balance }
      </Text>

      <Text style={Styles.frequencyDisplay} >
        { getRateSummary() }
      </Text>

      <View style={Styles.rowButtons} >
        <TouchableOpacity
          style={Styles.pairButton}
          onPress={onSelectPayment}
        >
          <Text style={Styles.btnText} >
            { Language.New } { Language.Payment }
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.pairButton}
          onPress={onEditRate}
        >
          <Text style={Styles.btnText} >
            { Language.Edit } { Language.Rate }
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AccountFinances
