import {Locator, Page} from "@playwright/test";
import {BasePage} from "./basePage";

export class ContactDetailsPage extends BasePage {
    readonly btnEditContact: Locator;
    readonly btnDeleteContact: Locator;
    readonly btnReturnToContactList: Locator;

    constructor(page: Page) {
        super(page);
        this.btnEditContact = page.locator('#edit-contact');
        this.btnDeleteContact = page.locator('#delete');
        this.btnReturnToContactList = page.locator('#return');
    }

    async editContact(): Promise<void> {
        await this.btnEditContact.click();
    }

    async deleteContact(): Promise<void> {
        await this.btnDeleteContact.click();
    }

    async returnToContactList(): Promise<void> {
        await this.btnReturnToContactList.click();
    }

}