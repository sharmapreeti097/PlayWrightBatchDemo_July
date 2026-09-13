import {test, expect , Browser, Page , Locator, BrowserContext} from "@playwright/test"
import {firefox, webkit, chromium} from "@playwright/test"


test("Web tables", async()=>{

    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const context: BrowserContext = await browser.newContext();
    const page1: Page = await context.newPage();

    await page1.goto("https://demoqa.com/webtables");

    const rows = page1.locator("//table//tbody//tr");

    console.log("Rows Count: " + await rows.count());

    // await page1.locator("#addNewRecordButton").click();

    // await page1.locator("#firstName").fill("Preeti");
    // await page1.locator("#lastName").fill("Joshi");
    // await page1.locator("#userEmail").fill("abc@gmail.com");
    // await page1.locator("#age").fill("20");
    // await page1.locator("#salary").fill("25");
    // await page1.locator("#department").fill("IT");


    // await page1.locator("#submit").click({timeout : 1000});
    
    // console.log("After Adding New Details Rows Count: " + await rows.count());

    const column = page1.locator("table thead th");
    console.log("Columns Count: " + await column.count()); //.count()

    //Suppose we want to get the value for this entire first row
    //need to traverse from table to table body to table row

    //first row value:

    const firstRow = rows.first();


    console.log(await firstRow.innerText());

    //Suppose we want to get values from each and every column

    const cells = firstRow.locator("td")

    //nth child : for list / option  - li tag > 'li:nth-child(7)'
    // console.log(await cells.nth(0).innerText());
    // console.log(await cells.nth(1).innerText());
    // console.log(await cells.nth(2).innerText());
    // console.log(await cells.nth(3).innerText());
    // console.log(await cells.nth(4).innerText());
    // console.log(await cells.nth(5).innerText());

    for(let i=0; i < await rows.count() ; i++)
    {
        console.log(await rows.nth(i).innerText());
    }

    //Suppose you want to search any value inside the table

    //Here we have different rows in the table body.

    //hastext - to search the value and it will print the entire row 
    const row = page1.locator("table tbody tr", {hasText: "Gentry"});
    console.log(await row.innerText());

    //Suppose if TR having number - and there are 2 same values found then it will print both row value.


});