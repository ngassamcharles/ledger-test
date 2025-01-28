import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly inputEmail: Locator;
    readonly inputPassword: Locator;
    readonly btnSubmit: Locator;
    readonly btnSignUp: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputEmail = page.locator('#email');
        this.inputPassword = page.locator('#password');
        this.btnSubmit = page.locator('#submit');
        this.btnSignUp = page.locator('#signup');
    }
}