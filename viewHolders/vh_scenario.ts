import { createBdd } from 'playwright-bdd';
import { test as base2 } from '../fixtures/steps_fixtures';
import '../hooks/hooks_common';
import { str2AsciiBlue, str2AsciiGreen, str2AsciiYellow } from '../helpers/AsciiHelper';
import { logger } from '../loggers/WinstonLogger';

const { Given, When, Then } = createBdd(base2);

export let featureTitle: string = '';
export let featureStartMs: string = '';
export let scenarioTitle: string = '';
export let scenarioStartMs: string = '';
export let scenarioStartNaturalDate: string = '';
export let lastStep: string = '';
export let status: string = '';
export let duration: string = '';
export let datetime: string = '';
export let unixUTC: string = '';
export let currentStepName: string = '';
export let token: string = '';

export function setFeatureTitle(value: string) {
    featureTitle = value;
}

export function getFeatureTitle(): string {
    return featureTitle;
}

export function setFeatureStartMs(value: string) {
    featureStartMs = value;
}

export function getFeatureStartMs(): string {
    return featureStartMs;
}

export function setScenarioStartMs(value: string) {
    scenarioStartMs = value;
}

export function getScenarioStartMs(): string {
    return scenarioStartMs;
}

export function setScenarioStartNaturalDate(value: string) {
    scenarioStartNaturalDate = value;
}

export function getScenarioStartNaturalDate(): string {
    return scenarioStartNaturalDate;
}

export function setScenarioTitle(value: string) {
    scenarioTitle = value;
}

export function getScenarioTitle(): string {
    return scenarioTitle;
}

export function setLastStep(value: string) {
    const now = new Date();

    // HH:MM:SS
    const time = now.toTimeString().split(' ')[0];
    lastStep = value;
    console.log(str2AsciiBlue(time) + ' ' + str2AsciiGreen('running:') + ' ' + str2AsciiYellow(value));
    logger.info(time + ' ' + 'running:' + ' ' + value);
}

export function logContext(value: string) {
    const now = new Date();

    // HH:MM:SS
    const time = now.toTimeString().split(' ')[0];
    logger.info(time + ' ' + 'running:' + ' ' + value);
}

export function getLastStep(): string {
    return lastStep;
}

export function setStatus(value: string) {
    status = value;
}

export function getStatus(): string {
    return status;
}

export function setDuration(value: string) {
    duration = value;
}

export function getDuration(): string {
    return duration;
}

export function setDatetime(value: string) {
    datetime = value;
}

export function getDatetime(): string {
    return datetime;
}

export function setUnixUTC(value: string) {
    unixUTC = value;
}

export function getUnixUTC(): string {
    return unixUTC;
}

export function setCurrentStepName(value: string) {
    currentStepName = value;
}

export function getCurrentStepName(): string {
    return currentStepName;
}

export function setToken(value: string) {
    token = value;
}

export function getToken(): string {
    return token;
}
