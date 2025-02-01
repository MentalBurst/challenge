import path from 'path';
import fs from 'fs';
import type { default as PixelmatchType } from 'pixelmatch';
import { setLastStep } from '../viewHolders/vh_scenario';

const sharp = require('sharp');
const { PNG } = require('pngjs');

let pixelmatch: typeof PixelmatchType;

(async () => {
    pixelmatch = (await import('pixelmatch')).default;
})();

/**
 * Compares two images based on parameter maxDiffPixels ratio and returns the coordinates of the center of the detected difference area.
 *
 * @param baselineImgPath
 * @param baselineCompareImgPath
 * @param diffDir
 * @param maxDiffPixels
 */
export async function getClickCoordinatesBasedOnImageDiff(
    baselineImgPath: any,
    baselineCompareImgPath: any,
    diffDir: string,
    maxDiffPixels: number
): Promise<{
    maxDiffPixels: number,
    foundDiffPixels: number,
    hasEvaluatedMatch: boolean,
    hasExactMatch: boolean,
    regionFoundCenteredCoordinates: { x: number, y: number },
    diffCoordinates: { x: number, y: number }[]
}> {

    // ✅ compare baseline image and target image
    const baselineImage = PNG.sync.read(fs.readFileSync(baselineImgPath));
    const screenshotImage = PNG.sync.read(fs.readFileSync(baselineCompareImgPath));

    // ✅ prepare an empty diff image
    const diffImage = new PNG({ width: baselineImage.width, height: baselineImage.height });

    // ✅ calculate the differences between the two images
    const numDiffs = pixelmatch(
        baselineImage.data,
        screenshotImage.data,
        diffImage.data,
        baselineImage.width,
        baselineImage.height,
        { threshold: 0.1 }
    );

    // ✅ save the diff image in YYYY_MM_DD_HH_MM_SS format
    const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '_');

    const diffImagePath = path.join(diffDir, `diff_${timestamp}.png`);
    fs.writeFileSync(diffImagePath, PNG.sync.write(diffImage));

    setLastStep(`Detected ${numDiffs} differences between the images`);

    let centerX = 0;
    let centerY = 0;
    let diffCoordinates = [];

    // ✅ some small animations may cause a lot of differences, so we need to filter out the significant ones
    // ✅ typically bellow 1000 differences is considered as no significant difference
    // ✅ but we should evaluate always in a case to case basis and use parameter maxDiffPixels to set the threshold
    if (numDiffs > 0) {

        // ✅ calculate center of difference area
        for (let y = 0; y < baselineImage.height; y++) {
            for (let x = 0; x < baselineImage.width; x++) {
                const idx = (baselineImage.width * y + x) * 4;
                const r = diffImage.data[idx];
                const g = diffImage.data[idx + 1];
                const b = diffImage.data[idx + 2];
                const a = diffImage.data[idx + 3];

                // ✅ pixel is non-transparent and different, record its coordinates
                if (a > 0 && (r !== g || g !== b || b !== r)) {
                    diffCoordinates.push({ x, y });
                }
            }
        }

        if (diffCoordinates.length > 0) {
            let xSum = 0, ySum = 0;
            diffCoordinates.forEach((coord) => {
                xSum += coord.x;
                ySum += coord.y;
            });

            // ✅ calculate center of detected difference area
            centerX = Math.round(xSum / diffCoordinates.length);
            centerY = Math.round(ySum / diffCoordinates.length);

            // ✅ perform actions if necessary, however they should be done in a separate function or at the caller
            setLastStep(`Detected mismatch region center at: x=${centerX}, y=${centerY}`);
            setLastStep(`You can move/click at position: x=${centerX}, y=${centerY}`);
        }

        if (numDiffs < maxDiffPixels) {
            setLastStep('Differences found bellow max pixel diff permitted.');
        } else if (numDiffs > maxDiffPixels) {
            setLastStep('Differences found above the max pixel diff permitted.');
        }

    } else {
        setLastStep('Exact match, no differences detected.');
    }


    // ✅ return image match data
    return {
        maxDiffPixels: maxDiffPixels,
        foundDiffPixels: numDiffs,
        hasEvaluatedMatch: numDiffs < maxDiffPixels,
        hasExactMatch: numDiffs === 0,
        regionFoundCenteredCoordinates: {
            x: centerX,
            y: centerY
        },
        diffCoordinates: diffCoordinates
    };
}

/**
 * Compares two images and returns the match pixel ratio based on parameter maxDiffPixels ratio.
 *
 * @param baselineImgPath
 * @param baselineCompareImgPath
 * @param diffDir
 * @param maxDiffPixels
 */
export async function toMatchScreenshot(
    baselineImgPath: any,
    baselineCompareImgPath: any,
    diffDir: string,
    maxDiffPixels: number
): Promise<{
    maxDiffPixels: number,
    foundDiffPixels: number,
    hasEvaluatedMatch: boolean,
    hasExactMatch: boolean,
}> {

    // ✅ compare baseline image and target image
    const baselineImage = PNG.sync.read(fs.readFileSync(baselineImgPath));
    const screenshotImage = PNG.sync.read(fs.readFileSync(baselineCompareImgPath));

    // ✅ prepare an empty diff image
    const diffImage = new PNG({ width: baselineImage.width, height: baselineImage.height });

    // ✅ calculate the differences between the two images
    const numDiffs = pixelmatch(
        baselineImage.data,
        screenshotImage.data,
        diffImage.data,
        baselineImage.width,
        baselineImage.height,
        { threshold: 0.1 }
    );

    // ✅ save the diff image in YYYY_MM_DD_HH_MM_SS format
    const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '_');
    const diffImagePath = path.join(diffDir, `diff_${timestamp}.png`);
    fs.writeFileSync(diffImagePath, PNG.sync.write(diffImage));
    setLastStep(`Detected ${numDiffs} differences between the images`);

    // ✅ some small animations may cause a lot of differences, so we need to filter out the significant ones
    // ✅ typically bellow 1000 differences is considered as no significant difference
    // ✅ but we should evaluate always in a case to case basis and use parameter maxDiffPixels to set the threshold
    if (numDiffs < maxDiffPixels) {
        setLastStep('Differences found bellow max pixel diff permitted.');
    } else if (numDiffs > maxDiffPixels) {
        setLastStep('Differences found above the max pixel diff permitted.');
    } else {
        setLastStep('Exact match, no differences detected.');
    }

    // ✅ return image match data
    return {
        maxDiffPixels: maxDiffPixels,
        foundDiffPixels: numDiffs,
        hasEvaluatedMatch: numDiffs < maxDiffPixels,
        hasExactMatch: numDiffs === 0
    };
}
