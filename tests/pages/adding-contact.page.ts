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
}