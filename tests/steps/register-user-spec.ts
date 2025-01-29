import {Given, When, Then} from "../fixtures/fixtures";
import {DataTable} from "playwright-bdd";


Given('I am on the contact list app home page', async ({homePage}) => {
    await homePage.openContactApp();
});

When('I register as a new user by signing up with these datas', async ({homePage, signUpPage}, datas: DataTable) => {
    await homePage.signUp();
    let firstName: string;
    let lastName: string;
    let email: string;
    let password: string;
    for (const rows of datas.hashes()) {
        firstName = rows.firstName;
        lastName = rows.lastName;
        email = rows.email;
        password = rows.password;
    }
    await signUpPage.fillSignUpForm(
        firstName,
        lastName,
        email,
        password);

    await signUpPage.submitSignUp();
});

Then('User should be successfully registered', async ({homePage, contactPage}, datas: DataTable) => {
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
    await contactPage.verifyUserIsLoggedIn();
});

