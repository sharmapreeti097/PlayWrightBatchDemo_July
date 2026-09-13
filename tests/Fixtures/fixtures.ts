//We wantes to have commom place where to initialize the browser and page object
// and pass it to the test case, so that we can use it in the test case.
// This is called fixture in playwright.

//We are using fixture-to declare the objects for Pages,whatever pages we have created under
// the page folder.
//What we will declare in fixtures?

//fixture is kind of common place. That's it to declare the objects and then we will be importing
// that fixture inside our spec files so that it is very easy.
//So, if you want, we don't need to like specifically mention all the objects inside the display
// inside our spec file. Instead,we will be declaring all the page objects inside the fixture and then
//we will be importing that fixture and using that page objects.

//In this case,like we have two pages,right?so, what ate the objects we are creating,like for the
//login page and the product landing page? those objects will be created and then this fixture class
//will be imported inside the login spec.ts so, that it will get all the object from one single class.

//So, we don't need to import page,login page, product landing page and then we don't need to create
//one new object for all the classes.

//Suppose let's take one scenario is calling all the five pages,then why do we need to call all the
// five pages,import all the five pages inside one spec file?and why do we need to write all the page
// objects for each and every pages. Why we wanted to do for all those pages instead?
//If you are doing like that,what happens is we will be sending different,different pages, which is
// nothing but different,different browser tabs. We won't be sending the common browser tab instead,
// it will create differnt,different browser tabs and it will execute the scenarios different differently.

//It won't be running sequentially,it will run parallelly in different-different browser tabs.
//If you do in this way,we are having we are passing the base page one browser session to all the page
// classes and then we are declaring all the objects inside one fixture classes and then we are
// importing that fixture class inside the spec file, and we are using it inside our test scenarios.
//
//=================================================================================================

//Syntax : 

import { test as base } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

import { ProductLandingPage } from '../../pages/ProductLandingPage';

import { CartPage } from '../../pages/AddToCartPage';

type PageFixtures = {
    loginPage: LoginPage;
    productLandingPage: ProductLandingPage;
    cartPage: CartPage;

};

export const test = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) =>
    {
        await use(new LoginPage(page));
    },
    productLandingPage: async ({ page }, use) =>
    {
        await use(new ProductLandingPage(page));
    },

    cartPage: async ({ page }, use) =>
    {
        await use(new CartPage(page));
    }
});

export { expect } from '@playwright/test';
export{ request } from '@playwright/test' //For API
export default test;
