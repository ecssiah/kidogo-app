import React, { useEffect, useRef, useState } from 'react'
import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions'
import { Styles } from '../constants/Style';
import { Icon } from 'react-native-elements';


const Camera = (props) => {
  const camera = useRef(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [hasPermission, setHasPermission] = useState(null)


  useEffect(() => {
    getPermission()
  }, [])


  const getPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)

    setHasPermission(status === 'granted')
  }


  const takePicture = async () => {
    try {
      const cameraResp = await camera.current.takePictureAsync({ quality: 0.5 })

      // return new picture URI
    } catch(error) {
      console.error(error)
    }
  }


  if (hasPermission === null) {
    return <View />
  } else if (hasPermission === false) {
    return <Text>Camera Permission Denied</Text>
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          ref={camera}
          type={type}
        >
          <View style={Styles.cameraBackground} >
            <TouchableOpacity
              style={Styles.cameraIcon}
              onPress={takePicture}
            >
              <Icon name="camera-alt" color="white" size={50} />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    )
  }
}