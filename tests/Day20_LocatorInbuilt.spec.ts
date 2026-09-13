import {test, expect , Browser, Page , Locator, BrowserContext} from "@playwright/test"
import {firefox, webkit, chromium} from "@playwright/test"

test("Locator Test",async()=>{

    //browser launch
    //opening pages to launch web url
    //defining locator
    //click locator

    //There are different ways to locate elements.
    //Traditional approach
    //1. 👉 CSS Selector (page.locator(css))
    //2. 👉 XPath (page.locator("xpath="))
    //3. default inbuilt methods playwright for locating / web elements
    //  👉 getByRole()
    //  👉 getByLabel()
    //  👉 getByPlaceholder()
    //  👉 getByText()
    //  👉 getByAltText()
    //  👉 getByTitle()
    //  👉 getByTestId()


    const browser: Browser = await firefox.launch({headless:false});

    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();

    //xpath, css selector > page.locator(xpath/css)

    await page1.goto('file:///C:/Users/Dell/Downloads/Playwright-login-demo.html');

    //label tag - text inside label tag
    await page1.getByLabel("Email address").fill('demo@meridian.dev');

    //placeholder attribute
    await page1.getByPlaceholder("Enter your password").fill('Playwright@123');

    //title attribute inside the tag
    await page1.getByTitle("Show Password").click();
    
    //it is based role of the element tag
    await page1.getByRole('button',{name: 'Sign In'}).click();

    await page1.waitForTimeout(10000);

    //data-testID
    const successMessage = page1.getByTestId("success-message");
    await expect(successMessage).toContainText("Welcome back, demo!");


});