import {Locator, Page} from "@playwright/test";
import {BasePage} from "./basePage";

export class ContactPage extends BasePage {
    readonly btnAddingNewContact: Locator;

    constructor(page: Page) {
        super(page);
        this.btnAddingNewContact = page.locator('#add-contact');
    }

    async addingNewContact(): Promise<void> {
        await this.btnAddingNewContact.click();
    }
}