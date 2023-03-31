"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const router = express_1.default.Router();
router.get('/login', (req, res) => AuthController_1.default.login(req, res));
router.post('/register', (req, res) => AuthController_1.default.register(req, res));
exports.default = router;
//# sourceMappingURL=auth.js.map