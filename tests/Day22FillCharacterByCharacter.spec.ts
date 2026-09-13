import {test, expect , Browser, Page , Locator, BrowserContext} from "@playwright/test"
import {firefox, webkit, chromium} from "@playwright/test"

test("Fill character by character",async()=>{

    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const context: BrowserContext = await browser.newContext();
    const page1: Page = await context.newPage();

    await page1.goto('https://demo-qa-app.azurewebsites.net/automation-practice-form');
    await page1.waitForTimeout(1000);

    //focus the element which you want
    await page1.locator("#firstName").focus();
    await page1.waitForTimeout(1000);

    //print the text in the textbox character by character with some delay between filing.
    //delay by 1000ms

    await page1.locator("#firstName").pressSequentially("ISHATraining",{delay: 1000});

    await page1.waitForTimeout(5000);

    await page1.close();

});