
const WeekDays = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]

const Months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]


export const TOD = {
  Morning: "morning",
  Afternoon: "afternoon",
}



export const GetDateNoTime = (dateObj = new Date()) => {
  const tempDateObj = new Date(dateObj)
  tempDateObj.setHours(0, 0, 0, 0)

  return tempDateObj
}


export const NextDay = (dayIndex, week = 0, dateObj = new Date()) => {
  const newDateObj = new Date(dateObj)
  newDateObj.setDate(
    newDateObj.getDate() + (dayIndex + (7 - newDateObj.getDay())) % 7
  )
  newDateObj.setDate(newDateObj.getDate() + (7 * week))

  return newDateObj
}


export const GetShortDate = (offset = 0, dateObj = new Date()) => {
  if (!dateObj) {
    return ''
  }

  const tempDateObj = new Date(dateObj)
  tempDateObj.setDate(tempDateObj.getDate() + offset)

  const date = tempDateObj.getDate()
  const paddedDate = date < 10 ? '0' + date : date

  const month = tempDateObj.getMonth() + 1
  const paddedMonth = month < 10 ? '0' + month : month

  const result = `${paddedDate}-${paddedMonth}-${tempDateObj.getFullYear()}`

  return result
}


export const GetShortDateRange = (start = 0, end) => {
  return Array.from(
    { length: end - start },
    (_, id) => GetShortDate((id + 1) - (end - start))
  )
}


export const GetFullDate = (offset = 0, dateObj = new Date()) => {
  dateObj.setDate(dateObj.getDate() + offset)

  const weekday = WeekDays[dateObj.getDay()]
  const month = Months[dateObj.getMonth()]

  return `${weekday}, ${dateObj.getDate()} ${month}, ${dateObj.getFullYear()}`
}


export const GetTOD = () => {
  return new Date().getHours() < 15 ? TOD.Morning : TOD.Afternoon
}

