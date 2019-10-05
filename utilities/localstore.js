import * as SecureStore from 'expo-secure-store'
import uuid from 'uuid'
import {
  CAREGIVER,
  GUARDIANS, CONTACTS, CHILDREN,
  PAYMENTS, ACCOUNTS, ATTENDANCE, FINANCES, QUESTIONS, EXPENSES,
} from '../constants/Store';
import { GetShortDate } from './dates';
import { Gender, CLEAR_NEW_ACCOUNT } from '../constants/Enrollment';
import { SET_GUARDIAN } from '../constants/Guardians';
import { SET_CHILD } from '../constants/Children';
import { SET_CONTACT } from '../constants/Contacts';
import { SET_ATTENDANCE } from '../constants/Attendance';
import { SET_ACCOUNT } from '../constants/Account';
import {
  Frequency,
  SET_FINANCES, SET_PAYMENTS, SET_EXPENSES,
} from '../constants/Finances';


export const TestDataNeeded = async () => {
  const childrenIds = await GetIds(CHILDREN)
  return !childrenIds || !childrenIds.length
}


export const LoadTestData = async () => {
  const account1 = {
    id: uuid(),
    balance: 0,
    rate: 600,
    frequency: Frequency.Weekly,
    children: [],
    guardians: [],
    contacts: [],
  }

  const guardian11 = {
    accountId: account1.id,
    id: uuid(),
    firstName: "Alan",
    lastName: "Smith",
    phone: "608-519-6875",
    govtId: "485-02-2764",
    address: "123 Shook Street",
    city: "San Francisco",
  }

  const guardian12 = {
    accountId: account1.id,
    id: uuid(),
    firstName: "Laura",
    lastName: "Tadow",
    phone: "621-675-1236",
    govtId: "321-45-6875",
    address: "345 Apple Street",
    city: "San Francisco",
  }

  const contact11 = {
    accountId: account1.id,
    id: uuid(),
    firstName: "Sam",
    lastName: "Sparro",
    phone: "435-678-1542",
  }

  const contact12 = {
    accountId: account1.id,
    id: uuid(),
    firstName: "Arch",
    lastName: "Rech",
    phone: "765-132-4568",
  }

  const child11 = {
    accountId: account1.id,
    id: uuid(),
    firstName: "Tristan",
    lastName: "Johnston",
    birthdate: "1-28-1983",
    gender: Gender.Male,
    note: "This is a note about Tristan.",
  }

  const child12 = {
    accountId: account1.id,
    id: uuid(),
    firstName: "Darrin",
    lastName: "Snapton",
    birthdate: "6-12-1999",
    gender: Gender.Other,
    note: "This is a note about Darrin.",
  }

  account1.children.push(child11.id)
  account1.children.push(child12.id)
  account1.guardians.push(guardian11.id)
  account1.guardians.push(guardian12.id)
  account1.contacts.push(contact11.id)
  account1.contacts.push(contact12.id)

  await Create(ACCOUNTS, account1.id, account1)
  await Create(GUARDIANS, guardian11.id, guardian11)
  await Create(GUARDIANS, guardian12.id, guardian12)
  await Create(CONTACTS, contact11.id, contact11)
  await Create(CONTACTS, contact12.id, contact12)
  await Create(CHILDREN, child11.id, child11)
  await Create(CHILDREN, child12.id, child12)

  const account2 = {
    id: uuid(),
    balance: 0,
    rate: 100,
    frequency: Frequency.Daily,
    children: [],
    guardians: [],
    contacts: [],
  }

  const guardian21 = {
    accountId: account2.id,
    id: uuid(),
    firstName: "Michael",
    lastName: "Chapman",
    phone: "608-120-6875",
    govtId: "675-02-2764",
    address: "3333 Harriet Street",
    city: "La Crosse",
  }

  const guardian22 = {
    accountId: account2.id,
    id: uuid(),
    firstName: "Masego",
    lastName: "Tadow",
    phone: "621-675-4555",
    govtId: "321-22-6875",
    address: "1 High Street",
    city: "Denver",
  }

  const contact21 = {
    accountId: account2.id,
    id: uuid(),
    firstName: "Graham",
    lastName: "Tiro",
    phone: "234-678-1111",
  }

  const contact22 = {
    accountId: account2.id,
    id: uuid(),
    firstName: "Trent",
    lastName: "Rocht",
    phone: "765-333-6655",
  }

  const child21 = {
    accountId: account2.id,
    id: uuid(),
    firstName: "Reselle",
    lastName: "Trepi",
    birthdate: "8-2-2001",
    gender: Gender.Other,
    note: "This is a note about Reselle.",
  }

  const child22 = {
    accountId: account2.id,
    id: uuid(),
    firstName: "Grey",
    lastName: "Mark",
    birthdate: "9-12-1994",
    gender: Gender.Male,
    note: "This is a note about Grey.",
  }

  account2.children.push(child21.id)
  account2.children.push(child22.id)
  account2.guardians.push(guardian21.id)
  account2.guardians.push(guardian22.id)
  account2.contacts.push(contact21.id)
  account2.contacts.push(contact22.id)

  await Create(ACCOUNTS, account2.id, account2)
  await Create(CHILDREN, child21.id, child21)
  await Create(CHILDREN, child22.id, child22)
  await Create(GUARDIANS, guardian21.id, guardian21)
  await Create(GUARDIANS, guardian22.id, guardian22)
  await Create(CONTACTS, contact21.id, contact21)
  await Create(CONTACTS, contact22.id, contact22)
}


export const LogTestData = async () => {
  console.log(GUARDIANS, await Get(GUARDIANS))
  console.log(CONTACTS, await Get(CONTACTS))
  console.log(CHILDREN, await Get(CHILDREN))
}


export const UpdateStore = async (dispatch) => {
  for (const [id, account] of Object.entries(await Get(ACCOUNTS))) {
    dispatch({ type: SET_ACCOUNT, id, account })
  }

  for (const [id, child] of Object.entries(await Get(CHILDREN))) {
    dispatch({ type: SET_CHILD, id, child })
  }

  for (const [id, guardian] of Object.entries(await Get(GUARDIANS))) {
    dispatch({ type: SET_GUARDIAN, id, guardian })
  }

  for (const [id, contact] of Object.entries(await Get(CONTACTS))) {
    dispatch({ type: SET_CONTACT, id, contact })
  }

  for (const [date, attendance] of Object.entries(await Get(ATTENDANCE))) {
    dispatch({ type: SET_ATTENDANCE, id: date, attendance })
  }

  for (const [date, finances] of Object.entries(await Get(FINANCES))) {
    dispatch({ type: SET_FINANCES, id: date, finances })
  }

  for (const [date, payments] of Object.entries(await Get(PAYMENTS))) {
    dispatch({ type: SET_PAYMENTS, id: date, payments })
  }

  for (const [date, expenses] of Object.entries(await Get(EXPENSES))) {
    dispatch({ type: SET_EXPENSES, id: date, expenses })
  }
}


const InitAttendance = async (today) => {
  const attendanceIds = await GetIds(ATTENDANCE)
  const attendanceTodayId = attendanceIds.find((date) => date === today)

  if (attendanceTodayId === undefined) {
    const attendanceToday = {}
    const children = await Get(CHILDREN)

    children.forEach((childData) => {
      attendanceToday[childData.id] = {
        checkIn: true,
        checkOut: false,
      }
    })

    await Create(ATTENDANCE, today, attendanceToday)
  }
}


const InitFinances = async (today) => {
  const financesIds = await GetIds(FINANCES)
  const financesTodayId = financesIds.find((date) => date === today)

  if (financesTodayId === undefined) {
    const financesToday = {
      income: 0,
      expenses: 0,
    }

    await Create(FINANCES, today, financesToday)
  }
}


const InitExpenses = async (today) => {
  const expensesIds = await GetIds(EXPENSES)
  const expenseTodayId = expensesIds.find((date) => date === today)

  if (expenseTodayId === undefined) {
    await Create(EXPENSES, today, {})
  }
}


const InitPayments = async (today) => {
  const paymentsIds = await GetIds(PAYMENTS)
  const paymentTodayId = paymentsIds.find((date) => date === today)

  if (paymentTodayId === undefined) {
    await Create(PAYMENTS, today, {})
  }
}


export const InitDatabase = async () => {
  const today = GetShortDate()

  InitAttendance(today)
  InitFinances(today)
  InitPayments(today)
  InitExpenses(today)
}


export const SubmitAccount = async (dispatch, newAccount) => {
  const accountId = uuid()

  const accountData = {
    id: accountId,
    balance: 0,
    rate: newAccount.rate,
    frequency: newAccount.frequency,
    children: [],
    guardians: [],
    contacts: [],
  }


  for (const [id, child] of Object.entries(newAccount.children)) {
    accountData.children.push(id)

    await Create(CHILDREN, id, { accountId, ...child })

    const today = GetShortDate()
    const attendanceToday = await Get(ATTENDANCE, today)
    attendanceToday[id] = { checkIn: true, checkOut: false }

    await Update(ATTENDANCE, today, attendanceToday)

    dispatch({ type: SET_ATTENDANCE, id: today, attendance: attendanceToday })
  }

  for (const [id, guardian] of Object.entries(newAccount.guardians)) {
    accountData.guardians.push(id)

    await Create(GUARDIANS, id, { accountId, ...guardian })
  }

  for (const [id, contact] of Object.entries(newAccount.contacts)) {
    accountData.contacts.push(id)

    await Create(CONTACTS, id, { accountId, ...contact })
  }

  await Create(ACCOUNTS, accountId, accountData)

  dispatch({ type: SET_ACCOUNT, id: accountId, account: accountData })
  dispatch({ type: CLEAR_NEW_ACCOUNT })
}


export const UpdateFees = async () => {

}


export const GetCaregiver = async () => {
  const caregiverResp = await SecureStore.getItemAsync(CAREGIVER)
  return caregiverResp === null ? {} : JSON.parse(caregiverResp)
}


export const CreateCaregiver = async (caregiverData) => {
  await SecureStore.setItemAsync(CAREGIVER, JSON.stringify(caregiverData))
}


export const GetIds = async (key) => {
  const idsResp = await SecureStore.getItemAsync(key)
  const ids = idsResp === null ? [] : JSON.parse(idsResp)

  return ids
}


export const Get = async (key, ids) => {
  if (typeof ids === "string") {
    const elementResp = await SecureStore.getItemAsync(`${key}_${ids}`)
    const element = JSON.parse(elementResp)

    // return element

    return { [ids]: element }
  } else {
    if (ids === undefined) {
      ids = await GetIds(key)
    }

    // const elementPromises = ids.map(async (id) => {
    //   const elementResp = await SecureStore.getItemAsync(`${key}_${id}`)
    //   const element = JSON.parse(elementResp)

    //   return element
    // })

    const elementPromises = ids.reduce(async (acc, id) => {
      const elementResp = await SecureStore.getItemAsync(`${key}_${id}`)
      acc[id] = JSON.parse(elementResp)

      return acc
    }, {})

    const elements = await Promise.all(elementPromises)

    return elements
  }
}


export const Create = async (key, id, data) => {
  const ids = await GetIds(key)
  await SecureStore.setItemAsync(key, JSON.stringify([...ids, id]))
  await SecureStore.setItemAsync(`${key}_${id}`, JSON.stringify(data))
}


export const Update = async (key, id, data) => {
  const currentDataResp = await SecureStore.getItemAsync(`${key}_${id}`)
  const currentData = JSON.parse(currentDataResp)

  if (typeof currentData === "object") {
    const mergedData = Object.assign({}, currentData, data)
    await SecureStore.setItemAsync(`${key}_${id}`, JSON.stringify(mergedData))
  } else if (Array.isArray(data)) {
    const mergedData = currentData.concat(data)
    await SecureStore.setItemAsync(`${key}_${id}`, JSON.stringify(mergedData))
  } else {
    const dataStr = typeof data === "string" ? data : JSON.stringify(dataStr)
    await SecureStore.setItemAsync(`${key}_${id}`, dataString)
  }
}


export const Delete = async (key, id) => {
  const ids = await GetIds(key)
  const newIds = ids.filter((curId) => curId !== id)

  await SecureStore.setItemAsync(key, JSON.stringify(newIds))
  await SecureStore.deleteItemAsync(`${key}_${id}`)
}
