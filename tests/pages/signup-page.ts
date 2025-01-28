import { Locator, Page } from "@playwright/test";

export class SignupPage {
    readonly page: Page;
    readonly inputFirstName: Locator;
    readonly inputLastName: Locator;
    readonly inputEmail: Locator;
    readonly inputPassword: Locator;
    readonly btnSubmit: Locator;
    readonly btnCancel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputFirstName = page.locator('#firstName');
        this.inputLastName = page.locator('#lastName');
        this.inputEmail = page.locator('#email');
        this.inputPassword = page.locator('#password');
        this.btnSubmit = page.locator('#submit');
        this.btnCancel = page.locator('#cancel');
    }
}