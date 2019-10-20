import React, { useEffect, useState } from 'react'
import { } from 'react-native'

import Backdrop from '../components/Backdrop'


const Questions = (props) => {
  const [questions, setQuestions] = useState()

  useEffect(() => {
    getQuestions()
  }, [])


  const getQuestions = async () => {
    try {
      const serviceEndpoint = 'https://sheets.googleapis.com'
      const baseResource = '/v4/spreadsheets/'
      const spreadsheetID = '1JyYgZiaDscu81aayBUaLclHRVitenLIt4hmyUGL_M78'
      const range = 'Sheet1'
      const resource = `${baseResource}${spreadsheetID}/values/${range}`
      const apiKey = 'AIzaSyCDWxwQTxeZJhqiwLHKHP3V6ESgy2TBXQo'

      const url = serviceEndpoint + resource + '?key=' + apiKey

      const resp = await fetch(url)
      const json = await resp.json()
      const sheetValues = json['values']

      const questions = sheetValues.splice(1).reduce((res, value) => {
        res.morning.push(value[0])
        value[1] && res.afternoon.push(value[1])

        return res
      }, { morning: [], afternoon: [] })

      setQuestions(questions)
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <Backdrop>

    </Backdrop>
  )
}

export default Questions