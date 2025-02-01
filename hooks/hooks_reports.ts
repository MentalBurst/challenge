import TestOutput from '../loggers/TestResult';

import {
    getFeatureTitle,
    getLastStep,
    getScenarioStartMs,
    getScenarioStartNaturalDate,
    getScenarioTitle,
    getStatus,
    setDatetime,
    setDuration,
    setFeatureStartMs,
    setLastStep,
    setScenarioStartMs,
    setScenarioStartNaturalDate,
    setStatus,
    setUnixUTC
} from '../viewHolders/vh_scenario';

/**
 * ✅ This function is called before each scenario starts
 */
export async function startScenarioTestsResult(): Promise<void> {
    const startScenarioUNIXTimeMs = Date.now().toString();
    const naturalDateISO8601 = new Date(Date.now()).toISOString();

    setFeatureStartMs('0');
    setScenarioStartMs(startScenarioUNIXTimeMs);
    setScenarioStartNaturalDate(naturalDateISO8601);
    setLastStep('Starting scenario, no steps performed yet');
    setStatus('Failed');
    setDuration('0');
    setDatetime('0');
    setUnixUTC('0');
}

/**
 * ✅ This function is called after each scenario ends
 */
export async function closeScenarioTestsResult(): Promise<void> {
    const testOutput = new TestOutput();
    const result = getStatus().toLowerCase() === 'passed' ? 'Passed' : 'Failed';
    setStatus(result);

    testOutput.writeJsonToFile(
        getFeatureTitle(),
        getScenarioTitle(),
        getLastStep(),
        getStatus(),
        getScenarioStartMs(),
        getScenarioStartNaturalDate()
    );
}
