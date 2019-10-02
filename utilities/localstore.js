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
  const children = await Get(CHILDREN, await GetIds(CHILDREN))

  for (const childData of Object.values(children)) {
    const firstNameMatch = childData.firstName === 'Tristan'
    const lastNameMatch = childData.lastName === 'Johnston'

    if (firstNameMatch && lastNameMatch) {
      return false
    }
  }

  return true
}


export const LogTestData = async () => {
  const guardians = await Get(GUARDIANS)
  const contacts = await Get(CONTACTS)
  const children = await Get(CHILDREN)

  console.log(GUARDIANS, guardians)
  console.log(CONTACTS, contacts)
  console.log(CHILDREN, children)
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


export const UpdateStore = async (dispatch) => {
  const accounts = await Get(ACCOUNTS, await GetIds(ACCOUNTS))
  const children = await Get(CHILDREN, await GetIds(CHILDREN))
  const guardians = await Get(GUARDIANS, await GetIds(GUARDIANS))
  const contacts = await Get(CONTACTS, await GetIds(CONTACTS))

  const attendance = await Get(ATTENDANCE, await GetIds(ATTENDANCE))
  const finances = await Get(FINANCES, await GetIds(FINANCES))
  const payments = await Get(PAYMENTS, await GetIds(PAYMENTS))
  const expenses = await Get(EXPENSES, await GetIds(EXPENSES))

  accounts.forEach((accountData) => {
    dispatch({
      type: SET_ACCOUNT, id: accountData.id, account: accountData
    })
  })

  children.forEach((childData) => {
    dispatch({
      type: SET_CHILD, id: childData.id, child: childData
    })
  })

  guardians.forEach((guardianData) => {
    dispatch({
      type: SET_GUARDIAN, id: guardianData.id, guardian: guardianData
    })
  })

  contacts.forEach((contactData) => {
    dispatch({
      type: SET_CONTACT, id: contactData.id, contact: contactData
    })
  })

  attendance.forEach((attendanceData) => {
    dispatch({
      type: SET_ATTENDANCE, id: attendanceData.date, attendance: attendanceData
    })
  })

  finances.forEach((financesData) => {
    dispatch({
      type: SET_FINANCES, id: financesData.date, finances: financesData
    })
  })

  payments.forEach((paymentsData) => {
    dispatch({
      type: SET_PAYMENTS, id: paymentsData.date, payments: paymentsData
    })
  })

  expenses.forEach((expensesData) => {
    dispatch({
      type: SET_EXPENSES, id: expensesData.date, expenses: expensesData
    })
  })

}


const InitAttendance = async (today) => {
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


const InitFinances = async (today) => {
  const financesIds = await GetIds(FINANCES)
  const financesTodayId = financesIds.find((date) => date === today)

  if (financesTodayId === undefined) {
    const financesToday = {
      date: today,
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
    const expensesToday = {
      date: today,
      expenses: [],
    }

    await Create(EXPENSES, today, expensesToday)
  }
}


const InitPayments = async (today) => {
  const paymentsIds = await GetIds(PAYMENTS)
  const paymentTodayId = paymentsIds.find((date) => date === today)

  if (paymentTodayId === undefined) {
    const paymentsToday = {
      date: today,
      payments: [],
    }

    await Create(PAYMENTS, today, paymentsToday)
  }
}


export const InitDatabase = async () => {
  const today = GetShortDate()

  InitAttendance(today)
  InitFinances(today)
  InitPayments(today)
  InitExpenses(today)
}


export const SubmitAccount = async (dispatch, account) => {
  const accountId = uuid()

  const accountData = {
    id: accountId,
    balance: 0,
    rate: account.rate,
    frequency: account.frequency,
    children: [],
    guardians: [],
    contacts: [],
  }


  for (const [id, child] of Object.entries(account.children)) {
    accountData.children.push(id)

    await Create(CHILDREN, id, { accountId, ...child })

    const today = GetShortDate()
    const attendanceToday = Get(ATTENDANCE, today)
    attendanceToday[id] = { checkIn: true, checkOut: false }

    await Update(ATTENDANCE, today, attendanceToday)

    dispatch({ type: SET_ATTENDANCE, id: today, attendance: attendanceToday })
  }

  for (const [id, guardian] of Object.entries(account.guardians)) {
    accountData.guardians.push(id)

    await Create(GUARDIANS, id, { accountId, ...guardian })
  }

  for (const [id, contact] of Object.entries(account.contacts)) {
    accountData.contacts.push(id)

    await Create(CONTACTS, id, { accountId, ...contact })
  }

  await Create(ACCOUNTS, accountId, accountData)

  dispatch({ type: SET_ACCOUNT, id: accountId, account: accountData })
  dispatch({ type: CLEAR_NEW_ACCOUNT })
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
