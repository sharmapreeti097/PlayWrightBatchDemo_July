//PUT HTTP request  - whenever you are using PUT request,you can send entire payload.

//PATCH HTTP request - whenever you are going to use patch request,you can send any particular part in the 
//payload,any one variable there / if you are going to update one,any one variable,then you can
// actually send. Use PATCH request. for eg: only need to update firstname


// Token Generate - https://restful-booker.herokuapp.com/auth(Get this URL from Postman)
// Body- and paste the body in json token_request.json file (Passing payload whatever in the body)

//===============================

import {test, expect,request} from "@playwright/test"

import tokenBody from "../tests/test-data/token_request_body.json";

import putRequestBody from "../tests/test-data/put_request_body.json";

test("PUT API Request to update a booking ID using playwright", async({request})=>{

    const postAPiResponse = await request.post("/booking",{
        data:
            {
                "firstname": "Playwright",
                "lastname": "Automation",
                "totalprice": 3000,
                "depositpaid": true,
                "bookingdates":
                {
                    "checkin": "2026-08-25",
                    "checkout": "2026-08-28"
                },
                "additionalneeds": "Dinner required"
            }
    });

    
    console.log("============POST Method============");
    console.log(await postAPiResponse.json());

    expect(postAPiResponse.ok()).toBeTruthy();
    //If the request passes, it will throw true else false.
    //Check whether the OK method providding true or false.
    expect(postAPiResponse.status()).toBe(200);

    const postAPIResponseBody = await postAPiResponse.json();


    //Store the booking id in a variable and going to use that getAPIResponse
    const bookingID = postAPIResponseBody.bookingid;

    const tokenAPIresponse = await request.post("/auth",{
            data: tokenBody

    });

    const tokenResponseBody = await tokenAPIresponse.json();
    const tokenNumber = tokenResponseBody.token;


    // put API request

    const putApiResponse = await request.put(`/booking/${bookingID}`,{
        headers:{
            "Content-Type" : "application/json",
            "Cookie" : `token=${tokenNumber}`
        },
        data: putRequestBody

    });

    console.log("============PUT Method============");
    console.log(await putApiResponse.json());

    const putApiResponseBody = await putApiResponse.json();

    //Validate api response json object
    expect(putApiResponseBody.firstname).toBe("PUTrequest");
    expect(putApiResponseBody.lastname).toBe("Selenium C#");

});