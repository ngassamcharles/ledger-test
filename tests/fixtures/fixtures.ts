import {test as base, createBdd} from 'playwright-bdd';
import {HomePage} from "../pages/home-page";
import {AddingContactPage} from "../pages/adding-contact.page";
import {ContactPage} from "../pages/contact-page";
import {ContactDetailsPage} from "../pages/contact-details.page";
import {EditContactPage} from "../pages/edit-contact.page";
import {SignUpPage} from "../pages/sign-up-page";


type Fixtures = {
    homePage: HomePage;
    contactPage: ContactPage;
    addingContactPage: AddingContactPage;
    contactDetailsPage: ContactDetailsPage;
    editContactPage: EditContactPage;
    signUpPage: SignUpPage;
}

export const test = base.extend<Fixtures>({
    homePage: async ({page}, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    contactPage: async ({page}, use) => {
        const contactPage = new ContactPage(page);
        await use(contactPage);
    },
    addingContactPage: async ({page}, use) => {
        const addingContactPage = new AddingContactPage(page);
        await use(addingContactPage);
    },
    contactDetailsPage: async ({page}, use) => {
        const contactDetailsPage = new ContactDetailsPage(page);
        await use(contactDetailsPage);
    },
    editContactPage: async ({page}, use) => {
        const editContactPage = new EditContactPage(page);
        await use(editContactPage);
    },
    signUpPage: async ({page}, use) => {
        const signUpPage = new SignUpPage(page);
        await use(signUpPage);
    },
});

export const {Given, When, Then} = createBdd(test);
