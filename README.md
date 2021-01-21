# spreadsheet-to-array

[![NPM version](https://img.shields.io/npm/v/spreadsheet-to-array)](https://www.npmjs.com/package/spreadsheet-to-array)
[![NPM](https://img.shields.io/npm/dw/spreadsheet-to-array)](https://img.shields.io/npm/dw/spreadsheet-to-array)
A library to convert google spreadSheet to array

The result looks like this :

```
[
  [ 'menu.home', 'homepage' ],
  [ 'menu.campaign', 'campaignPage' ]
]
```

## Install

`npm i --save spreadsheet-to-array `

## QuickStart

```js
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
```

see [./example/index.js](./example/index.js)

## Authentification

The `credentials` key should be a file path.

### API Key

You can create an API key here : https://console.developers.google.com/apis/credentials

### Google service account

Create a credentials.json file for your app here : https://console.developers.google.com/

- create a new project
- enable the Drive API
- in **credentials**, select **create new credentials** then **service account** and save the generated JSON. (privately)
- then give the JSON contents to the `credentials` parameter in the `extractSheets` call.

Share the target google spreadsheet with the `client_email` from the credentials.json.

## License

- **MIT** : http://opensource.org/licenses/MIT
