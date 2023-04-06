import express from 'express';
import authController from '../controllers/AuthController';

const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));

router.post('/login', (req, res) => authController.login(req, res));
router.post('/register', (req, res) => authController.register(req, res));

export default router;
