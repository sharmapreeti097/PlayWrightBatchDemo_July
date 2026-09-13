import type {Locator, Page} from '@playwright/test'
import { BasePage } from './BasePage';

export class CartPage extends BasePage
{
    readonly AddToCartButton: Locator;
    readonly CartBadge: Locator;

    constructor(page: Page)
    {
        super(page);
        this.AddToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.CartBadge = page.locator('.shopping_cart_badge');
    }

    async addToCartBasedonProductName(): Promise<void>
    {
        //await this.AddToCartButton.waitFor({ state: 'visible' });
        await this.AddToCartButton.click();
    }
    
    async getCartBadgeCount(): Promise<number>
    {
        const badgeCountText = await this.CartBadge.textContent();
        return badgeCountText ? parseInt(badgeCountText): 0;
    }
}