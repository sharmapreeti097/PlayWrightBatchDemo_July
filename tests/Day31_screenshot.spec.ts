//If you want to see the report you can find it inside
//playwright-report and index.html -> press -> open in integrated browser
//======================================================================================
//Go to playwright.config.ts
//screenshot: 'only-on-failure', //screenshot only on failure , whenever the test case gets failed,
// it will actually add the test screenshot to the test cases. If not,it won't add the test cases
// inside the report.

//Eg:
//Go the AddToCartTest.spec.ts
//then make changes so the test case got failed and we get the screenshot on failure in the report

// await test.step("Step 3: Check the cart badge shown as 1", async()=>{
//             expect(await cartPage.getCartBadgeCount()).toBe(2);
//         })

//4 sections-Errors,Test steps,screenshots,attachments


//=======================================
//Go to playwright.config.ts
//screenshot: 'on', //screenshot on , means it will add this screenshot for all the use cases,
//irrespective of pass or failure inside the report.
//=======================================
//Note: In real time we won't be using on by because we will see the screenshots only when the test
//case failed. So we can directly make screenshot only on failure.
//=======================================
//So if you are doing it in local machine, others cannot see.
//but you are running it in pipeline level, others can see as an artifact.
//we will be adding this report as an artifact to the pipeline level.
//=======================================
//Go to playwright.config file
//video: 'retain-on-failure' //only for failure.
////on,off,only-on-failure, on-first-retry //These all the values of the video.
//It will add video in our report.

//Eg:

//Go the AddToCartTest.spec.ts
//then make changes so the test case got failed and we get the screenshot on failure in the report

// await test.step("Step 3: Check the cart badge shown as 1", async()=>{
//             expect(await cartPage.getCartBadgeCount()).toBe(2);
//         })

//5 sections-Errors,Test steps,screenshots,videos,attachments

//=======================================
//Go to playwright.config file
//retries: process.env.CI ? 2 : 1, //retry set 1 or 2 as per your requirement
//video: 'on-first-retry' //It means this will include the video when the failure test case is retrying
//again second time. So it won't capture the video for the first time,or it won't capture the screenshot
//for the first time,it will capture on the first retry.

//Eg:
//retries: process.env.CI ? 2 : 2,
//video: 'on-first-retry',
//two retries here,then it will capture one the first retry.

//Eg:

//Go the AddToCartTest.spec.ts
//then make changes so the test case got failed and we get the screenshot on failure in the report

// await test.step("Step 3: Check the cart badge shown as 1", async()=>{
//             expect(await cartPage.getCartBadgeCount()).toBe(2);
//         })

//=======================================

import {test, expect , Browser, Page , Locator, BrowserContext} from "@playwright/test"
import {firefox, webkit, chromium} from "@playwright/test"


test("ScreenShot",async()=>{

    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const page1: Page = await browser.newPage();

    await page1.goto("https://www.google.com/");

    //element screenshot
    await page1.locator("//div[text()='Reject all']//parent::button").click();
    await page1.waitForTimeout(1000);
    await page1.locator("//span[text()='AI Mode']//parent::div").screenshot({path: "elementSS.png"});

    //page screenshot
    await page1.screenshot({path: "pageSS.png"});

});

test("ScreenShot Full Page",async()=>{

    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const page1: Page = await browser.newPage();

    await page1.goto("https://www.youtube.com/");

    //await page1.locator(".ytSearchboxComponentInput yt-searchbox-input title").fill("Playwright");
    //await page1.locator(".ytSearchboxComponentSearchButton").click();

    //full page screenshot
    //Enter manually in the search bar : "Playwright"
    await page1.waitForTimeout(15000);
    await page1.screenshot({path: "fullPageSS.png" , fullPage: true});

    

});

