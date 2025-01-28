import {expect, Locator, Page} from "@playwright/test";
import {BasePage} from "./basePage";

export class ContactPage extends BasePage {
    readonly btnAddingNewContact: Locator;
    readonly contactListTable: Locator;

    constructor(page: Page) {
        super(page);
        this.btnAddingNewContact = page.locator('#add-contact');
        this.contactListTable = page.locator('#myTable');
    }

    async addingNewContact(): Promise<void> {
        await this.btnAddingNewContact.click();
    }

    async openContactDetails(): Promise<void> {
        await this.contactListTable.click();
    }

    async verifyUserIsLoggedIn(): Promise<void> {
        await expect(this.btnAddingNewContact).toBeVisible({
            timeout: 3000
        });
        await expect(this.contactListTable).toBeVisible({
            timeout: 3000
        });
    }
}