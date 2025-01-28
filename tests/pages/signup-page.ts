import {Locator, Page} from "@playwright/test";

export class SignupPage {
    readonly inputFirstName: Locator;
    readonly inputLastName: Locator;
    readonly inputEmail: Locator;
    readonly inputPassword: Locator;
    readonly btnSubmit: Locator;
    readonly btnCancel: Locator;

    constructor(page: Page) {
        this.inputFirstName = page.locator('#firstName');
        this.inputLastName = page.locator('#lastName');
        this.inputEmail = page.locator('#email');
        this.inputPassword = page.locator('#password');
        this.btnSubmit = page.locator('#submit');
        this.btnCancel = page.locator('#cancel');
    }

    async fillSignUpForm(firstName: string, lastName: string, email: string, password: string): Promise<void> {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterEmail(email);
        await this.enterPassword(password);
    }

    private async enterFirstName(name: string): Promise<void> {
        await this.inputFirstName.fill(name);
    }

    private async enterLastName(name: string): Promise<void> {
        await this.inputLastName.fill(name);
    }

    private async enterEmail(email: string): Promise<void> {
        await this.inputEmail.fill(email);
    }

    private async enterPassword(password: string): Promise<void> {
        await this.inputPassword.fill(password);
    }

    async submitSignUp(): Promise<void> {
        await this.btnSubmit.click();
    }

    async cancelSignUp(): Promise<void> {
        await this.btnCancel.click();
    }
}