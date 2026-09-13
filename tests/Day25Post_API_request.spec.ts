import {test, expect} from "@playwright/test"
import { request } from "node:http";

//we say data (in playwright) = payload (postman) in body of api
test("Create Post API Request Using static request body in playwright", async({request})=>{

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

    //Validate api response json object
    expect(postAPIResponseBody.booking).toHaveProperty("firstname", "Playwright");
    expect(postAPIResponseBody.booking).toHaveProperty("lastname", "Automation");

    //expect(postAPIResponseBody.booking).toHaveProperty("lastname", "Automation2"); //it will fail


    //if you wanted to validate Nested Object

    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin", "2026-08-25");
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout", "2026-08-28");

});
