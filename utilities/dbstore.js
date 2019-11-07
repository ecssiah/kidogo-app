import { API, graphqlOperation } from "aws-amplify";
import {
  QueryGetTypes,
  QueryListTypes,
  MutationTypes,
  CAREGIVER,
} from "../constants/Store";
import { GetCaregiver } from "./localstore";


export const GetDB = async (type, id) => {
  return await API.graphql(
    graphqlOperation(
      QueryGetTypes[type], { id }
    )
  )
}


export const ListDB = async (type, filter, limit) => {
  return await API.graphql(
    graphqlOperation(
      QueryListTypes[type],
    )
  )
}


export const CreateDB = async (type, data) => {
  await API.graphql(
    graphqlOperation(
      MutationTypes[type], { input: { ...data } }
    )
  )
}


export const UpdateDB = async (type, update) => {
  await API.graphql(
    graphqlOperation(
      MutationTypes[type], { input: { ...update } }
    )
  )
}


export const UploadData = async (userData) => {
  const caregiver = await GetCaregiver()
  const caregivers = await ListDB(CAREGIVER)

  console.log("DB: ", caregivers)
  console.log(caregiver)
  console.log(userData)
}
