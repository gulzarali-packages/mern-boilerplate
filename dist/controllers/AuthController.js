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
const AuthService_1 = __importDefault(require("../services/AuthService"));
const LoginRequest_1 = require("../requests/user/LoginRequest");
const RegisterRequest_1 = require("../requests/user/RegisterRequest");
const class_validator_1 = require("class-validator");
class AuthController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const registerRequest = new RegisterRequest_1.RegisterRequest(req);
                const errors = yield (0, class_validator_1.validate)(registerRequest);
                if (errors.length > 0) {
                    const errorResponse = {};
                    errors.forEach((error) => {
                        Object.keys(error.constraints).forEach(key => {
                            errorResponse[error.property] = error.constraints[key];
                        });
                    });
                    return res.status(422).json({ errors: errorResponse });
                }
                const result = yield AuthService_1.default.register(req.body);
                return res.status(200).json(result);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: new Error(error) });
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
                return AuthService_1.default.login(request.body.email, request.body.password);
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