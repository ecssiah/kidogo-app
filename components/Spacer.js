import React from 'react'
import { View } from 'react-native'
import { Size } from '../constants/Style'

const Spacer = (props) => {
  const getStyle = () => {
    const style = {
      width: Size.medium,
      height: Size.medium,
    }

    if (props.small) {
      style.width = Size.small
      style.height = Size.small
    }

    if (props.medium) {
      style.width = Size.medium
      style.height = Size.medium
    }

    if (props.large) {
      style.width = Size.large
      style.height = Size.large
    }

    if (props.xlarge) {
      style.width = Size.xlarge
      style.height = Size.xlarge
    }

    if (props.width) {
      style.width = props.width
    }

    if (props.height) {
      style.height = props.height
    }

    return style
  }

  return <View style={[getStyle(), props.style]} />
}

export default Spacer