// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateCentre = `subscription OnCreateCentre {
  onCreateCentre {
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
export const onUpdateCentre = `subscription OnUpdateCentre {
  onUpdateCentre {
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
export const onDeleteCentre = `subscription OnDeleteCentre {
  onDeleteCentre {
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
export const onCreateCaregiver = `subscription OnCreateCaregiver {
  onCreateCaregiver {
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
export const onUpdateCaregiver = `subscription OnUpdateCaregiver {
  onUpdateCaregiver {
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
export const onDeleteCaregiver = `subscription OnDeleteCaregiver {
  onDeleteCaregiver {
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
