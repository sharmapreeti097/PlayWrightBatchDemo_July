//Pagge Object Model - POM Design Pattern


//Login 1 - valild credentials
//Step 1: launch the url
//Step 2: enter username and password
//Step 3: click on login button
//Step 4: Verify the title of the page / LoggedIn Successfully

//Login2 - Invalid Credentials
//Step 1: launch the url
//Step 2: enter username and password
//Step 3: click on login button
//Step 4: Verify the login not Successfully

//===========================================

//Add to cart scenario : 

//Step 1: launch the url
//Step 2: enter username and password
//Step 3: click on login button
//(These 3 steps will remain common for each and every scenario)-what is the purpose of
// writing the same code again and again and declare the locators again and again.
// So, what we will do is with POM.

//Step 4: Select the product and click on add to cart button.
// Step 5: in add to cart to verify price for multiple items(calculation part).

//===========================================

//without POM - we will write the test cases in single file
//Disadvantage -we won't reuse the code again and again. If we have to write the test cases
// for multiple pages,we  will have to write the code agin and again.



//with POM - we will create a separate class for each page and write the test cases in separate file.


//Page Class
    
    //1. LoginPage - LoginPage.ts -> declare locator(username,password,login btn) and
    //methods for login page (open url, enter username,enter password,click on login button)
    
    //2. Add to Cart - AddtoCartPage.ts
    
    //3. CheckoutPage - CheckoutPage.ts

//Test Class
    //1. LoginTest - LoginTest.ts > write the test cases for login page
    //2. AddtoCartTest - AddtoCartTest.ts > write the test cases for add to cart page
    //3. CheckoutTest - CheckoutTest.ts > write the test cases for checkout page