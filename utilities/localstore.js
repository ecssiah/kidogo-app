import * as SecureStore from 'expo-secure-store'
import uuid from 'uuid'
import {
  CAREGIVER,
  GUARDIANS, CONTACTS, CHILDREN,
  PAYMENTS, ACCOUNTS, ATTENDANCE, FINANCES, QUESTIONS, EXPENSES,
} from '../constants/Store';
import { GetShortDate } from './dates';
import { Frequency, Gender } from '../constants/Enrollment';
import { SET_GUARDIAN } from '../constants/Guardians';
import { SET_CHILD } from '../constants/Children';
import { SET_CONTACT } from '../constants/Contacts';
import { SET_ATTENDANCE } from '../constants/Attendance';


export const LogTestData = async () => {
  const guardians = await Get(GUARDIANS)
  const contacts = await Get(CONTACTS)
  const children = await Get(CHILDREN)

  console.log(GUARDIANS, guardians)
  console.log(CONTACTS, contacts)
  console.log(CHILDREN, children)
}


export const LoadTestData = async (dispatch) => {
  const accountId1 = uuid()

  const guardian11 = {
    accountId: accountId1,
    id: uuid(),
    firstName: "Alan",
    lastName: "Smith",
    phone: "608-519-6875",
    govtId: "485-02-2764",
    address: "123 Shook Street",
    city: "San Francisco",
    rate: "120",
    frequency: Frequency.DAILY,
  }

  const guardian12 = {
    accountId: accountId1,
    id: uuid(),
    firstName: "Laura",
    lastName: "Tadow",
    phone: "621-675-1236",
    govtId: "321-45-6875",
    address: "345 Apple Street",
    city: "San Francisco",
    rate: "720",
    frequency: Frequency.WEEKLY,
  }

  const contact11 = {
    accountId: accountId1,
    id: uuid(),
    firstName: "Sam",
    lastName: "Sparro",
    phone: "435-678-1542",
  }

  const contact12 = {
    accountId: accountId1,
    id: uuid(),
    firstName: "Arch",
    lastName: "Rech",
    phone: "765-132-4568",
  }

  const child11 = {
    accountId: accountId1,
    id: uuid(),
    firstName: "Tristan",
    lastName: "Johnston",
    birthdate: "1-28-1983",
    gender: Gender.MALE,
    note: "This is a note about Tristan.",
  }

  const child12 = {
    accountId: accountId1,
    id: uuid(),
    firstName: "Darrin",
    lastName: "Snapton",
    birthdate: "6-12-1999",
    gender: Gender.OTHER,
    note: "This is a note about Darrin.",
  }

  await Create(GUARDIANS, guardian11.id, guardian11)
  await Create(GUARDIANS, guardian12.id, guardian12)
  await Create(CONTACTS, contact11.id, contact11)
  await Create(CONTACTS, contact12.id, contact12)
  await Create(CHILDREN, child11.id, child11)
  await Create(CHILDREN, child12.id, child12)

  dispatch({ type: SET_CHILD, id: child11.id, child: child11 })
  dispatch({ type: SET_CHILD, id: child12.id, child: child12 })
  dispatch({ type: SET_GUARDIAN, id: guardian11.id, guardian: guardian11 })
  dispatch({ type: SET_GUARDIAN, id: guardian12.id, guardian: guardian12 })
  dispatch({ type: SET_CONTACT, id: contact11.id, contact: contact11 })
  dispatch({ type: SET_CONTACT, id: contact12.id, contact: contact12 })

  const accountId2 = uuid()

  const guardian21 = {
    accountId: accountId2,
    id: uuid(),
    firstName: "Michael",
    lastName: "Chapman",
    phone: "608-120-6875",
    govtId: "675-02-2764",
    address: "3333 Harriet Street",
    city: "La Crosse",
    rate: "4200",
    frequency: Frequency.TERMLY,
  }

  const guardian22 = {
    accountId: accountId2,
    id: uuid(),
    firstName: "Masego",
    lastName: "Tadow",
    phone: "621-675-4555",
    govtId: "321-22-6875",
    address: "1 High Street",
    city: "Denver",
    rate: "86",
    frequency: Frequency.DAILY,
  }

  const contact21 = {
    accountId: accountId2,
    id: uuid(),
    firstName: "Graham",
    lastName: "Tiro",
    phone: "234-678-1111",
  }

  const contact22 = {
    accountId: accountId2,
    id: uuid(),
    firstName: "Trent",
    lastName: "Rocht",
    phone: "765-333-6655",
  }

  const child21 = {
    accountId: accountId2,
    id: uuid(),
    firstName: "Reselle",
    lastName: "Trepi",
    birthdate: "8-2-2001",
    gender: Gender.OTHER,
    note: "This is a note about Reselle.",
  }

  const child22 = {
    accountId: accountId2,
    id: uuid(),
    firstName: "Grey",
    lastName: "Mark",
    birthdate: "9-12-1994",
    gender: Gender.MALE,
    note: "This is a note about Grey.",
  }

  await Create(CHILDREN, child21.id, child21)
  await Create(CHILDREN, child22.id, child22)
  await Create(GUARDIANS, guardian21.id, guardian21)
  await Create(GUARDIANS, guardian22.id, guardian22)
  await Create(CONTACTS, contact21.id, contact21)
  await Create(CONTACTS, contact22.id, contact22)

  dispatch({ type: SET_CHILD, id: child21.id, child: child21 })
  dispatch({ type: SET_CHILD, id: child22.id, child: child22 })
  dispatch({ type: SET_GUARDIAN, id: guardian21.id, guardian: guardian21 })
  dispatch({ type: SET_GUARDIAN, id: guardian22.id, guardian: guardian22 })
  dispatch({ type: SET_CONTACT, id: contact21.id, contact: contact21 })
  dispatch({ type: SET_CONTACT, id: contact22.id, contact: contact22 })
}


const InitAttendance = async (dispatch, today) => {
  const attendanceIds = await GetIds(ATTENDANCE)
  const attendanceTodayId = attendanceIds.find((date) => date === today)

  if (attendanceTodayId === undefined) {
    const attendanceToday = {
      date: today,
      attendance: {},
    }

    const children = await Get(CHILDREN)

    children.forEach((childData) => {
      attendanceToday.attendance[childData.id] = {
        checkIn: true,
        checkOut: false,
      }
    })

    await Create(ATTENDANCE, today, attendanceToday)
  }
}


export const UpdateStore = async (dispatch) => {
  const attendance = await Get(ATTENDANCE, await GetIds(ATTENDANCE))
  const children = await Get(CHILDREN, await GetIds(CHILDREN))
  const guardians = await Get(GUARDIANS, await GetIds(GUARDIANS))
  const contacts = await Get(CONTACTS, await GetIds(CONTACTS))

  attendance.forEach((attendanceData) => {
    dispatch({
      type: SET_ATTENDANCE, id: attendanceData.date, attendance: attendanceData
    })
  })

  children.forEach((child) => {
    dispatch({
      type: SET_CHILD, id: child.id, child
    })
  })

  guardians.forEach((guardian) => {
    dispatch({
      type: SET_GUARDIAN, id: guardian.id, guardian
    })
  })

  contacts.forEach((contact) => {
    dispatch({
      type: SET_CONTACT, id: contact.id, contact
    })
  })
}


const InitFinance = async (dispatch, today) => {
  const financeIds = await GetIds(FINANCES)
  const financeTodayId = financeIds.find((date) => date === today)

  if (financeTodayId === undefined) {
    const financeToday = {
      date: today,
      income: 0,
      expenses: 0,
    }

    await Create(FINANCES, today, financeToday)
  }
}


const InitExpenses = async (dispatch, today) => {
  const expensesIds = await GetIds(EXPENSES)
  const expenseTodayId = expensesIds.find((date) => date === today)

  if (expenseTodayId === undefined) {
    const expensesToday = {
      date: today,
      expenses: [],
    }

    await Create(EXPENSES, today, expensesToday)
  }
}


export const InitDatabase = async (dispatch) => {
  const today = GetShortDate()

  InitAttendance(dispatch, today)
  InitFinance(dispatch, today)
  InitExpenses(dispatch, today)
}


export const SubmitAccount = async (account) => {
  const accountId = uuid()

  for (let [id, child] of Object.entries(account.children)) {
    await Create(CHILDREN, id, { accountId, ...child })

    const today = GetShortDate()

    const attendanceToday = Get(ATTENDANCE, today)
    attendanceToday[id] = { checkIn: true, checkOut: false }

    await Update(ATTENDANCE, today, attendanceToday)

    console.log(id, child)
  }

  for (let [id, guardian] of Object.entries(account.guardians)) {
    await Create(GUARDIANS, id, { accountId, ...guardian })

    console.log(id, guardian)
  }

  for (const [id, contact] of Object.entries(account.contacts)) {
    await Create(CONTACTS, id, { accountId, ...contact })

    console.log(id, contact)
  }
}


export const GetCaregiver = async () => {
  const caregiverResp = await SecureStore.getItemAsync(CAREGIVER)

  return caregiverResp === null ? {} : JSON.parse(caregiverResp)
}


export const CreateCaregiver = async (caregiverData) => {
  return await SecureStore.setItemAsync(
    CAREGIVER, JSON.stringify(caregiverData)
  )
}


export const GetIds = async (key) => {
  const idsResp = await SecureStore.getItemAsync(`${key}`)
  const ids = idsResp === null ? [] : JSON.parse(idsResp)

  return ids
}


export const Get = async (key, ids) => {
  if (typeof ids === "string") {
    const elementResp = await SecureStore.getItemAsync(`${key}_${ids}`)
    const element = JSON.parse(elementResp)

    return element
  } else {
    if (ids === undefined) {
      ids = await GetIds(key)
    }

    const elementPromises = ids.map(async (id) => {
      const elementResp = await SecureStore.getItemAsync(`${key}_${id}`)
      const element = JSON.parse(elementResp)

      return element
    })

    const elements = await Promise.all(elementPromises)

    return elements
  }
}


export const Create = async (key, id, data) => {
  const ids = await GetIds(key)

  await SecureStore.setItemAsync(
    `${key}`, JSON.stringify([id, ...ids])
  )

  const result = await SecureStore.setItemAsync(
    `${key}_${id}`, JSON.stringify(data)
  )

  return result
}


export const Update = async (key, id, data) => {
  const currentDataResp = await SecureStore.getItemAsync(`${key}_${id}`)
  const currentData = JSON.parse(currentDataResp)

  if (typeof currentData === "object") {
    const mergedData = Object.assign({}, currentData, data)

    const result = await SecureStore.setItemAsync(
      `${key}_${id}`, JSON.stringify(mergedData)
    )

    return result
  } else if (Array.isArray(data)) {
    const mergedData = currentData.concat(data)

    const result = await SecureStore.setItemAsync(
      `${key}_${id}`, JSON.stringify(mergedData)
    )

    return result
  } else {
    let dataString

    if (typeof data === "string") {
      dataString = data
    } else {
      dataString = JSON.stringify(dataString)
    }

    return await SecureStore.setItemAsync(`${key}_${id}`, dataString)
  }
}
