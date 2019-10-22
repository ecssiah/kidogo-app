import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Styles } from '../constants/Style';
import Language from '../languages'

import Backdrop from '../components/Backdrop';


const Upload = (props) => {
  const onUpload = async () => {

  }


  return (
    <Backdrop>
      <View style={Styles.loading} >
        <TouchableOpacity
          style={Styles.uploadButton}
          onPress={onUpload}
        >
          <Text style={Styles.uploadButtonText}>
            { Language.Upload }
          </Text>
        </TouchableOpacity>
      </View>
    </Backdrop>
  )
}

export default Upload
