import {Locator, Page} from "@playwright/test";

export class BasePage {
    protected readonly page: Page;
    readonly btnLogout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnLogout = page.locator('#logout');
    }

    async logout(): Promise<void> {
        await this.btnLogout.click();
    }
}