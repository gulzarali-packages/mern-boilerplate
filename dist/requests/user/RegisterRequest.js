"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRequest = void 0;
const class_validator_1 = require("class-validator");
class RegisterRequest {
    constructor(request) {
        var _a, _b, _c;
        this.userName = (_a = request === null || request === void 0 ? void 0 : request.body) === null || _a === void 0 ? void 0 : _a.userName;
        this.email = (_b = request === null || request === void 0 ? void 0 : request.body) === null || _b === void 0 ? void 0 : _b.email;
        this.password = (_c = request === null || request === void 0 ? void 0 : request.body) === null || _c === void 0 ? void 0 : _c.password;
    }
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)()
], RegisterRequest.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8)
], RegisterRequest.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)()
], RegisterRequest.prototype, "userName", void 0);
exports.RegisterRequest = RegisterRequest;
//# sourceMappingURL=RegisterRequest.js.map