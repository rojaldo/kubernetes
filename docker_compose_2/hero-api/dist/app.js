"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const hero_routes_1 = require("./routes/hero.routes");
const error_middleware_1 = require("./middleware/error.middleware");
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
(0, hero_routes_1.setHeroRoutes)(app);
app.use(error_middleware_1.errorHandler);
exports.default = app;
