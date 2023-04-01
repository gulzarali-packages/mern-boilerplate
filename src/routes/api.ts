import express from 'express';
import passport from 'passport';
import authController from '../controllers/AuthController'
var router = express.Router();

router.get('/', (req, res) => res.send(''));

// router.post('/login', passport.authenticate('local', {
//     successRedirect: '/',
//     failureFlash: true
// }), (req, res) => {
//     if (req.flash('error')) {
//         // flash message is present
//         return res.status(401).json({ message: req.flash('error') });
//     }
//     return res.status(200).json({ message: 'Logged in successfully' });
// });

router.post('/login', (req, res) => authController.login(req, res));
router.post('/register', (req, res) => authController.register(req, res));

export default router;