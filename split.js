const fs = require('fs')
const code = 'sv'
const lang = require(`./${code}.json`)

for(const [scope, keys] of Object.entries(lang)) {
  try {
    var defaults = require(`./locales/${scope}.json`)
  } catch(err) {
    continue
  }

  try {
    for(const [key, value] of Object.entries(defaults[scope.toLowerCase()])) {
      if(value == keys[key]) delete keys[key]
    }
    fs.writeFileSync(`./locales/${code}/${scope}.json`, JSON.stringify({ [scope]:keys }, null, 2))
  } catch(err) {
    console.warn(err)
  }
}