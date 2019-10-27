/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCaregiver = `subscription OnCreateCaregiver {
  onCreateCaregiver {
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
    accounts {
      items {
        id
        balance
        rate
        frequency
        lastFee
      }
      nextToken
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
    firstName
    lastName
    centreName
    location
    address
    city
    accounts {
      items {
        id
        balance
        rate
        frequency
        lastFee
      }
      nextToken
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
    firstName
    lastName
    centreName
    location
    address
    city
    accounts {
      items {
        id
        balance
        rate
        frequency
        lastFee
      }
      nextToken
    }
  }
}
`;
export const onCreateAccount = `subscription OnCreateAccount {
  onCreateAccount {
    id
    balance
    rate
    frequency
    lastFee
    caregiver {
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
      accounts {
        nextToken
      }
    }
    children {
      items {
        id
        firstName
        lastName
        birthdate
        gender
        note
      }
      nextToken
    }
    guardians {
      items {
        id
        firstName
        lastName
        phone
        govtId
        relation
        address
        city
      }
      nextToken
    }
    contacts {
      items {
        id
        firstName
        lastName
        phone
      }
      nextToken
    }
    attendance {
      items {
        date
        checkIn
        checkOut
      }
      nextToken
    }
    finances {
      items {
        date
        income
        expenses
      }
      nextToken
    }
    payments {
      items {
        date
        type
        amount
      }
      nextToken
    }
    expenses {
      items {
        date
        type
        amount
      }
      nextToken
    }
    questions {
      items {
        text
        response
      }
      nextToken
    }
  }
}
`;
export const onUpdateAccount = `subscription OnUpdateAccount {
  onUpdateAccount {
    id
    balance
    rate
    frequency
    lastFee
    caregiver {
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
      accounts {
        nextToken
      }
    }
    children {
      items {
        id
        firstName
        lastName
        birthdate
        gender
        note
      }
      nextToken
    }
    guardians {
      items {
        id
        firstName
        lastName
        phone
        govtId
        relation
        address
        city
      }
      nextToken
    }
    contacts {
      items {
        id
        firstName
        lastName
        phone
      }
      nextToken
    }
    attendance {
      items {
        date
        checkIn
        checkOut
      }
      nextToken
    }
    finances {
      items {
        date
        income
        expenses
      }
      nextToken
    }
    payments {
      items {
        date
        type
        amount
      }
      nextToken
    }
    expenses {
      items {
        date
        type
        amount
      }
      nextToken
    }
    questions {
      items {
        text
        response
      }
      nextToken
    }
  }
}
`;
export const onDeleteAccount = `subscription OnDeleteAccount {
  onDeleteAccount {
    id
    balance
    rate
    frequency
    lastFee
    caregiver {
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
      accounts {
        nextToken
      }
    }
    children {
      items {
        id
        firstName
        lastName
        birthdate
        gender
        note
      }
      nextToken
    }
    guardians {
      items {
        id
        firstName
        lastName
        phone
        govtId
        relation
        address
        city
      }
      nextToken
    }
    contacts {
      items {
        id
        firstName
        lastName
        phone
      }
      nextToken
    }
    attendance {
      items {
        date
        checkIn
        checkOut
      }
      nextToken
    }
    finances {
      items {
        date
        income
        expenses
      }
      nextToken
    }
    payments {
      items {
        date
        type
        amount
      }
      nextToken
    }
    expenses {
      items {
        date
        type
        amount
      }
      nextToken
    }
    questions {
      items {
        text
        response
      }
      nextToken
    }
  }
}
`;
export const onCreateChild = `subscription OnCreateChild {
  onCreateChild {
    id
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    firstName
    lastName
    birthdate
    gender
    note
  }
}
`;
export const onUpdateChild = `subscription OnUpdateChild {
  onUpdateChild {
    id
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    firstName
    lastName
    birthdate
    gender
    note
  }
}
`;
export const onDeleteChild = `subscription OnDeleteChild {
  onDeleteChild {
    id
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    firstName
    lastName
    birthdate
    gender
    note
  }
}
`;
export const onCreateGuardian = `subscription OnCreateGuardian {
  onCreateGuardian {
    id
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    firstName
    lastName
    phone
    govtId
    relation
    address
    city
  }
}
`;
export const onUpdateGuardian = `subscription OnUpdateGuardian {
  onUpdateGuardian {
    id
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    firstName
    lastName
    phone
    govtId
    relation
    address
    city
  }
}
`;
export const onDeleteGuardian = `subscription OnDeleteGuardian {
  onDeleteGuardian {
    id
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    firstName
    lastName
    phone
    govtId
    relation
    address
    city
  }
}
`;
export const onCreateContact = `subscription OnCreateContact {
  onCreateContact {
    id
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    firstName
    lastName
    phone
  }
}
`;
export const onUpdateContact = `subscription OnUpdateContact {
  onUpdateContact {
    id
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    firstName
    lastName
    phone
  }
}
`;
export const onDeleteContact = `subscription OnDeleteContact {
  onDeleteContact {
    id
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    firstName
    lastName
    phone
  }
}
`;
export const onCreateAttendance = `subscription OnCreateAttendance {
  onCreateAttendance {
    date
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    checkIn
    checkOut
  }
}
`;
export const onUpdateAttendance = `subscription OnUpdateAttendance {
  onUpdateAttendance {
    date
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    checkIn
    checkOut
  }
}
`;
export const onDeleteAttendance = `subscription OnDeleteAttendance {
  onDeleteAttendance {
    date
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    checkIn
    checkOut
  }
}
`;
export const onCreateFinances = `subscription OnCreateFinances {
  onCreateFinances {
    date
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    income
    expenses
  }
}
`;
export const onUpdateFinances = `subscription OnUpdateFinances {
  onUpdateFinances {
    date
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    income
    expenses
  }
}
`;
export const onDeleteFinances = `subscription OnDeleteFinances {
  onDeleteFinances {
    date
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    income
    expenses
  }
}
`;
export const onCreatePayment = `subscription OnCreatePayment {
  onCreatePayment {
    date
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    type
    amount
  }
}
`;
export const onUpdatePayment = `subscription OnUpdatePayment {
  onUpdatePayment {
    date
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    type
    amount
  }
}
`;
export const onDeletePayment = `subscription OnDeletePayment {
  onDeletePayment {
    date
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    type
    amount
  }
}
`;
export const onCreateExpense = `subscription OnCreateExpense {
  onCreateExpense {
    date
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    type
    amount
  }
}
`;
export const onUpdateExpense = `subscription OnUpdateExpense {
  onUpdateExpense {
    date
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    type
    amount
  }
}
`;
export const onDeleteExpense = `subscription OnDeleteExpense {
  onDeleteExpense {
    date
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    type
    amount
  }
}
`;
export const onCreateQuestion = `subscription OnCreateQuestion {
  onCreateQuestion {
    text
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    response
  }
}
`;
export const onUpdateQuestion = `subscription OnUpdateQuestion {
  onUpdateQuestion {
    text
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    response
  }
}
`;
export const onDeleteQuestion = `subscription OnDeleteQuestion {
  onDeleteQuestion {
    text
    account {
      id
      balance
      rate
      frequency
      lastFee
      caregiver {
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
      children {
        nextToken
      }
      guardians {
        nextToken
      }
      contacts {
        nextToken
      }
      attendance {
        nextToken
      }
      finances {
        nextToken
      }
      payments {
        nextToken
      }
      expenses {
        nextToken
      }
      questions {
        nextToken
      }
    }
    response
  }
}
`;
