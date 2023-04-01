"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class AuthService {
    login(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = request;
                // Find user by email
                const user = yield User_1.default.findOne({ email });
                if (!user) {
                    throw new Error('Invalid email or password');
                }
                // Compare password hashes
                const match = yield bcrypt_1.default.compare(password, user.password);
                if (!match) {
                    throw new Error('Invalid email or password');
                }
                // Generate JWT token
                const token = jsonwebtoken_1.default.sign({ userId: user._id }, 'your_jwt_secret_key', { expiresIn: '1h' });
                return token;
            }
            catch (err) {
                console.error(err);
                throw new Error('Server error');
            }
        });
    }
    register(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName, email, password } = request;
            // Hash password
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            const newUser = new User_1.default({
                userName,
                email,
                password: hashedPassword
            });
            // Save user to the database
            return newUser.save();
        });
    }
}
exports.default = new AuthService();
//# sourceMappingURL=AuthService.js.map