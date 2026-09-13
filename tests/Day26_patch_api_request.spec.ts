import {test, expect,request} from "@playwright/test"

import tokenBody from "../tests/test-data/token_request_body.json";

import patchRequestBody from "../tests/test-data/patch_request_body.json";

test("PATCH API Request to update a booking ID using playwright", async({request})=>{

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

    const patchApiResponse = await request.patch(`/booking/${bookingID}`,{
        headers:{
            "Content-Type" : "application/json",
            "Cookie" : `token=${tokenNumber}`
        },
        data: patchRequestBody

    });

    console.log("============PATCH Method============");
    console.log(await patchApiResponse.json());

    const patchApiResponseBody = await patchApiResponse.json();

    //Validate api response json object
    expect(patchApiResponseBody.firstname).toBe("Testers Talk");

});