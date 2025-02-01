import { defineConfig, devices } from '@playwright/test';
import { cucumberReporter, defineBddConfig } from 'playwright-bdd';
import { getTimestampedFilename } from './helpers/DateHelper';

const cucumberTimestampedReportPath = getTimestampedFilename('reports/cucumber/report');

const testDir = defineBddConfig({
    paths: ['features/*.feature'],
    require: ['steps/*.ts'],
    importTestFrom: 'fixtures/steps_fixtures.ts',
    quotes: 'single'
});

export default defineConfig({
    testDir,
    timeout: 180000, // global timeout
    reporter: [
        cucumberReporter('html', { outputFile: cucumberTimestampedReportPath }),
        ['allure-playwright', {

            // folder results
            outputFolder: 'allure-results',

            // optional: include suite title
            suiteTitle: true
        }],
        ['list']
    ],
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],

                // :: Other Proportional Resolutions:
                // :: Proportional Width x Height for the proposed image match navigation
                // :: 1180	800 | 1328	900 | 1475	1000 | 1623	1100 | 1770	1200 | 1918	1300 | 2000	1356
                // :: Each step increases the resolution proportionally while keeping the same aspect ratio (1.475)
                viewport: {
                    width: 1180,
                    height: 800
                },

                // grant clipboard permissions
                permissions: ['clipboard-read', 'clipboard-write'],

                // video recording for all tests, can also be 'on-first-retry' or 'off' for no video
                video: 'on',

                // trace record trace for each test
                trace: 'on'

            }
        }
    ]
});
