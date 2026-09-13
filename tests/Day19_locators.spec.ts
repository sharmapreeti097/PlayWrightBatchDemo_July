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

    await page1.goto('https://www.saucedemo.com/');

    //syntax for xpath with attribute
    //tag[@attribute = 'value']

    //1st method - best method
    await page1.locator("xpath=//input[@placeholder='Username']").fill("problem_user");

    // or you can write xpath= also both are same
     //2nd method
    //await page1.locator("//input[@placeholder='Username']").fill("problem_user");

    //wait page1.getByPlaceholder("Username").fill("standard_user");

    //syntax applicable only for id not for placeholder , name or any other attribute
    await page1.locator("id=password").fill("secret_sauce");

    //await page1.locator("name=password").fill("secret_sauce"); // Error for name attribute


    await page1.getByRole('button',{name: "login"}).click();


    const altTestVisible = await page1.getByAltText("Sauce Labs Backpack").click();
    console.log(altTestVisible);

    //xpath - 2 methods
    
    //Absolute xpath / dynamically----should use this not relative xpath
    //syntax for xpath with attribute
    //tag[@attribute = 'value'] //1st method

    //syntax for xpath based on text inside the tag
    //tag[text()='value] //2nd method

    //parent tag - immediate tag for xpath
    //ancestor tag - can be multiple - we need to identify correct ancestor tag
    // - traversing to child

    


    //1st we need to identify one xpath,from that xpath,
    // we need to identify what is the ancestor, correct ancestor, and then from that ancestor,
    // we will be going to child by child till we reach that button.

    //await page1.locator("//div[text()='Sauce Labs Backpack']//ancestor::div[@class='inventory_item_description']//div[@class='pricebar']//button").click();
    
    return new Promise(()=>{});

    //https://www.saucedemo.com/
    //Inpect - Username
    //input tag is child
    //one above is parent
    //and above parent all are ancestors tag like family chain dom structure

    // *[@id="user-name"]

    //Relative xpath  / not advisable / because it will change when developer add 
    // /html/body/div[1]/div/div[2]/div[1]/div/div/form/div[1]/input



});