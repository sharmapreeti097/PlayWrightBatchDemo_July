import {test, expect , Browser, Page , Locator, BrowserContext} from "@playwright/test"
import {firefox, webkit, chromium} from "@playwright/test"

test("Email Test",async()=>{
    
    //take an example - So you want to checque an email sending application, e-mail application.
    //what to do - we need to have one browser session and we also want to have one more browser,
    //which is logging user A and the other browser is logging user B.
    //then when you can able to cheque whether it is logging in,once we send the e-mail from user A,
    // is received by the user B. So, basically want 2 browser sessions,
    //one session we have to log it with user A and then user B,
    //and then we need to cheque whether message sent from user A is received to user B or not??


    //browser vs browser context
    //log into user A->(send email)->log into user B and check whether email received or not.
    //basically create 2 browser contexts and then we can launch user A, log in user A,send email.
    //launch another user B - log in -check same email received or not.

    // it will launch 2 incognito window -> will have 2 different different session
    
    const browser: Browser = await firefox.launch({headless:false});

    //2 browser windows and 2 different tabs and two browser
    //Browser context1
    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();

    //Browser context2
    const context2: BrowserContext = await browser.newContext();
    const page2: Page = await context2.newPage();

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


    //page2

    await page2.goto('https://www.saucedemo.com/');
    //goto is also returning a promise so we have to use await.
    //else it will won't wait and go to the next step without waiting

    const username2: Locator = page2.locator('#user-name');
    const password2: Locator = page2.locator('#password');
    const loginButton2: Locator = page2.locator('#login-button');

    await username2.fill("visual_user");
    await password2.fill("secret_sauce");
    await loginButton2.click();  

});