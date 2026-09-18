const {test,expect} = require ('@playwright/test');
test  ('Playwright Special Locator', async  ({page})=>
{
    await page.goto ("https://rahulshettyacademy.com/angularpractice/");
    await page.locator(".form-control").first().fill("hi chu");
    await page.locator("[name='email']").fill("hichu@gmail.com");

    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("1234");
    await page.getByRole("button",{name: 'Submit'}).click();
    await page.getByText(" The Form has been submitted successfully!.").isVisible();
    await expect(page.getByText(" The Form has been submitted successfully!.")).toBeVisible({timeout:10_000});


    await page.getByRole("link",{name:"Shop"}).click();
    await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();




})
// test specific timeout
const {test,expect} = require ('@playwright/test');
test  ('test level wait', async  ({page})=>
{
    const slowExpect = expect.configure({timeout:90000});
    await page.goto ("https://rahulshettyacademy.com/angularpractice/");
    await page.locator(".form-control").first().fill("hi chu");
    await page.locator("[name='email']").fill("hichu@gmail.com");

    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("1234");
    await page.getByRole("button",{name: 'Submit'}).click();
    await page.getByText(" The Form has been submitted successfully!.").isVisible();
    await slowExpect(page.getByText(" The Form has been submitted successfully!.")).toBeVisible();
    

    await page.getByRole("link",{name:"Shop"}).click();
    await expect(page.locator(".my-4").first()).toHaveText("Shop");

    await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();




})