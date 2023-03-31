import express from 'express';
import passport from 'passport';
import authController from '../controllers/AuthController'
var router = express.Router();

router.get('/', (req, res) => res.send(''));

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}), authController.login);

router.get('/register', (req, res) => authController.register(req, res));

export default router;