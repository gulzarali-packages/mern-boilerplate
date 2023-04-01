"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    port: process.env.PORT,
    databaseURL: process.env.DATABASE_URL,
    jwtSecretKey: process.env.JWT_SECRET_KEY
};
exports.default = config;
//# sourceMappingURL=config.js.map