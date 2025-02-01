import { createBdd } from 'playwright-bdd';
import { test as base2 } from '../fixtures/steps_fixtures';

import {
    logContext,
    setFeatureTitle,
    setScenarioTitle
} from '../viewHolders/vh_scenario';

import {
    closeScenarioTestsResult,
    startScenarioTestsResult
} from './hooks_reports';

import { TestTypeCommon } from 'playwright-bdd/dist/playwright/types';
import { TestInfo } from 'playwright/test';
import { BddStepInfo } from 'playwright-bdd/src/runtime/bddContext';

const { Before, After, AfterAll, BeforeAll } = createBdd(base2);

/**
 * ✅ This is a common hook for all tests
 */
BeforeAll(async function({ $workerInfo, browser }) {
    // TODO if needed
});

/**
 * ✅ This is a common hook for all tests
 */
Before('', async ({ page, $step, $test, $testInfo, $tags }) => {
    await startScenarioTestsResult();

    // ✅ setup report
    setFeatureTitle($testInfo.titlePath[1]);
    setScenarioTitle($testInfo.titlePath[2]);

    // ✅ log
    hookLog('before', $step, $test, $testInfo, $tags);
});

/**
 * ✅ This is a common hook for all tests
 */
After('', async ({ page, $step, $test, $testInfo, $tags }) => {
    // ✅ close report
    await closeScenarioTestsResult();

    // ✅ log
    hookLog('after', $step, $test, $testInfo, $tags);
});

/**
 * ✅ This is a common hook for all tests
 */
AfterAll(async function({ $workerInfo, browser }) {
    // TODO if needed
});

/**
 * ✅ This is a common hook for all tests
 *
 * @param hookEvent
 * @param bddStepInfo
 * @param test
 * @param testInfo
 * @param tags
 */
function hookLog(
    hookEvent: string,
    bddStepInfo: BddStepInfo,
    test: TestTypeCommon,
    testInfo: TestInfo,
    tags: string[]
) {
    logContext('Hook event captured: ' + ' ' + hookEvent);

    // ✅ TODO in development time, do not print after hook
    if (hookEvent.trim() === 'after') return;

    logContext('TestId: ' + ' ' + testInfo.testId);
    logContext('Annotations: ' + ' ' + testInfo.annotations.toString());
    logContext('Feature: ' + ' ' + testInfo.titlePath[0]);
    logContext('Feature description: ' + ' ' + testInfo.titlePath[1]);
    logContext('Scenario title: ' + ' ' + testInfo.titlePath[2]);
    logContext('Outline Example: ' + ' ' + testInfo.titlePath[3]);
    logContext(
        'Tags (just the first one as example): ' + ' ' + testInfo.tags[0] || 'No tags'
    );
    logContext('Tags: ' + ' ' + testInfo.tags.toString() || 'No tags');
    logContext('Expected status: ' + ' ' + testInfo.expectedStatus);
    logContext('Title: ' + ' ' + testInfo.title);
    logContext('Line: ' + ' ' + testInfo.line.toString());
    logContext('Outline Example - File: ' + ' ' + testInfo.file);
    logContext('snapshotDir: ' + ' ' + testInfo.snapshotDir);
    logContext('outputDir: ' + ' ' + testInfo.outputDir);
}
