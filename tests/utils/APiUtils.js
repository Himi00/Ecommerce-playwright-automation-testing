class APIUtils
{

    constructor (apiContext,loginpayload)
    {
        this.apiContext = apiContext;
        this.loginpayload = loginpayload;
    }
    async getToken()
    {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data:this.loginpayload
            });
           
           const loginResponseJson = await loginResponse.json();
            token = loginResponseJson.token; 
           console.log(token);
        
    }

    async createOrder(orderPayLoad)
    {
    const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
        data: orderPayLoad,
        headers: {
            'Authorization' : this.getToken(),
            'Content-Type': 'application/json',
        },
    });
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    const orderID = orderResponseJson.orders[0];
    return orderID;


    }
}

module.exports = {APIUtils};