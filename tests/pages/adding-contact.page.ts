import {Locator, Page} from "@playwright/test";
import {BasePage} from "./basePage";

export class AddingContactPage extends BasePage {
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
    readonly btnLogout: Locator;

    constructor(page: Page) {
        super(page);
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
        this.btnLogout = page.locator('#logout');

    }

    async fillAddingNewContactForm(firstName: string,
                                   lastName: string,
                                   birthDate: string,
                                   email: string,
                                   phone: string,
                                   streetAddress1: string,
                                   streetAddress2: string,
                                   city: string,
                                   state: string,
                                   postalCode: string,
                                   country: string): Promise<void> {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterBirthDate(birthDate);
        await this.enterEmail(email);
        await this.enterPhoneNumber(phone);
        await this.enterStreetAddress1(streetAddress1);
        await this.enterStreetAddress2(streetAddress2);
        await this.enterCity(city);
        await this.enterStateOfProvince(state);
        await this.enterPostalCode(postalCode);
        await this.enterCountry(country);

    }

    private async enterFirstName(name: string): Promise<void> {
        await this.inputFirstName.fill(name);
    }

    private async enterLastName(name: string): Promise<void> {
        await this.inputLastName.fill(name);
    }

    private async enterBirthDate(date: string): Promise<void> {
        await this.inputBirthDate.fill(date);
    }

    private async enterEmail(email: string): Promise<void> {
        await this.inputEmail.fill(email);
    }

    private async enterPhoneNumber(phoneNumber: string): Promise<void> {
        await this.inputPhoneNumber.fill(phoneNumber);
    }

    private async enterStreetAddress1(address: string): Promise<void> {
        await this.inputStreetAddress1.fill(address);
    }

    private async enterStreetAddress2(address: string): Promise<void> {
        await this.inputStreetAddress2.fill(address);
    }

    private async enterCity(city: string): Promise<void> {
        await this.inputCity.fill(city);
    }

    private async enterStateOfProvince(stateOrProvince: string): Promise<void> {
        await this.inputStateOrProvince.fill(stateOrProvince);
    }

    private async enterPostalCode(code: string): Promise<void> {
        await this.inputPostalCode.fill(code);
    }

    private async enterCountry(country: string): Promise<void> {
        await this.inputCountry.fill(country);
    }

    async submitContact(): Promise<void> {
        await this.btnSubmit.click();
    }

    async cancel(): Promise<void> {
        await this.btnCancel.click();
    }
}