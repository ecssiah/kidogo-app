/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCaregiver = `query GetCaregiver($id: ID!) {
  getCaregiver(id: $id) {
    id
    username
    email
    password
    phone
    firstName
    lastName
    centreName
    location
    address
    city
  }
}
`;
export const listCaregivers = `query ListCaregivers(
  $filter: ModelCaregiverFilterInput
  $limit: Int
  $nextToken: String
) {
  listCaregivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      password
      phone
      firstName
      lastName
      centreName
      location
      address
      city
    }
    nextToken
  }
}
`;
