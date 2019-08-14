import { Text, View } from 'react-native'
import { Styles } from "../constants/Style";


const Error = (props) => {
  if (!props.message) {
    return null
  }

  return (
    <View style={Styles.error} >
      <Text style={Styles.errorText} >
        { props.message }
      </Text>
    </View>
  )
}

export default Error
