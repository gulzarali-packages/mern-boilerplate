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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const User_1 = require("../models/User");
class AuthService {
    login(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ email: request.email, password: request.password });
            if (user) {
                return user;
            }
        });
    }
    register(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new User_1.User({
                name: request.body.name,
                email: request.body.email,
                password: request.body.password
            });
            return newUser;
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map