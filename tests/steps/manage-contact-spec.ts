import {Given, When, Then} from "../fixtures/fixtures";
import {DataTable} from "playwright-bdd";
import {HomePage} from "../pages/home-page";
import {ContactPage} from "../pages/contact-page";
import {AddingContactPage} from "../pages/adding-contact.page";
import {ContactDetailsPage} from "../pages/contact-details.page";
import {EditContactPage} from "../pages/edit-contact.page";
import {expect} from "@playwright/test";


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

Given('An existing contact in my contact list', async ({page}, data: DataTable) => {
    let name: string;
    for (const rows of data.hashes()) {
        name = rows.name;
    }
    const contactPage = new ContactPage(page);
    const contactDetailsPage = new ContactDetailsPage(page);
    await contactPage.selectRowName(name);
    await contactDetailsPage.editContact();
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
        streetAddress1 = rows.streetAddress1;
        streetAddress2 = rows.streetAddress2;
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

When('I update the details of the existing contact with a new name', async ({page}, datas: DataTable) => {
    let firstName: string;
    let lastName: string;
    for (const rows of datas.hashes()) {
        firstName = rows.firstName;
        lastName = rows.lastName;
    }
    const editContactPage = new EditContactPage(page);
    await editContactPage.checkIfFormIsVisible();
    await editContactPage.enterFirstName(firstName);
    await editContactPage.enterLastName(lastName);
    await editContactPage.submitEdit();
});

Then('New contact should appear in the contact list', async ({page}, data: DataTable) => {
    let name: string;
    for (const rows of data.hashes()) {
        name = rows.name;
    }
    const contactPage = new ContactPage(page);
    await contactPage.checkIfElementIsVisibleOnTable(name);

});

Then('Updated details should be reflected in the contact list', async ({page}, data: DataTable) => {
    let name: string;
    for (const rows of data.hashes()) {
        name = rows.name;
    }
    const contactPage = new ContactPage(page);
    const contactDetailPage = new ContactDetailsPage(page);
    await contactDetailPage.returnToContactList();
    await contactPage.checkIfElementIsVisibleOnTable(name);
});

