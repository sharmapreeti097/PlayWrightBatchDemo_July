//.spec classes - spec class is nothing but the test
//Page class will have only the elements. i.e. Page elements,which is called as a locator there
//and then the methods, functions, whatever is going to be performed on the particular page.

// Login
// 1. TC_LOGIN_001 — Log in with valid credentials and land on the Products page.
// 2. TC_LOGIN_002 — Attempt login with invalid username/password and verify the error message is shown.
// 3. TC_LOGIN_003 — Attempt login with a locked-out user and verify the locked-out-specific error message.


import { test,expect, request } from "../Fixtures/fixtures";

test.describe("Saucedemo -Login",async()=>{

    test("TC_LOGIN_001 — Log in with valid credentials and land on the Products page.",async({ loginPage, productLandingPage })=>{
        
        await test.step("Step 1: Navigate to the login page", async()=>{
            await loginPage.goto("https://www.saucedemo.com/");
        })

        await test.step("Step 2: Enter valid username and password", async()=>{
            await loginPage.enterUsername("standard_user");
            await loginPage.enterPassword("secret_sauce");
        })

        await test.step("Step 3: Click on the login Button", async()=>{
            await loginPage.clickLoginButton();
        })

        await test.step("Step 4: Verify that the user is redirected to the Product page", async()=>{
            const isLoginSuccessful = await productLandingPage.VerifyProductPageTitle();
            expect(isLoginSuccessful).toBe(true);
        });

    });

    test("TC_LOGIN_002 — Log in with invalid credentials and verify error message.",async({ loginPage, productLandingPage })=>{
        
        await test.step("Step 1: Navigate to the login page", async()=>{
            await loginPage.goto("https://www.saucedemo.com/");
        })

        await test.step("Step 2: Enter invalid username and password", async()=>{
            await loginPage.enterUsername("invalid_user");
            await loginPage.enterPassword("invalid_password");
        })

        await test.step("Step 3: Click on the login Button", async()=>{
            await loginPage.clickLoginButton();
        })

        await test.step("Step 4: Verify that the user is redirected to the Product page", async()=>{
            const isLoginSuccessful = await productLandingPage.VerifyProductPageTitle();
            expect(isLoginSuccessful).toBe(false);
        });

    });
        
});

