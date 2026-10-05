const {test,expect, request} = require ('@playwright/test');
const {APiUtils} = require('./utils/APiUtils');
const apiContext = await request.newContext();

    const loginpayload = {userEmail:"himi.ecommerce@gmail.com",userPassword:"uDY@T8H67AGYsb@"}
    const orderPayLoad = {Orders:[{country:"Cuba",productOrderId:"6ab9b9ac2be7a4bc2b7444e3"}]}


    let token;
    let orderID;    
 test.beforeAll(async()=>
{
    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext,loginpayload);
    apiUtils.createOrder(orderPlayLoad);

}
)
    
test('API', async  ({page})=> {
   const apiUtils = new ApiUtils(apiContext, loginpayload);
    const orderId = createOrder();

    await page.addInitScript(value => {
    window.localStorage.setItem('token', value);
}, token);

await page.goto("https://rahulshettyacademy.com/client");

// place order
   
page.pause();

    // search order 6aa9bf7752cfef03ed0c8353 from order page

    const orderHistory = page.locator("button[routerlink='/dashboard/myorders']");
    await orderHistory.click();
    
    const orderList = page.locator("tr.ng-star-inserted");
    await orderList.first().waitFor();

    const ordercount = await orderList.count();
   // const  orderFound = false;
    for (let i=0; i<ordercount; ++i)
  {
      const oID = await orderList.nth(i).locator("th").textContent();
      //console.log("checking:",oID);

      if (orderID.includes(oID.trim()))
      {
        orderList.nth(i).locator("button").first().click();
      //console.log(oID.trim());

        break;
      } 
    }
      const orderIDDetails = await page.locator("[class='col-text -main']").textContent();
      expect (orderID.includes(orderIDDetails)).toBeTruthy;




})
