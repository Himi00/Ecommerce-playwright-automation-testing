const {test,expect} = require ('@playwright/test');
test ('Browser first test', async  ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.waitForLoadState('networkidle');
    console.log(await page.title());
    //Login 
    const userName = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const login = page.locator("#login");
    const email = "himi.ecommerce@gmail.com";

    await userName.fill((email))
    await password.fill("uDY@T8H67AGYsb@")
    await login.click();

    const productName = 'iphone 13 pro';
    const products = page.locator(".card-body");
    await products.first().waitFor();

    //Find the product
   const count = await products.count();

   for (let i = 0; i < count; ++i )
   {
        const name = await products.nth(i).locator("b").textContent();
    if ( name === productName)
    {
            //add to cart
          await  products.nth(i).locator("text=Add To Cart").click();
          break;
    }
    
   }

// open cart 
    const cart = page.locator("[routerlink='/dashboard/cart']");
    await cart.click();
    page.locator("div li").first().waitFor();
   const bool =  page.locator("h3:has-text('iphone 13 pro')").isVisible();
   expect(bool).toBeTruthy();



//checkout
 const checkout = page.locator("text=checkout");
 await checkout.click();

 //payment method
   const creditCard = page.locator("[value='4542 9931 9292 2293']");
   const cvv = page.locator("[class='input txt']").first();
   const nameOnCard = page.locator("[class='input txt']").last();
   const expMonth = page.locator("[class='input ddl']").first();
   const expDay = page.locator("[class='input ddl']").last();
   const country = page.locator("[placeholder='Select Country']");
   const countryList = page.locator("[class='ta-results list-group ng-star-inserted']");

   await creditCard.fill ("1234 5678 9011 1213");
   await cvv.fill("234");
   await nameOnCard.fill("Himani pact");
   await expMonth.selectOption("03");
   await expDay.selectOption("23");
   await country.pressSequentially("can",{delay:100});
   await countryList.waitFor();
  const optionscount = await countryList.locator("[type='button']").count();

  for (let i=0; i<optionscount; ++i)
  {
      const text = await countryList.locator("[type='button']").nth(i).textContent();

      if (text.trim() === "Canada")
      {
      await countryList.locator("[type='button']").nth(i).click();
        break;
      }
    }
// email asserssation
 const emailID = page.locator(".user__name [type='text']").first();
  await expect(emailID).toHaveText(email);
//place order
    const order = page.locator(".action__submit");
    await order.click();
    
    const confirmation = page.locator(".hero-primary");
    await confirmation.waitFor({ state: 'visible' });
   await expect(confirmation).toContainText(" Thankyou for the order. ");

    //print orderid in console

    const orderID1 = page.locator(".em-spacer-1 .ng-star-inserted");
    //const orderID = page.locator(".em-spacer-1 .ng-star-inserted").last();

    console.log(orderID1.textContent());
   // console.log(orderID);







}
)