import type {Locator, Page} from '@playwright/test'
import { BasePage } from './BasePage';

export class LoginPage extends BasePage
{
    readonly UsernameInput: Locator;
    readonly PasswordInput: Locator;
    readonly LoginButton: Locator;

    constructor(page: Page)
    {
        super(page);
        this.UsernameInput = page.locator('#user-name');
        this.PasswordInput = page.locator('#password');
        this.LoginButton = page.locator('#login-button');
    }

    //Login scenario
    //Step 1: launch the url
    //Step 2: enter username and password
    //Step 3: click on login button

    //Note: we are not writing separate method for valid login versus invalid login. We are
    //just having method called lgin.So, we will be just passing valid or invalid credentials.

    async login(username: string, password: string): Promise<void>
    {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton(); 
    }

    async enterUsername(username: string): Promise<void>
    {
        await this.UsernameInput.fill(username);
    }
    async enterPassword(password: string): Promise<void>
    {
        await this.PasswordInput.fill(password);
    }
    async clickLoginButton(): Promise<void>
    {
        await this.LoginButton.click();
    }

    async isLoginSuccessful(): Promise<boolean>
    {
        //Implement logic to check if login was successful, e.g. by checking for a specific
        //element on the page is displayed or not after loggin. We can also check title of
        // the page. We can also check URL of the next page.
        // (https://www.saucedemo.com/inventory.html)

        return await this.page.locator('selector-for-success-element').isVisible();
    }

}