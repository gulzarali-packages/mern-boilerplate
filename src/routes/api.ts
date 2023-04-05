import express from 'express';
import authController from '../controllers/AuthController';
//import ProductController from '../controllers/ProductController';
import { ResourceRouter } from '../lib/http/ResourceRouter';
//import SendEventJob from '../jobs/SendEventJob';

const router = express.Router();

// const productRouter = new ResourceRouter(router, {
//   path: '/products',
//   controller: ProductController,
// });
// productRouter.registerRoutes();

// SendEventJob.init();
// router.post('/send-event', async (req, res) => {
//     try {
//         SendEventJob.add({message:'hi:'});
//         SendEventJob.process();
//         res.status(200).json({ message: 'Event sent successfully' });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json(new Error(err));
//     }
// });

router.get('/', (req, res) => res.send('Hello World!'));

router.post('/login', (req, res) => authController.login(req, res));
router.post('/register', (req, res) => authController.register(req, res));

export default router;
