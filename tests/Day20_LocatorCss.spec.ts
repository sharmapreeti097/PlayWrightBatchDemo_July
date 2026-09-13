// tips : always go inbuilt method, 
// if not then go to xpath, like unique absolute xpath, if nothing is available, then
// go to relative xpath.


//css
// 'input' , 'div'

//https://www.saucedemo.com/ 

//page.locator('div') //It will find all the developments

//id attribute > #Id attribute value

// class attribute > .class attribute value

//Attribute value > [attribute = 'value']

//tag + attribute > 'tag[attribute = "value"]'

//Difference between tag vs attribute
//1. HTML Tags : A tag defines the type of HTML element on the page
// (such as <a>, <button>, <input>, <div>, <form>).

//2. HTML Attributes : An attribute provides additional properties or metadata inside a tag,
// formatted as name="value" (for example: id="login-btn", type="password", class="primary",
// or custom test attributes like data-testid="submit").

//eg:
// <!-- Tag: button | Attributes: id, class, data-testid -->
// <button id="login-btn" class="primary" data-testid="submit-btn">Log In</button>

//Multiple attributes in single css> 'input [placeholder="Username"] [type="text"]'

//hierarchy - traverse from like parent to child
// parent attribute , child tag - .form_group input

//====================================================================

//file:///C:/Users/Dell/Downloads/Playwright-login-demo.html

//Login as - standard user ,  admin , QA Tesster (under a list / option tag)

//nth child : for list / option  - li tag > 'li:nth-child(7)'

//siblings : https://www.saucedemo.com/inventory.html
//Sauce Labs Backpack > div tag - inventory item label is sibling for price bar tag
//2 different tags - inside 1 parent - they are sibling

//following-sibling ( 1,2,3 following sibling) forward
//preceding-sibling (3,2,1 - preceding sibling) backward
//div1-preceding sibling
//div2-following sibling
//div3-following sibling

////div[@class='inventory_item_img']//following-sibling::div
////meta[@name='viewport']//preceding-sibling::meta[@name='robots']


import {test, expect , Browser, Page , Locator} from "@playwright/test"
import {firefox, webkit, chromium} from "@playwright/test"

test("LocatorCss Test",async()=>{
    
    const browser: Browser = await firefox.launch({headless:false});

    const page1: Page = await browser.newPage(); //1st tab
    
    await page1.goto('https://www.saucedemo.com/');
    
    const username: Locator = page1.locator('#user-name');

    //used css selector multiple attribute - with unique path
    const password: Locator = page1.locator('.form_group input[type="password"]');

    const loginButton: Locator = page1.locator('#login-button');

    await username.fill("visual_user");
    await password.fill("secret_sauce");

    await page1.waitForTimeout(5000);
    await loginButton.click();
    await page1.waitForTimeout(5000);

    

});