import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import bodyParser, { json } from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import fs from 'fs';
import passport from 'passport';

import './config/passport';
import flash from 'connect-flash';
import router from './routes/api';
import authRouter from './routes/auth';
import config from './config/config';
import corsConfig from './config/cors.config';
const scheduleKernelPath = './schedules/kernal';
if (fs.existsSync(scheduleKernelPath)) {
  import(scheduleKernelPath);
}

const observerKernelPath = './observers/kernal';
if (fs.existsSync(observerKernelPath)) {
  import(observerKernelPath);
}

import httpResponseMiddleware from './middleware/HttpResponseMiddleware';

const port: any = config.port;
const app = express();

mongoose.set('strictQuery', false);
async function startServer() {
  await mongoose.connect(config.databaseURL as any, {
    useNewUrlParser: true,
  } as any);
  console.log('Connected to MongoDB successfully!');
}

app.use(httpResponseMiddleware);
app.use(compression());
app.use(flash());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: config.jwtSecretKey,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsConfig));
app.get('/', (req, res) => {
  res.send('Welcome to nodeJs.');
});
app.use('/api', router);
app.use('/auth', authRouter);

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    status_code: 404,
    message: "Oops! The requested resource was not found on this server."
  });
});

startServer();

app.listen(port, 'localhost', () => {
  return console.log(`Express is listening at http://localhost:${config.port}`);
});
