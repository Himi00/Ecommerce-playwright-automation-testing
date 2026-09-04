const {test,expect} = require('@playwright/test');

test.only('Browser first test', async  ({browser})=> 
    {
    const context = await browser.newContext();
    const page = await context.newPage();

    const userName  = page.locator ('input#username');
    const signIN = page.locator("[id='signInBtn']");
    const password = page.locator ("[type='password']");
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title())
// wrong uid
    await page.locator ('input#username').type("rahulshetty");
    await page.locator ("[type='password']").type("learning");
    await signIN.click();
//assertation of error message
    console.log (await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await password.fill("");
    await password.fill("Learning@830$3mK2");
    await signIN.click();

    console.log(await cardTitles.nth(0).textContent());

    const allTitels = await cardTitles.allTextContents();
    console.log (allTitels);




});

/*test('Page first test', async  ({page})=> {
    
    await page.goto("https://www.google.com/");
    console.log(await page.title())
    await expect(page).toHaveTitle("Google");

});*/