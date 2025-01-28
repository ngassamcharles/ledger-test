import {Given, When, Then} from "../fixtures/fixtures";
import {DataTable} from "playwright-bdd";
import {HomePage} from "../pages/home-page";
import {SignupPage} from "../pages/signup-page";
import {ContactPage} from "../pages/contact-page";


Given('I am on the contact list app home page', async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.openContactApp();
});

When('I register as a new user by signing up with these datas', async ({page}, datas: DataTable) => {
    const homePage = new HomePage(page);
    const signUpPage = new SignupPage(page);
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

Then('User should be successfully registered', async ({page}, datas: DataTable) => {
    const homePage = new HomePage(page);
    const contactPage = new ContactPage(page);
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

