import dotenv from 'dotenv';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/index';
import authRoutes from './src/routes/auth';

dotenv.config();
const app: Application = express();

async function startServer() {
  await mongoose.connect(process.env.APP_DATABASE_URL as any, {
    useNewUrlParser: true,
  } as object);
  console.log("MongoDB successfully connected");

  app.use('/', routes);
  app.use('/auth', authRoutes);

  app.listen(process.env.APP_LISTEN_PORT, () => {
    console.log(`Server started on port ${process.env.APP_LISTEN_PORT}`);
  });
}

startServer();
