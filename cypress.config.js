const { defineConfig } = require('cypress')
module.exports = defineConfig({
  e2e: {
     specPattern: 'cypress/integration/specs/*.js',
     access_key :'0fiuZFh4',
     baseurl:'https://www.rijksmuseum.nl/api/nl/collection',
     video: false
    }
  
})  