import * as SecureStore from 'expo-secure-store'
import {
  CAREGIVER,
  GUARDIANS, CONTACTS, CHILDREN,
  PAYMENTS, ACCOUNTS, ATTENDANCE, FINANCES, QUESTIONS,
} from '../constants/Store';

import uuid from 'uuid'
import { Frequency, Gender } from '../constants/Enrollment';
import { GetShortDate } from './dates';


export const LogTestData = async () => {
  const guardians = await Get(GUARDIANS)
  const contacts = await Get(CONTACTS)
  const children = await Get(CHILDREN)

  console.log(GUARDIANS, guardians)
  console.log(CONTACTS, contacts)
  console.log(CHILDREN, children)
}


export const LoadTestData = async () => {
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
    uri: null,
  }

  const child12 = {
    accountId: accountId1,
    id: uuid(),
    firstName: "Darrin",
    lastName: "Snapton",
    birthdate: "6-12-1999",
    gender: Gender.OTHER,
    note: "This is a note about Darrin.",
    uri: null,
  }

  await Create(GUARDIANS, guardian11.id, guardian11)
  await Create(GUARDIANS, guardian12.id, guardian12)
  await Create(CONTACTS, contact11.id, contact11)
  await Create(CONTACTS, contact12.id, contact12)
  await Create(CHILDREN, child11.id, child11)
  await Create(CHILDREN, child12.id, child12)

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
    uri: null,
  }

  const child22 = {
    accountId: accountId2,
    id: uuid(),
    firstName: "Grey",
    lastName: "Mark",
    birthdate: "9-12-1994",
    gender: Gender.MALE,
    note: "This is a note about Grey.",
    uri: null,
  }

  await Create(GUARDIANS, guardian21.id, guardian21)
  await Create(GUARDIANS, guardian22.id, guardian22)
  await Create(CONTACTS, contact21.id, contact21)
  await Create(CONTACTS, contact22.id, contact22)
  await Create(CHILDREN, child21.id, child21)
  await Create(CHILDREN, child22.id, child22)
}


export const InitDatabase = async () => {
  const today = GetShortDate()

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
