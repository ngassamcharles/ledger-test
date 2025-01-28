import {Locator, Page} from "@playwright/test";

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

    async openContactApp(): Promise<void> {
        await this.page.goto('https://thinking-tester-contact-list.herokuapp.com/')
    }

    async fillSignInForm(email: string, password: string): Promise<void> {
        await this.entrerEmail(email);
        await this.enterPassword(password);
    }

    private async entrerEmail(email: string): Promise<void> {
        await this.inputEmail.fill(email);
    }

    private async enterPassword(password: string): Promise<void> {
        await this.inputPassword.fill(password);
    }

    async submit(): Promise<void> {
        await this.btnSubmit.click();
    }

    async signUp(): Promise<void> {
        await this.btnSignUp.click();
    }
}