import {test, expect , Browser, Page , Locator, BrowserContext} from "@playwright/test"
import {firefox, webkit, chromium} from "@playwright/test"

//it is a common configuration for timeout application to all test inside the spec

test.use({actionTimeout: 10000}); //Hard Wait
      
test("Iframe navigation",async()=>{

    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const context: BrowserContext = await browser.newContext();
    const page1: Page = await context.newPage();

    await page1.goto('https://demo-qa-app.azurewebsites.net/frames');

    //console.log("Visible : " + await page1.locator('#sampleHeading').isVisible());
    //will give false bcoz it's inside iframe


    const visibleFrame = page1.frameLocator('#frame1');
    
    console.log("Visible : " + await visibleFrame.locator('#sampleHeading').isVisible());
    //it will give true because went to the iframe and then only we are locating the element.

});

test("Nested Iframe navigation",async()=>{

    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const context: BrowserContext = await browser.newContext();
    const page1: Page = await context.newPage();

    await page1.goto('https://demoqa.com/nestedframes');

    const outerFrame = page1.frameLocator('#frame1');

    const innerFrame = outerFrame.frameLocator("iframe"); //frame inside frame - Nested frame
    
    console.log("Visible : " + await innerFrame.getByText("Child Iframe").isVisible());

    //it will give true because went to the iframe into iframe and then only we are locating the element.

});

test("Alerts Handling",async()=>{

    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const context: BrowserContext = await browser.newContext();
    const page1: Page = await context.newPage();

    await page1.goto('https://demoqa.com/alerts');

    //role = dialog
    
    await page1.locator("#promtButton").click();

    // page1.on("dialog", async (dialog) =>) {

    //     console.log(dialog.message());

    // })



});

