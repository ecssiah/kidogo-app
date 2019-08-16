import { API, graphqlOperation } from "aws-amplify";
import { createCaregiver } from "../src/graphql/mutations";

export const CreateCaregiverDB = async (caregiverData) => {
  const caregiverResp = await API.graphql(
    graphqlOperation(
      createCaregiver,
      { input: { ...caregiverData } }
    ),
  )

  console.log("DB - create: ", caregiverResp)
}