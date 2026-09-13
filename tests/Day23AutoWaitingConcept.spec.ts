//https://playwright.dev/docs/actionability
//auto-waiting concept
//using locators we are trying to do some web actions.
//web acctions - like filling the calues,clicking,double click, radio button,
//check box,tap,uncheck,hover the locator,we can drag to, screenshot.
//for all the locators there is some matrix.
//Matrix??-the element is Visible,stable,Receives Events,Enables,Editable
// (5 check playwright do before it is going to perform any such actions)
//eg: locator.check()-Visisble (Yes),Stable(Yes),Receives Events(Yes) means whether after checking pop-up is enabled or not
//Enabled(Yes)- whether element ennabled or not (Yes)

//when we do with selenium - it don't have any auto-weighting
// (Not check Matrix 3  selenium whether element - visible,stable,receives events,enabled)concept at all.
// but with playwright - autowaiting - if any actions is not pass within the given timeout,action
//  fails with the TimeoutError.
// in selenium we have to do custom scripts but in playwright it's possible through autowaiting

import {test, expect , Browser, Page , Locator, BrowserContext} from "@playwright/test"
import {firefox, webkit, chromium} from "@playwright/test"

//it is a common configuration for timeout application to all test inside the spec
test.use({actionTimeout: 10000}); //Hard Wait
      
test("Auto Waiting Concepts",async()=>{

    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const context: BrowserContext = await browser.newContext();
    const page1: Page = await context.newPage();

    //default timeout = 30secs
    //below changing to 10 secs
    //page1.setDefaultTimeout(10000); //10 secs

    await page1.goto('https://demo-qa-app.azurewebsites.net/text-box');

    //waiting if locator not found on the above link - provide timeout error,
    // by default will provide wait for 30 sec for eg if you do any add one more dummy line
    //it will not fail directly wait for 30 sec and then then through timeout error.

    //await page1.locator('nknkjnknkj').click();

    //three types of timeout we can  set
    //1. timeout for - all the page classes
    //2. specify a timeout for specific line, specific web actions.
    //3. test.use({actionTimeout: 1000}); (above the actual test start) - if you run any test, if
    //there is any failure, then it will be failing in 10 seconds.
    //we don't need to specifically mention page1.setDefaultTimeout(10000);
    // page.setdefaulttimeout is not advisable bcoz we have to write so many times after every web actions.


    //await page1.locator('nknkjnknkj').click({timeout : 5000}); //explicity time

    await page1.locator('nknkjnknkj').click();

});