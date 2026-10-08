const {test,expect, request} = require ('@playwright/test');
const {APiUtils} = require('./utils/APiUtils');

    const loginpayload = {userEmail:"himi.ecommerce@gmail.com",userPassword:"uDY@T8H67AGYsb@"}
    const orderPayLoad = {orders:[{country: "Cuba", productOrderedId: "6960eae1c941646b7a8b3ed3"}]}
    const fakePayLoad = {data:[],message:"No Orders"};

    let token;
    let orderID;   
    let response; 

    
 test.beforeAll(async()=>
{
    const apiContext = await request.newContext();
    const apiUtils = new APiUtils(apiContext,loginpayload);
    response = await apiUtils.createOrder(orderPayLoad);

}
)
    
test('API', async  ({page})=> {
   

    await page.addInitScript(value => {
    window.localStorage.setItem('token', value);

}, response.token );

await page.goto("https://rahulshettyacademy.com/client");


await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",

async route=>
{
   const response = await page.request.fetch(route.request());
   let body = JSON.stringify(fakePayLoad);
   route.fulfill(
    {
            response,
            body,
    }
   )

}


)




// place order
   
await page.pause();

    // search order 6aa9bf7752cfef03ed0c8353 from order page

    const orderHistory = page.locator("button[routerlink='/dashboard/myorders']");
    await orderHistory.click();
    page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
    console.log(await page.locator(".mt-4").textContent());

    
   



})
