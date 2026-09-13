import {test, expect} from "@playwright/test"

//faker is a library similar to playwright.
//Like we use test from playwright likewise faker is providing default methods.
//from faker - we can generate different fake information of an individual or a person.
import{faker} from'@faker-js/faker'

//In Luxon, we are going to dynamically generate values for date and time.
import{DateTime} from 'luxon'

import requestBody from "../tests/test-data/post_request_body.json";

//we say data (in playwright) = payload (postman) in body of api
test("Create Post API Request Using static request body in playwright", async({request})=>{

        const postAPiResponse = await request.post("/booking",{
        data: requestBody
            
    });
                                                   
    //Printing the response
    console.log(await postAPiResponse.json());

    expect(postAPiResponse.ok()).toBeTruthy();
    //If the request passes, it will throw true else false.
    //Check whether the OK method providding true or false.
    expect(postAPiResponse.status()).toBe(200);

    const postAPIResponseBody = await postAPiResponse.json();

    //Validate api response json object
    expect(postAPIResponseBody.booking).toHaveProperty("firstname", "Static JSON File");
    expect(postAPIResponseBody.booking).toHaveProperty("lastname", "Automation");

    //expect(postAPIResponseBody.booking).toHaveProperty("lastname", "Automation2"); //it will fail


    //if you wanted to validate Nested Object

    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin", "2026-08-25");
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout", "2026-08-28");

});

test("Create Post API Request Using dynamic request body in playwright", async({request})=>{

    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();

    //This is to generate dynamic test data.
    //Suppose you are going to test some login form. For that you need to use like 1000 firstname and lastname
    //then only you can create 100 first forms with different unique names.
    //instead of creating an Excel file and listing out all the first name and last name and using it inside this script.
    //we are just using a library, and then we are passing the dynamic value everytime.
    //So that you can create 1000 forms without any external data.
    //We are using just the library to create a dynamic data.
    //random data.

    console.log(firstname+lastname);

    //for checking & checkout we have used luxon

    const checkINDate = DateTime.now().toFormat('yyyy-MM-dd');
    const checkoutDate = DateTime.now().plus({day:5}).toFormat('yyyy-MM-dd');


    const postAPiResponse = await request.post("/booking",{
        data:
            {
                "firstname": firstname,
                "lastname": lastname,
                "totalprice": 3000,
                "depositpaid": true,
                "bookingdates":
                {
                    "checkin": checkINDate,
                    "checkout": checkoutDate
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
    expect(postAPIResponseBody.booking).toHaveProperty("firstname", firstname);
    expect(postAPIResponseBody.booking).toHaveProperty("lastname", lastname);

    //expect(postAPIResponseBody.booking).toHaveProperty("lastname", "Automation2"); //it will fail


    //if you wanted to validate Nested Object

    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin", checkINDate);
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout", checkoutDate);

});