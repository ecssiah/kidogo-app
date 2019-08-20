import React, { useEffect, useState } from 'react'
import uuid from 'uuid'
import { ScrollView, TouchableOpacity, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors, TopMargin, Styles } from '../constants/Style';

import Spacer from '../components/Spacer';
import Error from '../components/Error';
import ChildEntry from '../components/ChildEntry';


const Children = (props) => {
  const { guardianId } = props.navigation.state.params

  const [childData, setChildData] = useState([])
  const [childEntries, setChildEntries] = useState([])
  const [error, setError] = useState(null)


  useEffect(() => {
    addChild()
  }, [])


  const onSubmit = () => {

  }


  const addChild = () => {
    const newChildData = {
      id: uuid(),
      guardianId,
      firstName: '',
      lastName: '',
      birthdate: '',
      gender: '',
      notes: '',
      imgURI: null,
    }

    setChildData(childData.concat(newChildData))

    console.log(childData)

    setChildEntries(
      childEntries.concat(
        <ChildEntry
          key={childEntries.length}
          childData={childData}
          setChildData={setChildData}
        />
      )
    )
  }


  const removeChild = () => {
    if (childEntries.length > 1) {
      setChildData(childData.slice(0, -1))
      setChildEntries(childEntries.slice(0, -1))
    }
  }


  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Colors.gradient_dark, Colors.gradient_light]}
    >
      <Spacer height={TopMargin} />

      <Error message={error} />

      <ScrollView>
        { childEntries }

        <Spacer small />

        <View style={Styles.rowButtons} >
          <TouchableOpacity
            style={Styles.pairButton}
            onPress={removeChild}
          >
            <Text style={Styles.btnText}>Remove Child</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.pairButton}
            onPress={addChild}
          >
            <Text style={Styles.btnText}>Add Child</Text>
          </TouchableOpacity>
        </View>

        <Spacer small />

        <TouchableOpacity
          style={Styles.mainButton}
          onPress={onSubmit}
        >
          <Text style={Styles.btnText}>Submit Family</Text>
        </TouchableOpacity>

        <Spacer height={320} />
      </ScrollView>
    </LinearGradient>
  )
}

export default Children
