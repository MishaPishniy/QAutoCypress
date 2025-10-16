const { defineConfig } = require("cypress");
const dotenv = require('dotenv')

const envFile = `.env.${process.env.NODE_ENV || 'development'}`
dotenv.config({ path: envFile })

module.exports = defineConfig({
  projectId: 'jezrdi',
  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      USER_NAME: process.env.USER_NAME,
      USER_PASS: process.env.USER_PASS
    },
    specPattern: "cypress/e2e/**/*.cy.js",
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
    viewportHeight:768 ,
    viewportWidth:1366,
    video: true,
    screenshotOnRunFailure: true,
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 4000,
    retries:{runMode:1 , openMode:0},
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
