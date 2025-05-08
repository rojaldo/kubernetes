"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHero = void 0;
const express_validator_1 = require("express-validator");
exports.validateHero = [
    (0, express_validator_1.body)('name').isString().notEmpty().withMessage('Name is required and must be a string.'),
    (0, express_validator_1.body)('powers').isArray().withMessage('Powers must be an array.'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
