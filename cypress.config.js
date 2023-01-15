const { defineConfig } = require('cypress')
module.exports = defineConfig({
  e2e: {
     specPattern: 'cypress/integration/specs/*.js',
     baseUrl:'https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=0fiuZFh4'
    }
  
})  