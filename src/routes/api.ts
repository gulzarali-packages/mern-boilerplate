import express from 'express';
import authController from '../controllers/AuthController';
//import ProductController from '../controllers/ProductController';
import { ResourceRouter } from '../lib/http/ResourceRouter';

const router = express.Router();

// const productRouter = new ResourceRouter(router, {
//   path: '/products',
//   controller: ProductController,
// });
// productRouter.registerRoutes();

router.get('/', (req, res) => res.send('Hello World!'));

router.post('/login', (req, res) => authController.login(req, res));
router.post('/register', (req, res) => authController.register(req, res));

export default router;
