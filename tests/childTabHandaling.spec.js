const {test,expect} = require('@playwright/test');
test('Child window handle', async  ({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();
 
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const documentLink1 = page.locator("[href*=documents-request]");
    const documentLink2 = page.locator("[href*=job-ready]");
    const userName  = page.locator ('input#username');


   //await expect(documentLink1).toHaveAttribute("Class","blinkingText");
   //await expect(documentLink2).toHaveAttribute("Class","blinkingText");
   
  const [newPage] = await Promise.all(
   [
    context.waitForEvent('page'),
    documentLink1.click(),
]) 
    const text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];
    console.log(domain);
    await userName.fill(domain);

await page.pause();

});


