"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
exports.User = mongoose.model('User', UserSchema);
//# sourceMappingURL=User.js.map