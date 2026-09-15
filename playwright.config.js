// @ts-check
const { defineConfig, expect } = require ('@playwright/test');
/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './tests',
  timeout: 80*1000,
  expect:{timeout: 5000},

  reporter : 'html',
  use: {
    browserName: 'chromium',
    headless: false 
    

  },

});
module.exports=config
