const {test,expect} = require('@playwright/test');
test('UI Controls', async  ({page})=> {
   

   await page.goto("https://eventhub.rahulshettyacademy.com/login");

   //register
   const signup = page.locator(".text-indigo-600");
   const email = page.locator("#register-email");
   const rPassword = page.locator("#register-password");
   const cPassword = page.locator("[type='password']").nth(1);
   const rButton = page.locator("[type='submit']");
   const singinLink = page.locator(".text-indigo-600");
   await signup.click();
   await page.waitForURL("**/register");

   await email.fill("himiecommerce+2@gmail.com");
   await rPassword.fill("1qazZAQ!");
   await cPassword.fill("1qazZAQ!");
   await rButton.click();
   await singinLink.click
   await expect(page.getByText("Sign in to EventHub")).toBeVisible();



page.pause();


});