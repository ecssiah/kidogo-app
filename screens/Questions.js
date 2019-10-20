import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { TouchableOpacity, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

import Backdrop from '../components/Backdrop'
import { Styles, Size } from '../constants/Style'
import { Answer, UPDATE_QUESTIONS } from '../constants/Questions'
import Language from '../languages'
import { GetTOD, GetShortDate } from '../utilities/dates'
import Spacer from '../components/Spacer'
import { Update } from '../utilities/localstore'
import { QUESTIONS } from '../constants/Store'


const Questions = (props) => {
  const dispatch = useDispatch()

  const [tod, setTOD] = useState(GetTOD())
  const [curQuestionIndex, setCurQuestionIndex] = useState(0)
  const [questions, setQuestions] = useState({ morning: [], afternoon: [] })

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


  const answer = async (response) => {
    const today = GetShortDate()
    const update = { [questions[tod][curQuestionIndex]]: response }

    dispatch({ type: UPDATE_QUESTIONS, id: today, update })
    await Update(QUESTIONS, today, update)

    forward()
  }


  const back = () => {
    const nextIndex = curQuestionIndex - 1 >= 0
      ? curQuestionIndex - 1 : curQuestionIndex

    setCurQuestionIndex(nextIndex)
  }


  const forward = () => {
    const numQuestions = tod < 15
      ? questions.morning.length : questions.afternoon.length
    const nextIndex = curQuestionIndex + 1 < numQuestions
      ? curQuestionIndex + 1 : curQuestionIndex

    setCurQuestionIndex(nextIndex)
  }


  const getCurrentQuestion = () => {
    if (!questions) {
      return null
    }

    return (
      <Text style={Styles.h2} >
        { questions[tod][curQuestionIndex] }
      </Text>
    )
  }


  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <Spacer medium />

      <View style={Styles.rowElements} >
        <TouchableOpacity
          style={Styles.rowElement}
          onPress={back}
        >
          <Icon name="chevron-left" size={48} color='#ffffff80' />
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.rowElement}
          onPress={forward}
        >
          <Icon name="chevron-right" size={48} color='#ffffff80' />
        </TouchableOpacity>
      </View>

      <Spacer medium />

      <View style={Styles.questionHolder} >
        { getCurrentQuestion() }
      </View>

      <Spacer large />

      <View style={Styles.rowElements} >
        <TouchableOpacity
          style={Styles.rowButton}
          onPress={() => answer(Answer.Yes)}
        >
          <Text style={Styles.buttonText} >
            { Language.Yes }
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.rowButton}
          onPress={() => answer(Answer.No)}
        >
          <Text style={Styles.buttonText} >
            { Language.No }
          </Text>
        </TouchableOpacity>
      </View>
    </Backdrop>
  )
}

export default Questions