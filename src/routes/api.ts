import express from 'express';
import authController from '../controllers/AuthController';
import { ResourceRouter } from '../lib/http/ResourceRouter';
//import CategoryController from '../controllers/CategoryController';
import AuthMiddleware from '../middleware/AuthMiddleware';

const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));

// const categoryRouter = new ResourceRouter(router, {
//     path: '/categories',
//     controller: CategoryController,
// });
// categoryRouter.router.use(AuthMiddleware.isLoggedIn);
// categoryRouter.registerRoutes();

router.post('/login', (req, res) => authController.login(req, res));
router.post('/register', (req, res) => authController.register(req, res));

export default router;
