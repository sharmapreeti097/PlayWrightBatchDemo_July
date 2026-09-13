import {test, expect , Browser, Page , Locator, BrowserContext} from "@playwright/test"
import {firefox, webkit, chromium} from "@playwright/test"

test("File Upload",async()=>{

    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const context: BrowserContext = await browser.newContext();
    const page1: Page = await context.newPage();
    

    //1 tip - input tag, type = file, 
    //2 tip - for single - no multiple keyword.
    //3 tip - if tag having multiple keyword/attributes in input tag then we can upload multiple files

    //Single file upload - one input then we have to provide a single string.
    //await page1.goto('https://cgi-lib.berkeley.edu/ex/fup.html');
    //await page1.locator("//input[@name='upfile']").setInputFiles("D:\\Image\\sampleImage.jpg");

    //Multiple file upload-provide multiple inputs,then we have to pass
    //all the file path as a string array

    await page1.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page1.waitForTimeout(1000);
    //so we to have to pass all the inputs inside and string,like pdf,html files,.jpg anything
    await page1.locator("//input[@name='filesToUpload']").setInputFiles(["D:\\Image\\sampleImage.jpg","D:\\Image\\1.jpg","D:\\Image\\2.jpg"]);

    await page1.waitForTimeout(10000);
    console.log("Deleting uploaded files");
    
    //Suppose if you want to cancel all this upload,then
    //we can directly pass set input files.
    //onceafter upload,we can directly call empty array (setInputfiles([])) - to delete all the uploaded files
    
    page1.locator("//input[@name='filesToUpload']").setInputFiles([]);

    await page1.waitForTimeout(10000);

    await page1.close();

});