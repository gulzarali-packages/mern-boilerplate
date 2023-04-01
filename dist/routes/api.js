"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
var router = express_1.default.Router();
router.get('/', (req, res) => res.send(''));
// router.post('/login', passport.authenticate('local', {
//     successRedirect: '/',
//     failureFlash: true
// }), (req, res) => {
//     if (req.flash('error')) {
//         // flash message is present
//         return res.status(401).json({ message: req.flash('error') });
//     }
//     return res.status(200).json({ message: 'Logged in successfully' });
// });
router.post('/login', (req, res) => AuthController_1.default.login(req, res));
router.post('/register', (req, res) => AuthController_1.default.register(req, res));
exports.default = router;
//# sourceMappingURL=api.js.map