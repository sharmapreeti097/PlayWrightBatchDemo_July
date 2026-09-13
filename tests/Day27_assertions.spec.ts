//Assertions  -  2 types

//Both assetion will help us to verify the test case is passed or failed.

//Hard assertions - fails, if test case will fail
//Soft assertions - fails it will not make test case, in report it show the specific step fails.

//Why we use assertion in our test? - to verify whether the test case is working correct or not. 

//Hard assertion - if your test case is using hard assertion and
//that assertion fails, it will fail the test case.
//If fails, make the test case file entirely fail and it won't go to the next step.

//Soft assertion - when we use soft assertion, and if that step fails, whatever assertion
// you have included soft, if that fails, it will not fail the entire test case.
//so the test case will run, other steps will run inside the test case, and it will pass or fail.
//but in the report you can see that specific step is failed.
//If fails, it will go to the next test case. They will use that same file.
//When you use soft assertion,it will fail,definitely fail at this case,but it execute other lines below it.
//Whatever lines below that Soft transition, it will execute all the lines and
// close that or post-requisite conditions.
//expect.soft


//==================================================================================
//Suppose if you want to run test1 and test2 from four test cases then use--

//test.skip - to skip any test

//test.only - to run only one test

//tag-based execution - suppose if you want to use multiple test cases based on tag,
//(In real time we use sanity tag,smoke tag)
//command npx playwright test tests/Day27_assertions.spec.ts --grep 'Regression'
//npx playwright test tests/Day27_assertions.spec.ts --grep 'Smoke' 

//Suppose if you want to repeat the smoke tag test multiple times
//npx playwright test --grep 'smoke' --repeat-each=2

//=================================================================================

//Open Day26_delete_api_request.spec.ts test - write @Smoke in test, now giving the spec file,
//instead of giving the spec file, use command - npx playwright test  --grep 'Smoke' 
//So, it will go through all spec files in the test folder and it will grab one the folder having
//like tag having smoke. So, for now, I am having smoke in delete API request file and
// in our assertion file.
//2 smoke tag - one is in delete api one and second assertion file test 2

//==================================================================================

//retry on failure - specify number of "retries" field on config.ts

//retries: process.env.CI ? 2 : 2, (In playwright.config.ts)
//It will run the failed test twice retired (the test case got failed once and
// it is retrying again)

//2,3 - retries u can mention as per ur convience.

//==================================================================================

//test.only ---- only one test case
//npx playwright test tests/Day27_assertions.spec.ts

//==================================================================================
import {test, expect , Browser, Page , Locator, BrowserContext} from "@playwright/test"
import {firefox, webkit, chromium} from "@playwright/test"


test.only("Test1 @Regression",async()=>{
    //browser launch
    //opening pages to launch web url
    //defining locator
    //click locator

    const browser: Browser = await firefox.launch({headless:false});

    //Browser context1

    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();

    await page1.goto("https://www.google.com");
    console.log("Inside Test 1");

    expect.soft(await page1.title()).toBe("Googfle");
    console.log("After Soft Assert");

    expect(await page1.title()).toBe("Google");
    browser.close();
    
});

test("Test2 @smoke",async()=>{
    
    const browser: Browser = await firefox.launch({headless:false});

    //Browser context1

    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();

    await page1.goto("https://www.facebook.com");
    console.log("Inside Test 2");
    browser.close();
    
});

test("Test3 @Regression",async()=>{
    
    const browser: Browser = await firefox.launch({headless:false});

    //Browser context1

    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();

    await page1.goto("https://www.facebook.com");
    console.log("Inside Test 3");
    browser.close();
    
});