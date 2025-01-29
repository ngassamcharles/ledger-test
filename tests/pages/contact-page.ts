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
        }).catch((error) => {
            throw new Error(`Button adding new contact is not visible : ${error}`);
        });
        ;
        await expect(this.contactListTable).toBeVisible({
            timeout: 3000
        }).catch((error) => {
            throw new Error(`Contact List is not visible : ${error}`);
        });
        ;
    }

    async checkIfElementIsVisibleOnTable(name: string): Promise<void> {
        await expect(this.contactListTable
            .locator('tr')
            .locator('td', {hasText: name})
            .first()
        ).toBeVisible({
            timeout: 2000
        }).catch((error) => {
            throw new Error(`Element is not visible in the list : ${error}`);
        });
    }

    async selectRowName(name: string): Promise<void> {
        await this.contactListTable
            .locator('tr')
            .locator('td', {hasText: name})
            .first()
            .click();
    }


}