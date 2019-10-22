import * as SecureStore from 'expo-secure-store'
import uuid from 'uuid'
import {
  CAREGIVER,
  GUARDIANS, CONTACTS, CHILDREN,
  PAYMENTS, ACCOUNTS, ATTENDANCE, FINANCES, QUESTIONS, EXPENSES,
} from '../constants/Store';
import { GetShortDate, GetDateNoTime } from './dates';
import { Gender, CLEAR_NEW_ACCOUNT } from '../constants/Enrollment';
import { SET_GUARDIAN } from '../constants/Guardians';
import { SET_CHILD } from '../constants/Children';
import { SET_CONTACT } from '../constants/Contacts';
import { SET_ATTENDANCE } from '../constants/Attendance';
import { SET_ACCOUNT, UPDATE_ACCOUNT } from '../constants/Accounts';
import {
  Frequency,
  SET_FINANCES, SET_PAYMENTS, SET_EXPENSES, FeeDelta,
} from '../constants/Finances';
import { SET_QUESTIONS } from '../constants/Questions';


export const TestDataNeeded = async () => {
  const accountIds = await GetIds(ACCOUNTS)
  return !accountIds || !accountIds.length
}


export const LoadTestData = async () => {
  const account1 = {
    balance: 0,
    rate: 600,
    frequency: Frequency.Weekly,
    lastFee: GetDateNoTime(),
    children: [],
    guardians: [],
    contacts: [],
  }

  const account1Id = uuid()

  const child11Id = uuid()
  const child12Id = uuid()
  const guardian11Id = uuid()
  const guardian12Id = uuid()
  const contact11Id = uuid()
  const contact12Id = uuid()

  account1.children.push(child11Id)
  account1.children.push(child12Id)
  account1.guardians.push(guardian11Id)
  account1.guardians.push(guardian12Id)
  account1.contacts.push(contact11Id)
  account1.contacts.push(contact12Id)

  const child11 = {
    accountId: account1Id,
    firstName: "Tristan",
    lastName: "Johnston",
    birthdate: new Date(1983, 0, 28),
    gender: Gender.Male,
    note: "This is a note about Tristan.",
  }

  const child12 = {
    accountId: account1Id,
    firstName: "Darrin",
    lastName: "Snapton",
    birthdate: new Date(1992, 4, 12),
    gender: Gender.Other,
    note: "This is a note about Darrin.",
  }

  const guardian11 = {
    accountId: account1Id,
    firstName: "Alan",
    lastName: "Smith",
    phone: "608-519-6875",
    govtId: "485-02-2764",
    address: "123 Shook Street",
    city: "San Francisco",
  }

  const guardian12 = {
    accountId: account1Id,
    firstName: "Laura",
    lastName: "Tadow",
    phone: "621-675-1236",
    govtId: "321-45-6875",
    address: "345 Apple Street",
    city: "San Francisco",
  }

  const contact11 = {
    accountId: account1Id,
    firstName: "Sam",
    lastName: "Sparro",
    phone: "435-678-1542",
  }

  const contact12 = {
    accountId: account1Id,
    firstName: "Arch",
    lastName: "Rech",
    phone: "765-132-4568",
  }

  await Create(ACCOUNTS, account1Id, account1)

  await Create(CHILDREN, child11Id, child11)
  await Create(CHILDREN, child12Id, child12)
  await Create(GUARDIANS, guardian11Id, guardian11)
  await Create(GUARDIANS, guardian12Id, guardian12)
  await Create(CONTACTS, contact11Id, contact11)
  await Create(CONTACTS, contact12Id, contact12)

  const account2Id = uuid()

  const child21Id = uuid()
  const child22Id = uuid()
  const guardian21Id = uuid()
  const guardian22Id = uuid()
  const contact21Id = uuid()
  const contact22Id = uuid()

  const account2 = {
    balance: 0,
    rate: 100,
    frequency: Frequency.Daily,
    lastFee: GetDateNoTime(),
    children: [],
    guardians: [],
    contacts: [],
  }

  account2.children.push(child21Id)
  account2.children.push(child22Id)
  account2.guardians.push(guardian21Id)
  account2.guardians.push(guardian22Id)
  account2.contacts.push(contact21Id)
  account2.contacts.push(contact22Id)

  const guardian21 = {
    accountId: account2Id,
    firstName: "Michael",
    lastName: "Chapman",
    phone: "608-120-6875",
    govtId: "675-02-2764",
    address: "3333 Harriet Street",
    city: "La Crosse",
  }

  const guardian22 = {
    accountId: account2Id,
    firstName: "Masego",
    lastName: "Tadow",
    phone: "621-675-4555",
    govtId: "321-22-6875",
    address: "1 High Street",
    city: "Denver",
  }

  const contact21 = {
    accountId: account2Id,
    firstName: "Graham",
    lastName: "Tiro",
    phone: "234-678-1111",
  }

  const contact22 = {
    accountId: account2Id,
    firstName: "Trent",
    lastName: "Rocht",
    phone: "765-333-6655",
  }

  const child21 = {
    accountId: account2Id,
    firstName: "Reselle",
    lastName: "Trepi",
    birthdate: new Date(1993, 6, 8),
    gender: Gender.Other,
    note: "This is a note about Reselle.",
  }

  const child22 = {
    accountId: account2Id,
    firstName: "Grey",
    lastName: "Mark",
    birthdate: new Date(1989, 4, 18),
    gender: Gender.Male,
    note: "This is a note about Grey.",
  }

  await Create(ACCOUNTS, account2Id, account2)

  await Create(CHILDREN, child21Id, child21)
  await Create(CHILDREN, child22Id, child22)
  await Create(GUARDIANS, guardian21Id, guardian21)
  await Create(GUARDIANS, guardian22Id, guardian22)
  await Create(CONTACTS, contact21Id, contact21)
  await Create(CONTACTS, contact22Id, contact22)
}


export const LogTestData = async () => {
  console.log("=---------------------------=")
  console.log(ACCOUNTS, await Get(ACCOUNTS))
  console.log(GUARDIANS, await Get(GUARDIANS))
  console.log(CONTACTS, await Get(CONTACTS))
  console.log(CHILDREN, await Get(CHILDREN))
  console.log(ATTENDANCE, await Get(ATTENDANCE))
  console.log(FINANCES, await Get(FINANCES))
  console.log(PAYMENTS, await Get(PAYMENTS))
  console.log(EXPENSES, await Get(EXPENSES))
  console.log(QUESTIONS, await Get(QUESTIONS))
  console.log("=---------------------------=")
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

  for (const [id, attendance] of Object.entries(await Get(ATTENDANCE))) {
    dispatch({ type: SET_ATTENDANCE, id, attendance })
  }

  for (const [id, finances] of Object.entries(await Get(FINANCES))) {
    dispatch({ type: SET_FINANCES, id, finances })
  }

  for (const [id, payments] of Object.entries(await Get(PAYMENTS))) {
    dispatch({ type: SET_PAYMENTS, id, payments })
  }

  for (const [id, expenses] of Object.entries(await Get(EXPENSES))) {
    dispatch({ type: SET_EXPENSES, id, expenses })
  }
}


export const InitAttendance = async (dispatch, targetDate) => {
  const attendanceDates = await GetIds(ATTENDANCE)

  if (!attendanceDates.find((date) => date === targetDate)) {
    const children = await Get(CHILDREN)

    const attendanceToday = Object.keys(children).reduce((res, id) => {
      res[id] = { checkIn: true, checkOut: false }
      return res
    }, {})

    dispatch({
      type: SET_ATTENDANCE, id: targetDate, attendance: attendanceToday
    })
    await Create(ATTENDANCE, targetDate, attendanceToday)
  }
}


export const InitFinances = async (dispatch, targetDate) => {
  const financesDates = await GetIds(FINANCES)

  if (!financesDates.find((date) => date === targetDate)) {
    const financesToday = {
      income: 0,
      expenses: 0,
    }

    dispatch({ type: SET_FINANCES, id: targetDate, finances: financesToday })
    await Create(FINANCES, targetDate, financesToday)
  }
}


export const InitExpenses = async (dispatch, targetDate) => {
  const expensesDates = await GetIds(EXPENSES)

  if (!expensesDates.find((date) => date === targetDate)) {
    dispatch({ type: SET_EXPENSES, id: targetDate, expenses: {} })
    await Create(EXPENSES, targetDate, {})
  }
}


export const InitPayments = async (dispatch, targetDate) => {
  const paymentsDates = await GetIds(PAYMENTS)

  if (!paymentsDates.find((date) => date === targetDate)) {
    dispatch({ type: SET_PAYMENTS, id: targetDate, payments: {} })
    await Create(PAYMENTS, targetDate, {})
  }
}


export const InitQuestions = async (dispatch, targetDate) => {
  const questionsDates = await GetIds(QUESTIONS)

  if (!questionsDates.find((date) => date === targetDate)) {
    dispatch({ type: SET_QUESTIONS, id: targetDate, questions: {} })
    await Create(QUESTIONS, targetDate, {})
  }
}


export const InitDatabase = async (dispatch) => {
  const today = GetShortDate()

  InitAttendance(dispatch, today)
  InitFinances(dispatch, today)
  InitPayments(dispatch, today)
  InitExpenses(dispatch, today)
  InitQuestions(dispatch, today)
}


export const SubmitAccount = async (dispatch, newAccount) => {
  const accountId = uuid()

  const accountData = {
    balance: 0,
    rate: newAccount.rate,
    frequency: newAccount.frequency,
    lastFee: GetDateNoTime(),
    children: [],
    guardians: [],
    contacts: [],
  }


  for (const [id, child] of Object.entries(newAccount.children)) {
    accountData.children.push(id)

    dispatch({ type: SET_CHILD, id, child })
    await Create(CHILDREN, id, { accountId, ...child })

    const today = GetShortDate()
    const attendanceToday = await Get(ATTENDANCE, today)
    attendanceToday[id] = { checkIn: true, checkOut: false }

    dispatch({ type: SET_ATTENDANCE, id: today, attendance: attendanceToday })
    await Update(ATTENDANCE, today, attendanceToday)
  }

  for (const [id, guardian] of Object.entries(newAccount.guardians)) {
    accountData.guardians.push(id)
    dispatch({ type: SET_GUARDIAN, id, guardian })
    await Create(GUARDIANS, id, { accountId, ...guardian })
  }

  for (const [id, contact] of Object.entries(newAccount.contacts)) {
    accountData.contacts.push(id)
    dispatch({ type: SET_CONTACT, id, contact })
    await Create(CONTACTS, id, { accountId, ...contact })
  }

  dispatch({ type: CLEAR_NEW_ACCOUNT })
  dispatch({ type: SET_ACCOUNT, id: accountId, account: accountData })
  await Create(ACCOUNTS, accountId, accountData)
}


export const UpdateFees = async (dispatch) => {
  const accounts = await Get(ACCOUNTS)

  for (const [id, account] of Object.entries(accounts)) {
    const curDate = GetDateNoTime(new Date())
    const update = {
      balance: account.balance,
      lastFee: account.lastFee,
    }

    const nextDateToApplyFee = new Date(account.lastFee)
    nextDateToApplyFee.setDate(
      nextDateToApplyFee.getDate() + FeeDelta[account.frequency]
    )

    while (GetDateNoTime(nextDateToApplyFee) < curDate) {
      update.balance -= account.rate
      nextDateToApplyFee.setDate(
        nextDateToApplyFee.getDate() + FeeDelta[account.frequency]
      )
    }

    dispatch({ type: UPDATE_ACCOUNT, id, update })
    await Update(ACCOUNTS, id, update)
  }
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
    return JSON.parse(await SecureStore.getItemAsync(`${key}_${ids}`))
  } else {
    if (ids === undefined) {
      ids = await GetIds(key)
    }

    const elements = {}

    for (const id of ids) {
      elements[id] = JSON.parse(await SecureStore.getItemAsync(`${key}_${id}`))
    }

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
