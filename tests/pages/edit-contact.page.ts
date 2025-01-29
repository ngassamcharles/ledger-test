import {expect, Locator, Page} from "@playwright/test";
import {BasePage} from "./basePage";

export class EditContactPage extends BasePage {
    readonly formEditContact: Locator;
    readonly inputFirstName: Locator;
    readonly inputLastName: Locator;
    readonly inputBirthDate: Locator;
    readonly inputEmail: Locator;
    readonly inputPhoneNumber: Locator;
    readonly inputStreetAddress1: Locator;
    readonly inputStreetAddress2: Locator;
    readonly inputCity: Locator;
    readonly inputStateOrProvince: Locator;
    readonly inputPostalCode: Locator;
    readonly inputCountry: Locator;
    readonly btnSubmit: Locator;
    readonly btnCancel: Locator;

    constructor(page: Page) {
        super(page);
        this.formEditContact = page.locator('#edit-contact');
        this.inputFirstName = page.locator('#firstName');
        this.inputLastName = page.locator('#lastName');
        this.inputBirthDate = page.locator('#birthdate');
        this.inputEmail = page.locator('#email');
        this.inputPhoneNumber = page.locator('#phone');
        this.inputStreetAddress1 = page.locator('#street1');
        this.inputStreetAddress2 = page.locator('#street2');
        this.inputCity = page.locator('#city');
        this.inputStateOrProvince = page.locator('#stateProvince');
        this.inputPostalCode = page.locator('#postalCode');
        this.inputCountry = page.locator('#country');
        this.btnSubmit = page.locator('#submit');
        this.btnCancel = page.locator('#cancel');

    }

    async enterFirstName(name: string): Promise<void> {
        await this.inputFirstName.fill(name);
    }

    async enterLastName(name: string): Promise<void> {
        await this.inputLastName.fill(name);
    }

    async submitEdit(): Promise<void> {
        await this.btnSubmit.click();

    }

    async cancel(): Promise<void> {
        await this.btnCancel.click();
    }

    async checkIfFormIsVisible(): Promise<void> {
        await expect(this.formEditContact)
            .toBeVisible()
            .catch((error) => {
                throw new Error(`Form is not visible : ${error}`);
            });
    }
}