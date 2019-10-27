const App = {
  Dash: "Menu",
  SignIn: "Sign In",
  SignOut: "Sign Out",
  CheckIn: "Check In",
  CheckOut: "Check Out",
  Attendance: "Attendance",
  Finances: "Finances",
  DailyQuestions: "Daily Questions",
  Upload: "Upload",
}


const General = {
  Yes: "Yes",
  No: "No",
  True: "True",
  False: "False",
  And: "and",
  Or: "or",
}


const Keywords = {
  Add: "Add",
  New: "New",
  Edit: "Edit",
  Other: "Other",
  Submit: "Submit",
  Confirm: "Confirm",
  Cancel: "Cancel",
  Date: "Date",
  Username: "Username",
  Password: "Password",
  Next: "Next",
  Delete: "Delete",
  Resend: "Resend",
}


const Members = {
  Caregiver: "Caregiver",
  Child: "Child",
  Children: "Children",
  Guardian: "Guardian",
  Guardians: "Guardians",
  Contact: "Contact",
  Contacts: "Contacts",
  Family: "Family",
  Families: "Families",
}


const Relations = {
  Relationship: "Relationship",
  Mother: "Mother",
  Father: "Father",
  Sister: "Sister",
  Brother: "Brother",
  Aunt: "Aunt",
  Uncle: "Uncle",
  Grandmother: "Grandmother",
  Grandfather: "Grandfather",
}


const Attributes = {
  FirstName: "First Name",
  LastName: "Last Name",
  Gender: "Gender",
  Male: "Male",
  Female: "Female",
  Email: "Email",
  Birthday: "Birthday",
  Location: "Location",
  City: "City",
  Phone: "Phone",
  Notes: "Notes",
  Immunization: "Immunization",
  IdentificationNumber: "Identification Number",
}


const Finances = {
  Fee: "Fee",
  Rate: "Rate",
  Type: "Type",
  Amount: "Amount",
  Balance: "Balance",
  Frequency: "Frequency",
  Daily: "Daily",
  Weekly: "Weekly",
  Termly: "Termly",
  Rent: "Rent",
  Water: "Water",
  Food: "Food",
  Fuel: "Fuel",
  Electricity: "Electricity",
  Salary: "Salary",
  Equipment: "Equipment",
  WeekTotal: "Week Total",
  Payment: "Payment",
  Expense: "Expense",
  MPesa: "M-Pesa",
  Cash: "Cash",
  ThisAccountPays: "This account pays",
}


export default Other = {
  MorningGreeting: "Who's here today?",
  AfternoonGreeting: "Has anyone left?",
  EveningGreeting: "Did you buy anything today?",
  CodeMessage: `
    You will receive a text message with a 6-digit code.
    Please enter the code below:
  `,
}


export default English = {
  ...App,
  ...General,
  ...Keywords,
  ...Members,
  ...Relations,
  ...Attributes,
  ...Finances,
  ...Other,
}

