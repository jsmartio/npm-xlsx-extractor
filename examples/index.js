const xlsx = require('xlsx-extractor')

// Get sheets count
console.log(xlsx.getSheetCount('./sample.xlsx'))

// Single
xlsx
  .extract('./sample.xlsx', 1)
  .then((sheet) => {
    console.log(sheet)
  })
  .catch((err) => {
    console.log(err)
  })

// Range
xlsx
  .extractRange('./sample.xlsx', 1, 2)
  .then((sheets) => {
    console.log(sheets)
  })
  .catch((err) => {
    console.log(err)
  })

// All
xlsx
  .extractAll('./sample.xlsx')
  .then((sheets) => {
    console.log(sheets)
  })
  .catch((err) => {
    console.log(err)
  })
