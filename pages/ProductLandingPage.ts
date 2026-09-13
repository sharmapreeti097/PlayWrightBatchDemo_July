import type {Locator, Page} from '@playwright/test'
import { BasePage } from './BasePage';

export class ProductLandingPage extends BasePage
{
    readonly ProductTitle: Locator;

    constructor(page: Page)
    {
        super(page);
        this.ProductTitle = page.locator("//span[text()='Products']");
    }

   async VerifyProductPageTitle() : Promise<boolean>
    {
        return await this.ProductTitle.isVisible();
    }
}
