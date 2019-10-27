/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCaregiver = `mutation CreateCaregiver($input: CreateCaregiverInput!) {
  createCaregiver(input: $input) {
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
export const updateCaregiver = `mutation UpdateCaregiver($input: UpdateCaregiverInput!) {
  updateCaregiver(input: $input) {
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
export const deleteCaregiver = `mutation DeleteCaregiver($input: DeleteCaregiverInput!) {
  deleteCaregiver(input: $input) {
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
export const createAccount = `mutation CreateAccount($input: CreateAccountInput!) {
  createAccount(input: $input) {
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
export const updateAccount = `mutation UpdateAccount($input: UpdateAccountInput!) {
  updateAccount(input: $input) {
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
export const deleteAccount = `mutation DeleteAccount($input: DeleteAccountInput!) {
  deleteAccount(input: $input) {
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
export const createChild = `mutation CreateChild($input: CreateChildInput!) {
  createChild(input: $input) {
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
export const updateChild = `mutation UpdateChild($input: UpdateChildInput!) {
  updateChild(input: $input) {
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
export const deleteChild = `mutation DeleteChild($input: DeleteChildInput!) {
  deleteChild(input: $input) {
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
export const createGuardian = `mutation CreateGuardian($input: CreateGuardianInput!) {
  createGuardian(input: $input) {
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
export const updateGuardian = `mutation UpdateGuardian($input: UpdateGuardianInput!) {
  updateGuardian(input: $input) {
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
export const deleteGuardian = `mutation DeleteGuardian($input: DeleteGuardianInput!) {
  deleteGuardian(input: $input) {
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
export const createContact = `mutation CreateContact($input: CreateContactInput!) {
  createContact(input: $input) {
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
export const updateContact = `mutation UpdateContact($input: UpdateContactInput!) {
  updateContact(input: $input) {
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
export const deleteContact = `mutation DeleteContact($input: DeleteContactInput!) {
  deleteContact(input: $input) {
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
export const createAttendance = `mutation CreateAttendance($input: CreateAttendanceInput!) {
  createAttendance(input: $input) {
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
export const updateAttendance = `mutation UpdateAttendance($input: UpdateAttendanceInput!) {
  updateAttendance(input: $input) {
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
export const deleteAttendance = `mutation DeleteAttendance($input: DeleteAttendanceInput!) {
  deleteAttendance(input: $input) {
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
export const createFinances = `mutation CreateFinances($input: CreateFinancesInput!) {
  createFinances(input: $input) {
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
export const updateFinances = `mutation UpdateFinances($input: UpdateFinancesInput!) {
  updateFinances(input: $input) {
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
export const deleteFinances = `mutation DeleteFinances($input: DeleteFinancesInput!) {
  deleteFinances(input: $input) {
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
export const createPayment = `mutation CreatePayment($input: CreatePaymentInput!) {
  createPayment(input: $input) {
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
export const updatePayment = `mutation UpdatePayment($input: UpdatePaymentInput!) {
  updatePayment(input: $input) {
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
export const deletePayment = `mutation DeletePayment($input: DeletePaymentInput!) {
  deletePayment(input: $input) {
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
export const createExpense = `mutation CreateExpense($input: CreateExpenseInput!) {
  createExpense(input: $input) {
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
export const updateExpense = `mutation UpdateExpense($input: UpdateExpenseInput!) {
  updateExpense(input: $input) {
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
export const deleteExpense = `mutation DeleteExpense($input: DeleteExpenseInput!) {
  deleteExpense(input: $input) {
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
export const createQuestion = `mutation CreateQuestion($input: CreateQuestionInput!) {
  createQuestion(input: $input) {
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
export const updateQuestion = `mutation UpdateQuestion($input: UpdateQuestionInput!) {
  updateQuestion(input: $input) {
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
export const deleteQuestion = `mutation DeleteQuestion($input: DeleteQuestionInput!) {
  deleteQuestion(input: $input) {
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
