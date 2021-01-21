const spreadsheetToArray = require('spreadsheet-to-array')
spreadsheetToArray(
  {
    credentials: '../credentials.json',
    // The following options can refer to https://googleapis.dev/nodejs/googleapis/latest/sheets/interfaces/Params$Resource$Spreadsheets$Values$Get.html#info
    spreadsheetId: 'abcdefg',
    range: 'CP!C2:D',
  },
  (res) => {
    console.log(res)
  }
)