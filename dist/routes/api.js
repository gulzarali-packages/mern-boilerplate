"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
var router = express_1.default.Router();
router.get('/', (req, res) => res.send(''));
router.post('/login', passport_1.default.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}), AuthController_1.default.login);
router.post('/register', (req, res) => AuthController_1.default.register(req, res));
exports.default = router;
//# sourceMappingURL=api.js.map