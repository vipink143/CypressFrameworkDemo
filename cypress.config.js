const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    watchForFileChanges:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    orangeHrm_url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    
  }

});
