import { Locator, Page } from "@playwright/test";

export class ContactPage {
    readonly page: Page;
    readonly btnAddingNewContact: Locator;
    readonly btnLogout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnAddingNewContact = page.locator('#add-contact');
        this.btnLogout = page.locator('#logout');
    }
}