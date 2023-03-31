"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthMiddleware {
    static isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    }
}
exports.default = new AuthMiddleware();
//# sourceMappingURL=AuthMiddleware.js.map