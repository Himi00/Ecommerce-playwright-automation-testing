const {test,expect} = require ('@playwright/test');
test ('Browser first test', async  ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    console.log(await page.title())

    const register = page.locator ('[routerlink="/auth/register"]');
    const firstName = page.locator ('#firstName');
    const lastName = page.locator ('#lastName');
    const email = page.locator ('[type="email"]');
    const phone = page.locator ('#userMobile');
    const occupation = page.locator('[formcontrolname="occupation"]');
    const password = page.locator ('[formcontrolname="userPassword"]');
    const confirmPassword = page.locator ('[formcontrolname="confirmPassword"]');
    const gender = page.locator ('[value="Male"]');
    const required = page.locator('[formcontrolname="required"]');
    const registerButton = page.locator('[value="Register"]');
    const successmsg = page.getByText ("Account Created Successfully");
    const login = page.locator('[class="btn btn-primary"]');
    const login2 = page.locator('[value="Login"]');







    

    //Rgister page
   /* await register.click();
    await firstName.fill("Humi");
    await lastName.fill("mimi");
    await email.fill("himi.ecommerce+8@gmail.com");
    await phone.fill("1624681834");
    await expect(occupation).toBeVisible();
    await occupation.selectOption({ label: 'Student' });
    await password.fill("Humayra1*")
    await confirmPassword.fill("Humayra1*");
    await gender.check()
    await required.check()
    await registerButton.click();
    await expect(successmsg).toBeVisible();
    await login.click(); */
    //Login

   
    await email.fill(("himi.ecommerce+7@gmail.com"))
    await password.fill("Humayra1*")
    await login2.click();

    //await page.waitForLoadState('networkidle');
    const P_title = page.locator(".card-body b");
    await P_title.first().waitFor({ state: 'visible' });
    const list = await P_title.allTextContents();

     console.log(list);



    //Loginpage
    /*const login =page.locator ('[value="Login"]');
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await email.fill("himi.ecommerce@gmail.com");
    await password.fill("123456");
    await login.click();*/




});
