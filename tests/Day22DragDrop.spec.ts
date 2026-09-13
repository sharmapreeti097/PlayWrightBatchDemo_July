import {test, expect , Browser, Page , Locator, BrowserContext} from "@playwright/test"
import {firefox, webkit, chromium} from "@playwright/test"

test("drag and drop",async()=>{

    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const context: BrowserContext = await browser.newContext();
    const page1: Page = await context.newPage();

    await page1.goto('https://jqueryui.com/resources/demos/droppable/default.html');

    //1st method
    //await page1.locator("#draggable").dragTo(page1.locator("#droppable"));

    //2nd method - line - 14 equal to 18-24
    //syntax-hover drag to drop
    await page1.locator("#draggable").hover();
    await page1.waitForTimeout(1000);
    await page1.mouse.down();
    await page1.waitForTimeout(1000);
    await page1.locator("#droppable").hover();
    await page1.waitForTimeout(1000);
    await page1.mouse.up();

    await page1.waitForTimeout(2000);

});