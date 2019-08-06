// eslint-disable
// this is an auto generated file. This will be overwritten

export const getCentre = `query GetCentre($id: ID!) {
  getCentre(id: $id) {
    id
    address1
    address2
    caregivers {
      items {
        id
        username
        email
        password
        phone
        first_name
        last_name
      }
      nextToken
    }
  }
}
`;
export const listCentres = `query ListCentres(
  $filter: ModelCentreFilterInput
  $limit: Int
  $nextToken: String
) {
  listCentres(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      address1
      address2
      caregivers {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getCaregiver = `query GetCaregiver($id: ID!) {
  getCaregiver(id: $id) {
    id
    username
    email
    password
    phone
    first_name
    last_name
    centre {
      id
      address1
      address2
      caregivers {
        nextToken
      }
    }
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
      first_name
      last_name
      centre {
        id
        address1
        address2
      }
    }
    nextToken
  }
}
`;
