import {Given, When, Then} from "../fixtures/fixtures";
import {DataTable} from "playwright-bdd";


Given('I am logged into the contact list app', async ({homePage}, datas: DataTable) => {
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

Given('An existing contact in my contact list', async ({contactPage, contactDetailsPage}, data: DataTable) => {
    let name: string;
    for (const rows of data.hashes()) {
        name = rows.name;
    }
    await contactPage.selectRowName(name);
    await contactDetailsPage.editContact();
});

When('I create a new contact with valid datas', async ({contactPage, addingContactPage}, datas: DataTable) => {
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

When('I update the details of the existing contact with a new name', async ({editContactPage}, datas: DataTable) => {
    let firstName: string;
    let lastName: string;
    for (const rows of datas.hashes()) {
        firstName = rows.firstName;
        lastName = rows.lastName;
    }
    await editContactPage.checkIfFormIsVisible();
    await editContactPage.enterFirstName(firstName);
    await editContactPage.enterLastName(lastName);
    await editContactPage.submitEdit();
});

Then('New contact should appear in the contact list', async ({contactPage}, data: DataTable) => {
    let name: string;
    for (const rows of data.hashes()) {
        name = rows.name;
    }
    await contactPage.checkIfElementIsVisibleOnTable(name);

});

Then('Updated details should be reflected in the contact list', async ({contactDetailsPage, contactPage}, data: DataTable) => {
    let name: string;
    for (const rows of data.hashes()) {
        name = rows.name;
    }
    await contactDetailsPage.returnToContactList();
    await contactPage.checkIfElementIsVisibleOnTable(name);
});

