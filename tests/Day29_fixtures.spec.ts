// Playwright Fixtures  - playwright.dev/docs/test-fixtures
// provided by playwright itself,like in order to set up an environment for each test.
// Suppose we wanted to run test in UAT as well as QA environment. We have many other environments like SAT environment, UAT environment.
// Some people will follow QA stage. So, whatever environment it can be , we want to run that environment in multiple, we want to run our developed test cases in multiple cases. On that time,we can actually use test fixtures.

// for eg: Page,context,browser,browserName,request

import {test, expect , Browser, Locator} from "@playwright/test"
import {firefox, webkit, chromium} from "@playwright/test"

test("Login Test",async ({ page }) =>{
    
    await page.goto('https://www.saucedemo.com');

    const username: Locator = page.locator('#user-name');
    const password: Locator = page.locator('#password');
    const loginButton: Locator = page.locator('#login-button');

    await username.fill("standard_user");
    await password.fill("secret_sauce");
    await loginButton.click();

    let title = await page.title();
    console.log("Title: " + title);

    expect(title).toEqual('Swag Labs');

    //browser.close();
    
});