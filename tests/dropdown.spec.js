const {test,expect} = require('@playwright/test');
test('UI Controls', async  ({page})=> {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName  = page.locator ('input#username');
    const signIN = page.locator("[id='signInBtn']");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    const radio = page.locator(".customradio").last();
    await radio.click();
    const popup = page.locator("#okayBtn").click();
// Assersation for radio
expect(radio).toBeChecked;
console.log(radio.isChecked);
// Checkbox
const terms = page.locator("#terms");
await terms.click();
expect(radio).toBeChecked();
await terms.uncheck();
await expect(terms).not.toBeChecked();


await page.pause();
});