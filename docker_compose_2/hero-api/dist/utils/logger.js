"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = exports.logInfo = void 0;
const winston_1 = require("winston");
const logger = (0, winston_1.createLogger)({
    level: 'info',
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({ filename: 'error.log', level: 'error' }),
        new winston_1.transports.File({ filename: 'combined.log' })
    ]
});
const logInfo = (message) => {
    logger.info(message);
};
exports.logInfo = logInfo;
const logError = (message) => {
    logger.error(message);
};
exports.logError = logError;
