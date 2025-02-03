import {defineConfig, devices} from '@playwright/test';
import {defineBddConfig} from "playwright-bdd";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
const testDir = defineBddConfig({
    features: 'tests/features/*.feature',
    steps: [
        'tests/steps/*-spec.ts',
        'tests/fixtures/*.ts'
    ],
});
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir,
    /* Run tests in files in parallel */
    fullyParallel: false,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: 0,
    /* Opt out of parallel tests on CI. */
    workers: undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [['html', {open: 'never'}]],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        baseURL: 'https://thinking-tester-contact-list.herokuapp.com/',
        trace: 'on-first-retry',
        screenshot: "only-on-failure",
        extraHTTPHeaders: {
            'Accept': 'application/json'
        }
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'api',
            use: {
                browserName: undefined,
                baseURL: 'https://thinking-tester-contact-list.herokuapp.com/'
            },
            grep: /@api/,
        },
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
            grep: /^(?!.*@api)/
        },
        {
            name: 'firefox',
            use: {...devices['Desktop Firefox']},
            grep: /^(?!.*@api)/
        },
        {
            name: 'webkit',
            use: {...devices['Desktop Safari']},
            grep: /^(?!.*@api)/
        }
    ],
});
