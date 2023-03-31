class AuthMiddleware {
    static isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    }
}

export default new AuthMiddleware();
