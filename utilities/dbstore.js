import { API, graphqlOperation } from "aws-amplify";
import { createCaregiver } from "../src/graphql/mutations";
import { listCaregivers } from "../src/graphql/queries";

export const CreateCaregiverDB = async (caregiverData) => {
  await API.graphql(
    graphqlOperation(
      createCaregiver,
      { input: { ...caregiverData } }
    ),
  )
}


export const GetCaregiversDB = async () => {
  const caregiversResp = await API.graphql(
    graphqlOperation(
      listCaregivers
    )
  )

  return caregiversResp
}


export const UpdateDB = async (localData) => {


}