import React from 'react'
import { StatusBar, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Styles } from '../constants/Style';

import Spacer from './Spacer';

const Header = (props) => {
  return (
    <View style={{ height: 50 }} >
      <Spacer height={StatusBar.currentHeight} />

      <View style={Styles.headerButtons} >
        <TouchableOpacity
          style={Styles.headerButton}
          onPress={() => props.navigate('Dash')}
        >
          <Icon name="home" color="white" size={30} />
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.headerButton}
          onPress={() => props.navigate('Upload')}
        >
          <Icon name="cloud-upload" color="white" size={30} />
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.headerButton}
          onPress={() => props.navigate('Accounts')}
        >
          <Icon name="people" color="white" size={30} />
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Header
