import {Locator, Page} from "@playwright/test";

export class HomePage {
    readonly inputEmail: Locator;
    readonly inputPassword: Locator;
    readonly btnSubmit: Locator;
    readonly btnSignUp: Locator;

    constructor(page: Page) {
        this.inputEmail = page.locator('#email');
        this.inputPassword = page.locator('#password');
        this.btnSubmit = page.locator('#submit');
        this.btnSignUp = page.locator('#signup');
    }

    async entrerEmail(email: string): Promise<void> {
        await this.inputEmail.fill(email);
    }

    async enterPassword(password: string): Promise<void> {
        await this.inputPassword.fill(password);
    }

    async submit(): Promise<void> {
        await this.btnSubmit.click();
    }

    async signUp(): Promise<void> {
        await this.btnSignUp.click();
    }
}