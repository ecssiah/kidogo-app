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
      accounts {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getAccount = `query GetAccount($id: ID!) {
  getAccount(id: $id) {
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
export const listAccounts = `query ListAccounts(
  $filter: ModelAccountFilterInput
  $limit: Int
  $nextToken: String
) {
  listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getChild = `query GetChild($id: ID!) {
  getChild(id: $id) {
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
export const listChilds = `query ListChilds(
  $filter: ModelChildFilterInput
  $limit: Int
  $nextToken: String
) {
  listChilds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      account {
        id
        balance
        rate
        frequency
        lastFee
      }
      firstName
      lastName
      birthdate
      gender
      note
    }
    nextToken
  }
}
`;
export const getGuardian = `query GetGuardian($id: ID!) {
  getGuardian(id: $id) {
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
export const listGuardians = `query ListGuardians(
  $filter: ModelGuardianFilterInput
  $limit: Int
  $nextToken: String
) {
  listGuardians(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      account {
        id
        balance
        rate
        frequency
        lastFee
      }
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
}
`;
export const getContact = `query GetContact($id: ID!) {
  getContact(id: $id) {
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
export const listContacts = `query ListContacts(
  $filter: ModelContactFilterInput
  $limit: Int
  $nextToken: String
) {
  listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      account {
        id
        balance
        rate
        frequency
        lastFee
      }
      firstName
      lastName
      phone
    }
    nextToken
  }
}
`;
export const getAttendance = `query GetAttendance($id: ID!) {
  getAttendance(id: $id) {
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
export const listAttendances = `query ListAttendances(
  $filter: ModelAttendanceFilterInput
  $limit: Int
  $nextToken: String
) {
  listAttendances(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      date
      account {
        id
        balance
        rate
        frequency
        lastFee
      }
      checkIn
      checkOut
    }
    nextToken
  }
}
`;
export const getFinances = `query GetFinances($id: ID!) {
  getFinances(id: $id) {
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
export const listFinancess = `query ListFinancess(
  $filter: ModelFinancesFilterInput
  $limit: Int
  $nextToken: String
) {
  listFinancess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      date
      account {
        id
        balance
        rate
        frequency
        lastFee
      }
      income
      expenses
    }
    nextToken
  }
}
`;
export const getPayment = `query GetPayment($id: ID!) {
  getPayment(id: $id) {
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
export const listPayments = `query ListPayments(
  $filter: ModelPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      date
      account {
        id
        balance
        rate
        frequency
        lastFee
      }
      type
      amount
    }
    nextToken
  }
}
`;
export const getExpense = `query GetExpense($id: ID!) {
  getExpense(id: $id) {
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
export const listExpenses = `query ListExpenses(
  $filter: ModelExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      date
      account {
        id
        balance
        rate
        frequency
        lastFee
      }
      type
      amount
    }
    nextToken
  }
}
`;
export const getQuestion = `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
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
export const listQuestions = `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      text
      account {
        id
        balance
        rate
        frequency
        lastFee
      }
      response
    }
    nextToken
  }
}
`;
