import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors, TopMargin, Styles } from '../constants/Style';

import Spacer from '../components/Spacer';
import Error from '../components/Error';
import ChildEntry from '../components/ChildEntry';

const Children = (props) => {
  const [error, setError] = useState(null)
  const [numChildren, setNumChildren] = useState(1)


  const changeNumChildren = (delta) => {
    if (numChildren + delta > 0) {
      setNumChildren(numChildren + delta)
    } else {
      setNumChildren(1)
    }
  }


  const getChildEntries = () => {
    const childEntries = []

    for (let i = 0; i < numChildren; i++) {
      childEntries.push(
        <ChildEntry key={i} />
      )
    }

    return childEntries
  }


  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Colors.gradient_dark, Colors.gradient_light]}
    >
      <Spacer height={TopMargin} />

      <Error message={error} />

      <ScrollView>
        { getChildEntries() }

        <Spacer large />

        <View style={Styles.rowButtons} >
          <TouchableOpacity
            style={[Styles.mainButton, { flex: 0.5, marginLeft: 5 }]}
            onPress={() => changeNumChildren(-1)}
          >
            <Text style={Styles.btnText}>Remove Child</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.mainButton, { flex: 0.5, marginLeft: 5 }]}
            onPress={() => changeNumChildren(1)}
          >
            <Text style={Styles.btnText}>Add Child</Text>
          </TouchableOpacity>
        </View>

        <Spacer height={320} />
      </ScrollView>
    </LinearGradient>
  )
}

export default Children
