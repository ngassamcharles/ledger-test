import {Given, When, Then} from "../fixtures/fixtures";
import credentials from "../models/credentials.json";
import contacts from "../models/contacts.json";


Given('I am logged into the contact list app via api', async ({request, helpers, sharedState}) => {
    const responseAuth = await request.post('users/login', {
        data: credentials
    });

    await helpers.validateResponse(responseAuth, 200);
    const token = await helpers.getToken(responseAuth);
    await helpers.validateToken(token);
    sharedState.token = token;
});

When('I create a new contact with valid datas via api endpoint', async ({
                                                                            request,
                                                                            helpers,
                                                                            sharedState
                                                                        }) => {
    const createContact = await request.post('contacts', {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${sharedState.token}`
        },
        data: contacts
    });
    await helpers.checkGetContactResponse(createContact, contacts);
    sharedState.contactId = await helpers.getContactId(createContact);
});

When('I delete contact with via api', async ({request, sharedState, helpers}) => {
    const deleteContact = await request.delete(`contacts/${sharedState.contactId}`, {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${sharedState.token}`
        }
    });
    await helpers.checkDeleteResponse(deleteContact);
});

Then('New contact should appear on the API response list', async ({request, helpers, sharedState}) => {
    const getContactById = await request.get(`contacts/${sharedState.contactId}`, {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${sharedState.token}`
        }
    });
    await helpers.checkGetContactResponse(getContactById, contacts);
});

Then('Contact should be deleted on API response', async ({request, sharedState, helpers}) => {
    const getContactById = await request.get(`contacts/${sharedState.contactId}`, {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${sharedState.token}`
        }
    });
    await helpers.checkContactNotFound(getContactById);
});

