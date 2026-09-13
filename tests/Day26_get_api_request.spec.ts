//Path params - booking ID - respective response
//eg:-https://restful-booker.herokuapp.com/booking/70
//Here 70 is the booking ID we passed

//filter booking based on the provided parameter on the query we send

//eg : -(In Postman)-https://restful-booker.herokuapp.com/booking?firstname=John&lastname=Doe
//Output- in this combination of values available then it will throw the list of booking IDS or
// else it will throw the empty ID. (the bookings based on the parameters we pass-it can be any
// parameters inside the payload which we are sending during the POST request)

//Query Params - https://restful-booker.herokuapp.com/booking?firstname=Jim&lastname=Brown
//What you are sending after ? in the URL i.e. called query params. 

import {test, expect} from "@playwright/test"

//faker is a library similar to playwright.
//Like we use test from playwright likewise faker is providing default methods.
//from faker - we can generate different fake information of an individual or a person.
import{faker} from'@faker-js/faker'

//In Luxon, we are going to dynamically generate values for date and time.
import{DateTime} from 'luxon'

import requestBody from "../tests/test-data/post_request_body.json";

//we say data (in playwright) = payload (postman) in body of api

test("Get API request based on the booking ID in playwright", async({request})=>{

    //Going to create one booking using the POST API, and then get the booking ID -> use in the GET Call
    //going to create one POST request and store in a variable and thern we are
    //going to use that variable inside the get parameter
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


    //Validate api response json object
    expect(postAPIResponseBody.booking).toHaveProperty("firstname", "Playwright");
    expect(postAPIResponseBody.booking).toHaveProperty("lastname", "Automation");

    //expect(postAPIResponseBody.booking).toHaveProperty("lastname", "Automation2"); //it will fail


    //if you wanted to validate Nested Object

    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin", "2026-08-25");
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout", "2026-08-28");

    //Path params - booking ID - respective response
    const getAPIResponse = await request.get(`/booking/${bookingID}`);

    console.log("============GET Method============");
    console.log(await getAPIResponse.json());

    expect(postAPiResponse.ok()).toBeTruthy();
    expect(postAPiResponse.status()).toBe(200);

    console.log("====================================");

    //Query Params - https://restful-booker.herokuapp.com/booking?firstname=Jim&lastname=Brown
    //What you are sending after ? in the URL i.e. called query params. 

    const getQueryAPIResponse = await request.get(`/booking` , {
        params:
        {
            firstname: 'Playwright',
            lastname: 'Automation'

            //lastname: 'Automatio' //Ouput- []
        }

    });

    
    console.log(await getQueryAPIResponse.json());

    expect(postAPiResponse.ok()).toBeTruthy();
    expect(postAPiResponse.status()).toBe(200);

});

