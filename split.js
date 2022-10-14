const fs = require('fs')
const en = require('./en.json')

for(const [scope, keys] of Object.entries(en)) {
  try {
    fs.writeFileSync(`locales/${scope}.json`, JSON.stringify({ [scope]:keys }, null, 2))
  } catch(err) {
    console.warn(err)
  }
}