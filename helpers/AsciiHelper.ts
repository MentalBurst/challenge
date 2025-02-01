/**
 * Convert a string to ASCII blue
 * @param value
 */
export function str2AsciiBlue(value: string) {
    return `\x1b[34m${value}\x1b[0m`;
}

/**
 * Convert a string to ASCII green
 * @param value
 */
export function str2AsciiGreen(value: string) {
    return `\x1b[32m${value}\x1b[0m`;
}

/**
 * Convert a string to ASCII yellow
 * @param value
 */
export function str2AsciiYellow(value: string) {
    return `\x1b[33m${value}\x1b[0m`;
}

/**
 * Convert a string to ASCII red
 * @param value
 */
export function str2AsciiRed(value: string) {
    return `\x1b[31m${value}\x1b[0m`;
}
