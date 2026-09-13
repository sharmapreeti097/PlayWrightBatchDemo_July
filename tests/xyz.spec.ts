import {test, expect , Browser, Page , Locator, BrowserContext} from "@playwright/test"
import {firefox, webkit, chromium} from "@playwright/test"

test("Locator Test",async()=>{

    //browser launch
    //opening pages to launch web url
    //defining locator
    //click locator

    const browser: Browser = await firefox.launch({headless:false});

    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();

    await page1.goto('https://demoqa.com/text-box');

    await page1.getByPlaceholder("Full Name").fill('Preeti bmnbm');
    await page1.getByPlaceholder("name@example.com").fill('name@example.com');
    await page1.locator("xpath=//textarea[@placeholder='Current Address']").fill("ABC Colony");

    await page1.waitForTimeout(10000);
    
    await page1.getByRole('button',{name: "Submit"}).click();


    await page1.waitForTimeout(10000);
});