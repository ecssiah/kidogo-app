import * as Font from 'expo-font'
import bcrypt from 'react-native-bcrypt'
import isaac from 'isaac'


export const LoadFonts = async () => {
  await Font.loadAsync({
    'Raleway-Bold': require('../assets/fonts/Raleway-Bold.ttf'),
  })
}


export const ConfigureBcrypt = () => {
  bcrypt.setRandomFallback((len) => {
    const buf = new Uint8Array(len)

    return buf.map(() => Math.floor(isaac.random() * 256))
  })
}

