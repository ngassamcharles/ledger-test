import {Given, When, Then} from "../fixtures/fixtures";
import {DataTable} from "playwright-bdd";
import {HomePage} from "../pages/home-page";
import {ContactPage} from "../pages/contact-page";
import {AddingContactPage} from "../pages/adding-contact.page";


Given('I am logged into the contact list app', async ({page}, datas: DataTable) => {
    const homePage = new HomePage(page);
    let email: string;
    let password: string;
    for (const rows of datas.hashes()) {
        email = rows.email;
        password = rows.password;
    }
    await homePage.openContactApp();
    await homePage.fillSignInForm(
        email,
        password
    );
    await homePage.submit();
});

Given('An existing contact in my contact list', async ({page}) => {

});

When('I create a new contact with valid datas', async ({page}, datas: DataTable) => {
    let firstName: string;
    let lastName: string;
    let birthDate: string;
    let email: string;
    let phone: string;
    let streetAddress1: string;
    let streetAddress2: string;
    let city: string;
    let state: string;
    let postalCode: string;
    let country: string;
    for (const rows of datas.hashes()) {
        firstName = rows.firstName;
        lastName = rows.lastName;
        birthDate = rows.birthDate;
        email = rows.email;
        phone = rows.phone;
        streetAddress1 = rows.streetAdress1;
        streetAddress2 = rows.streetAdress2;
        city = rows.city;
        state = rows.state;
        postalCode = rows.postalCode;
        country = rows.country
    }
    const contactPage = new ContactPage(page);
    const addingContactPage = new AddingContactPage(page);
    await contactPage.addingNewContact();
    await addingContactPage.fillAddingNewContactForm(
        firstName,
        lastName,
        birthDate,
        email,
        phone,
        streetAddress1,
        streetAddress2,
        city,
        state,
        postalCode,
        country);
    await addingContactPage.submitContact();

});

When('I update the details of the existing contact', async ({page}, datas: DataTable) => {

});

Then('New contact should appear in the contact list', async ({page}, datas: DataTable) => {

});

Then('Updated details should be reflected in the contact list', async ({page}, datas: DataTable) => {

});

