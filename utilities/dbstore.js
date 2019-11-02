import { API, graphqlOperation } from "aws-amplify";
import {
  QueryGetTypes,
  QueryListTypes,
  MutationTypes,
} from "../constants/Store";


export const GetDB = async (type, id) => {
  await API.graphql(graphqlOperation(QueryGetTypes[type], { id }))
}


export const ListDB = async (type) => {
  await API.graphql(graphqlOperation(QueryListTypes[type]))
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
  console.log(userData)
}
