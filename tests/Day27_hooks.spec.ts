import {test, expect , Browser, Page , Locator, BrowserContext} from "@playwright/test"
import {firefox, webkit, chromium} from "@playwright/test"

//Hooks - To do prerequisites
//beforeAll - before all the test gets executed
//AfterAll - After all the test executed
//beforeEach - runs before each test
//afterEach - runs after each test

//Worker ?? - Workers is nothing but how many browsers should launch during the run.
//For eg: if u specify 3 (Worker : 3 in playwright config file),
// then three different browsers wil get launched and three different test cases will run dynamically,parallelly. If not, it will run one by one.

//command npx playwright test tests/Day27_hooks.spec.ts


test.beforeAll("Before All", async()=>{
    console.log("Before All");
});

test.beforeEach("Before Each", async()=>{
    console.log("Before Each");
});

test.afterAll("After All", async()=>{
    console.log("After All");
});

test.afterEach("After Each", async()=>{
    console.log("After Each");
});

test("Test1",async()=>{
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
    browser.close();
    
});

test("Test2",async()=>{
    
    const browser: Browser = await firefox.launch({headless:false});

    //Browser context1

    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();

    await page1.goto("https://www.facebook.com");
    console.log("Inside Test 2");
    browser.close();
    
});

test("Test3",async()=>{
    //browser launch
    //opening pages to launch web url
    //defining locator
    //click locator

    const browser: Browser = await firefox.launch({headless:false});

    //Browser context1

    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();

    await page1.goto("https://www.google.com");
    console.log("Inside Test 3");
    browser.close();
    
});

test("Test4",async()=>{
    
    const browser: Browser = await firefox.launch({headless:false});

    //Browser context1

    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();

    await page1.goto("https://www.facebook.com");
    console.log("Inside Test 2");
    browser.close();
    
});