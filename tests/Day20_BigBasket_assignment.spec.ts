import { test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test';
import { webkit,chromium, firefox } from '@playwright/test';

test('BigBasket Test', async () => {
        const browser = await chromium.launch({ headless: false, channel: 'chrome'});
        
        const context1: BrowserContext = await browser.newContext();
        const page1: Page = await context1.newPage();

        await page1.goto('https://www.bigbasket.com/');

        await page1.locator("//div[@class='grid grid-flow-col place-content-start gap-x-6 lg:py-1 xl:pb-2 xl:pt-3']//button/div/span[text()='Category']").click();
        //await page1.getByText('Category').last().click(); //1st method

        //await page1.locator("(//span[text()='Category'])[2]").click(); //2nd method

        //3rd method - unique - parent tag
        
        await page1.waitForTimeout(1000);
        //const firstLevel = page1.getByText("Pharmacy & Wellness");
        //await firstLevel.last().hover();
        await page1.locator("//div[@class='CategoryMenu___StyledMenuItems-sc-d3svbp-0 dfsWUj']//nav/ul/li/a[text()='Pharmacy & Wellness']").hover();
        await page1.waitForTimeout(2000);
        await page1.getByText("OTX Medicine").hover();
        await page1.waitForTimeout(2000);
        await page1.getByText("Gastro Meds").hover();
        await page1.waitForTimeout(2000);
        await page1.getByText("Gastro Meds").click();
        await page1.waitForTimeout(5000);
        await browser.close();
});