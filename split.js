const fs = require('fs')
const lang = require('./no.json')

for(const [scope, keys] of Object.entries(lang)) {
  try {
    var defaults = require(`locales/${scope}.json`)
  } catch(err) {
    continue
  }
  for(const [key, value] of Object.entries(keys[scope])) {
    if(value == keys[key]) delete keys[key]
  }
  try {
    fs.writeFileSync(`locales/nb/${scope}.json`, JSON.stringify({ [scope]:keys }, null, 2))
  } catch(err) {
    console.warn(err)
  }
}