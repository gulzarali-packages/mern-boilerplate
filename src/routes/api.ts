import express from 'express';
import authController from '../controllers/AuthController'
var router = express.Router();

router.get('/',             (req, res) => res.send(''));
router.get('/login',        (req, res) => authController.login(req,res));
router.get('/register',     (req, res) => authController.register(req,res));

export default router;