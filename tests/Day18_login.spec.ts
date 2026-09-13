import {test, expect , Browser, Page , Locator} from "@playwright/test"
import {firefox, webkit, chromium} from "@playwright/test"

test("Login Test",async()=>{
    //browser launch
    //opening pages to launch web url
    //defining locator
    //click locator

    const browser: Browser = await firefox.launch({headless:false});

    //page is nothing it's a tab on the browser
    //new page also returing promise that's why we using await here
    //if you want to open another tab then we have to use page2
    //for 3rd tab -> page3 on that browser.


    //creating a tab in browser page_name : datatype (page)
    const page1: Page = await browser.newPage(); //1st tab
    //const page2: Page = await browser.newPage(); //2nd tab

    await page1.goto('https://www.saucedemo.com/');
    //goto is also returning a promise so we have to use await.
    //else it will won't wait and go to the next step without waiting

    const username: Locator = page1.locator('#user-name');
    const password: Locator = page1.locator('#password');
    const loginButton: Locator = page1.locator('#login-button');

    await username.fill("standard_user");
    await password.fill("secret_sauce");
    await loginButton.click();

    let title = await page1.title();
    console.log("Title: " + title);

    expect(title).toEqual('Swag Labs');

    browser.close();
    
});