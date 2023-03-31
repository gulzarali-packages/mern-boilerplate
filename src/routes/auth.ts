import express from 'express';
import AuthController from '../controllers/AuthController';

const router = express.Router();

router.get('/login', (req, res) => AuthController.login(req, res));
router.post('/register', (req, res) => AuthController.register(req, res));

export default router;