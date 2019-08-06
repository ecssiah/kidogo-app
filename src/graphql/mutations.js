// eslint-disable
// this is an auto generated file. This will be overwritten

export const createCentre = `mutation CreateCentre($input: CreateCentreInput!) {
  createCentre(input: $input) {
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
export const updateCentre = `mutation UpdateCentre($input: UpdateCentreInput!) {
  updateCentre(input: $input) {
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
export const deleteCentre = `mutation DeleteCentre($input: DeleteCentreInput!) {
  deleteCentre(input: $input) {
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
export const createCaregiver = `mutation CreateCaregiver($input: CreateCaregiverInput!) {
  createCaregiver(input: $input) {
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
export const updateCaregiver = `mutation UpdateCaregiver($input: UpdateCaregiverInput!) {
  updateCaregiver(input: $input) {
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
export const deleteCaregiver = `mutation DeleteCaregiver($input: DeleteCaregiverInput!) {
  deleteCaregiver(input: $input) {
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
