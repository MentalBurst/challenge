const fs = require('fs');
const path = require('path');

// ✅ files to store the counter values
const teamFileCounterPath = path.join(__dirname, '../counters/user_counter.db');

/**
 * @description
 * This function increments and stores a unique stored user ID in each run.
 */
export function getIncrementedStoredUserId(): number {

    // ✅ set, increment and store a unique stored user ID in each run
    let currentValue = 0;
    if (fs.existsSync(teamFileCounterPath)) {
        const fileContent = fs.readFileSync(teamFileCounterPath, 'utf8');

        // ✅ default to 0
        currentValue = parseInt(fileContent, 10) || 0;
    }
    const newValue = currentValue + 1;

    // ✅ update
    fs.writeFileSync(teamFileCounterPath, newValue.toString(), 'utf8');

    return newValue;
}

export function getLastStoredUserId(): number {

    // ✅ get last stored user Id
    let currentValue = 0;
    if (fs.existsSync(teamFileCounterPath)) {
        const fileContent = fs.readFileSync(teamFileCounterPath, 'utf8');

        // ✅ default to 0
        currentValue = parseInt(fileContent, 10) || 0;
    }

    return currentValue;
}
