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
const LoginRequest_1 = require("../requests/user/LoginRequest");
const RegisterRequest_1 = require("../requests/user/RegisterRequest");
const class_validator_1 = require("class-validator");
class AuthController {
    register(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const registerRequest = new RegisterRequest_1.RegisterRequest(request);
                const errors = yield (0, class_validator_1.validate)(registerRequest);
                if (errors.length > 0) {
                    return response.status(422).json({ errors });
                }
                return response.status(200).json(this.authService.register(request));
            }
            catch (error) {
                console.error(error);
                return response.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    login(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const loginRequest = new LoginRequest_1.LoginRequest(request.body.email, request.body.password);
                const errors = yield (0, class_validator_1.validate)(loginRequest);
                if (errors.length > 0) {
                    return response.status(422).json({ errors });
                }
                return this.authService.login(request.body.email, request.body.password);
            }
            catch (error) {
                console.error(error);
                return response.status(500).json({ message: 'Internal server error' });
            }
        });
    }
}
exports.default = new AuthController();
//# sourceMappingURL=AuthController.js.map