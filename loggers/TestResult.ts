import * as fs from 'fs';
import * as path from 'path';
import {CONST_METRICS_FILE_JS, CONST_METRICS_FILE_JSON, CONST_METRICS_PATH} from "../constants/globals";

/**
 * @description
 * This class is responsible for writing the test results to a file.
 */
class TestOutput {
    writeJsonToFile(
        featureName: string,
        scenarioTitle: string,
        lastStepText: string,
        result: string,
        startScenarioUNIXTimeMs: string,
        naturalDateISO8601: string
    ): void {

        // ✅ date stuff & unix timestamp millis
        const unixTimestampMilliseconds = Date.now().toString();

        const testResult = {
            Feature: featureName,
            Scenario: scenarioTitle,
            LastStep: lastStepText,
            Status: result,
            Duration: (parseInt(unixTimestampMilliseconds) - parseInt(startScenarioUNIXTimeMs)).toString(),
            Datetime: naturalDateISO8601,
            UnixUTC: startScenarioUNIXTimeMs
        };

        try {
            const currentDirectory = process.cwd();

            // ✅ TODO make this a yaml param or an .env param
            const projectDirectory = path.join(currentDirectory, CONST_METRICS_PATH);
            if (!fs.existsSync(projectDirectory)) {
                fs.mkdirSync(projectDirectory);
            }

            const fileName = CONST_METRICS_FILE_JSON;
            const fileNameJs = CONST_METRICS_FILE_JS;
            const filePath = path.join(projectDirectory, fileName);
            const filePathJs = path.join(projectDirectory, fileNameJs);

            let jsonData: { Results?: any[], Totals?: any[] } = {};
            if (fs.existsSync(filePath)) {
                const existingJson = fs.readFileSync(filePath, 'utf-8');

                if (existingJson !== '')
                    jsonData = JSON.parse(existingJson);
            }

            // ✅ get/create "results" if not exists
            const resultsArray = jsonData.Results || [];
            resultsArray.push(testResult);
            jsonData.Results = resultsArray;

            // ✅ update "totals"
            const totalsArray = jsonData.Totals || [];
            let found = false;
            for (let item of totalsArray) {
                if (item.Feature === featureName && item.Scenario === scenarioTitle) {
                    found = true;
                    if (result === 'Passed') {
                        item.Success = (item.Success || 0) + 1;
                    } else if (result === 'Failed') {
                        item.Errors = (item.Errors || 0) + 1;
                    }
                    break;
                }
            }

            if (!found) {
                const newTotal = {
                    Feature: featureName,
                    Scenario: scenarioTitle,
                    Success: result === 'Passed' ? 1 : 0,
                    Errors: result === 'Failed' ? 1 : 0
                };
                totalsArray.push(newTotal);
            }
            jsonData.Totals = totalsArray;

            const updatedContent = JSON.stringify(jsonData, null, 2);
            fs.writeFileSync(filePath, updatedContent);
            console.log('Results successfully appended to file');

            const jsContent = `var json = ${updatedContent};`;
            fs.writeFileSync(filePathJs, jsContent);
            console.log('Results successfully written to script.js');
        } catch (ex) {
            console.error('Failed to append result data to file', ex);
        }
    }
}

export default TestOutput;
