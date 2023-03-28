const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ahs9hv',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
