import {test, expect , Browser, Page , Locator, BrowserContext} from "@playwright/test"
import {firefox, webkit, chromium} from "@playwright/test"

test("Select based Drop Down Test",async()=>{

    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const page1: Page = await browser.newPage();

    await page1.goto('https://www.magupdate.co.uk/magazine-subscription/phrr');
    page1.locator('css=#Contact_CountryCode');

    const countryDropdown = 'select#Contact_CountryCode';

    await page1.waitForTimeout(3000);

    await page1.selectOption(countryDropdown,{value: 'AS'});

    await page1.waitForTimeout(2000);

    //we can write value : '' / label: ''
    await page1.selectOption(countryDropdown,{label: 'Antarctica'});

    //we can provide index also which is start with zero [0]

    await page1.selectOption(countryDropdown,{label: 'Antarctica'});
    await page1.waitForTimeout(2000);

    //we can provide index also which is start with zero [0]
    await page1.selectOption(countryDropdown, {index: 15}); //output: Azerbaijan (as start from 0)
    await page1.waitForTimeout(2000);
    
});

test ('mouse actions' , async()=>{
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    //below permissions: [] - it will not show the location permission pop-up using context
    const context: BrowserContext = await browser.newContext({permissions: []});

    //below permissions: ['geolocation] - Suppose if you want to give permission - geolocation
    //const context: BrowserContext = await browser.newContext({permissions: ['geolocation'], geolocation : {latitude : 12.0945, longitude: 80.2707}});

    const page1: Page = await context.newPage();

   // await page1.goto('https://demo.guru99.com/test/simple_context_menu.html');
   // await page1.waitForTimeout(1000);

    //double-click
   // await page1.getByText("Double-Click Me To See Alert").dblclick();
   // await page1.waitForTimeout(3000);

    //right click,left click,middle click
    //modifiers : "Alt" , "Control","ControlOrMeta","Meta","Shift" + click
   // await page1.getByText("right click me").click({button: 'right'});
   // await page1.waitForTimeout(5000);

    //Mouse-hover
    //await page1.goto("https://www.spicejet.com/");
    //await page1.waitForTimeout(1000);
    //await page1.getByText("Add-ons").first().hover(); //first and last - 2 method to identify the locators
    
    //await page1.getByText("Add-ons").first().hover();
    // await page1.waitForTimeout(2000);
    // await page1.getByText("Visa Services").first().click();

    // await page1.waitForTimeout(5000);

    //modifiers-Shift+click,ctrl+click

    await page1.goto("https://the-internet.herokuapp.com/shifting_content");
    //page1.getByText("Example 1: Menu Element").click({modifiers: ["Shift"]});

    page1.getByText("Example 1: Menu Element").click({modifiers: ["Control"]});

    await page1.waitForTimeout(5000);


})