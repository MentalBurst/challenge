import path from 'path';

// ✅ metrics
export const CONST_METRICS_PATH: string = 'metrics/results/comuns/default';
export const CONST_METRICS_FILE_JSON: string = 'metrics.json';
export const CONST_METRICS_FILE_JS: string = 'metrics.js';

// ✅ image folders, resolutions and collections path
export const BASELINE_RESOLUTION_DIR = path
    .join(__dirname, '..', 'data', 'images', 'baseline/1180x800');

export const BASELINE_DIR = path
    .join(__dirname, '..', 'data', 'images', 'baseline');

export const SCREENSHOT_DIR = path
    .join(__dirname, '..', 'data', 'images', 'screenshots');

export const CAPTURE_DIR = path
    .join(__dirname, '..', 'data', 'images', 'capture');

export const DIFF_TO_COMPARE_IMAGES_DIR = path
    .join(__dirname, '..', 'data', 'images', 'diffs');

export const DIFF_TO_COMPARE_IMAGES_AND_LOCATE_AREA_DIR = path
    .join(__dirname, '..', 'data', 'images', 'diffs-to-locate-area');

// ✅ image names
export const BASE_SPORTS_IMAGE = 'baseline-sports.png';
export const BASE_SPORTS_AFTER_REGISTRATION_IMAGE = 'baseline-sports-after-registration.png';
export const BASE_SPORTS_TENNIS_IMAGE = 'baseline-sports-tennis.png';
export const BASE_SPORTS_SKILLS_IMAGE = 'baseline-skills.png';
export const BASE_SPORTS_SKILLS_INPUT_BR_JOG_IMAGE = 'baseline-skills-nr-jogadores.png';

