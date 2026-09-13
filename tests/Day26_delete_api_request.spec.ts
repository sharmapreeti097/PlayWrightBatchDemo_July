import {test, expect,request} from "@playwright/test"

import tokenBody from "../tests/test-data/token_request_body.json";

test("Delete API Request booking ID using playwright @smoke", async({request})=>{

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

    
    //Printing the response
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

    const deleteApiResponse = await request.delete(`/booking/${bookingID}`,{
        headers:{
            "Content-Type" : "application/json",
            "Cookie" : `token=${tokenNumber}`
        },
        
    });

    console.log("Deleted : " +bookingID);
    expect(deleteApiResponse.statusText()).toBe("Created");

});