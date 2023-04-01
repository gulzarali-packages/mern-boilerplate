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
const passport_1 = __importDefault(require("passport"));
class AuthService {
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                passport_1.default.authenticate('local', (err, user, info) => {
                    if (err) {
                        reject(err);
                    }
                    if (!user) {
                        reject('Incorrect email or password');
                    }
                    resolve(user);
                })({ body: { email, password } });
            });
        });
    }
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new User_1.default({
                userName: data.userName,
                email: data.email,
                password: data.password
            });
            return newUser.save();
        });
    }
}
exports.default = new AuthService();
//# sourceMappingURL=AuthService.js.map