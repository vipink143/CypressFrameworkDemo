const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    watchForFileChanges:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    base_url: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    productSearch_url:"https://naveenautomationlabs.com/opencart/index.php?route=product/search"
    
  }

});
