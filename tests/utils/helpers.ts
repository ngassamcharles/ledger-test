import {APIResponse, expect} from "@playwright/test";
import contacts from "../models/contacts.json";

type Contact = typeof contacts;

export class Helpers {
    async validateResponse(response: APIResponse, expectedStatus: number): Promise<void> {
        expect(response.status()).toBe(expectedStatus);
        expect(response.ok()).toBeTruthy();
    }

    async getToken(response: APIResponse): Promise<string> {
        const responseBody = await response.json();
        expect(responseBody.token).toBeDefined();
        expect(responseBody.token).not.toBe('');
        return responseBody.token;
    }

    async getContactId(response: APIResponse): Promise<string> {
        const responseBody = await response.json();
        return responseBody._id;
    }

    async validateToken(token: string): Promise<void> {
        const parts = token.split('.');
        expect(parts.length).toBe(3);
    }

    async checkGetContactResponse(response: APIResponse, datas: Contact): Promise<void> {
        const body = await response.json();
        expect(body).toEqual(expect.objectContaining(datas));
    }

    async checkDeleteResponse(response: APIResponse): Promise<void> {
        const body = await response.text();
        expect(body).toBe('Contact deleted');
    }

    async checkContactNotFound(response: APIResponse): Promise<void> {
        expect(response.status()).toBe(404);
    }
}