const App = {
  Dash: "Menyu",
  Upload: "Pakia",
  CheckIn: "Ingia",
  CheckOut: "Angalia",
  Attendance: "Mahudhurio",
  Finances: "Fedha",
  SignIn: "Weka Sahihi",
  SignOut: "Toka",
  DailyQuestions: "Maswali ya Kila siku",
}


const General = {
  Yes: "Ndio",
  No: "Hapana",
  True: "Kweli",
  False: "Uongo",
  Male: "Mwanaume",
  Female: "Kike",
  Gender: "Jinsia",
  And: "na",
  Or: "au",
}


const Keywords = {
  Add: "Ongeza",
  Submit: "Peana",
  Date: "Tarehe",
  Next: "Ifuatayo",
  Delete: "Futa",
  New: "Mpya",
  Edit: "Hariri",
  Other: "Nyingine",
  Confirm: "Thibitisha",
  Cancel: "Ghairi",
  Resend: "Tuma tena",
  Username: "Jina la Mtumiaji",
  Password: "Nywila",
}


const Members = {
  Caregiver: "Mlezi",
  Child: "Mtoto",
  Children: "Watoto",
  Guardian: "Mlezi",
  Guardians: "Walezi",
  Contact: "Wasiliana",
  Contacts: "Mawasiliano",
  Families: "Familia",
}


const Relations = {
  Relationship: "Urafiki",
  Mother: "Mama",
  Father: "Baba",
  Sister: "Dada",
  Brother: "Ndugu",
  Aunt: "Shangazi",
  Uncle: "Mjomba",
  Grandmother: "Bibi",
  Grandfather: "Babu",
}


const Attributes = {
  FirstName: "Jina ya Kwanza",
  LastName: "Ama Familia",
  Email: "Barua Pepe",
  Birthday: "Siku ya Kuzaliwa",
  Location: "Mahali",
  City: "Mji",
  Phone: "Simu",
  Notes: "Vidokezo",
  Immunization: "Chanjo",
  IdentificationNumber: "Nambari ya Kitambulisho",
}


const Finances = {
  Fee: "Ada",
  Balance: "Usawa",
  Type: "Chapa",
  Amount: "Kiasi",
  Rate: "Kiwango",
  Frequency: "Mara ngapi",
  Daily: "Kila Siku",
  Weekly: "Kila Wiki",
  Termly: "Kila Muhula",
  Rent: "Kodi ya Nyumba",
  Water: "Maji",
  Food: "Chakula",
  Fuel: "Mafuta anayotumia",
  Electricity: "Umeme",
  Salary: "Mushahara",
  Equipment: "Vifaa",
  Payment: "Malipo",
  Expense: "Gharama",
  MPesa: "M-Pesa",
  Cash: "Cash",
  WeekTotal: "Jumla ya Wiki",
  ThisAccountPays: "Akaunti hii inalipa",
}


const Other = {
  MorningGreeting: "Nani hako Leo?",
  AfternoonGreeting: "Kuna aliyetoka?",
  EveningGreeting: "Uli nunua kitu chochote leo?",
  CodeMessage: `
    Utapokea ujumbe wa maandishi na nambari ya nambari 6.
    Tafadhali ingiza msimbo hapa chini:
  `,
}


export default Swahili = {
  ...App,
  ...General,
  ...Keywords,
  ...Members,
  ...Relations,
  ...Attributes,
  ...Finances,
  ...Other,
}

