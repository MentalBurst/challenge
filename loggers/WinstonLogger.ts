import winston from 'winston';
import 'winston-daily-rotate-file';

/**
 * ✅ Winston logger
 */
const dailyRotateFileTransport = new winston.transports.DailyRotateFile({
    filename: 'logs/%DATE%-results.log',
    datePattern: 'YYYY-MM-DD',
    maxSize: '20m',
    maxFiles: '1d',
    format: winston.format.json()
});

/**
 * ✅ Logger
 */
export const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        }),
        dailyRotateFileTransport
    ]
});
