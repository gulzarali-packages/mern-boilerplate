import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import bodyParser from 'body-parser';
import compression from 'compression';
import fs from 'fs';

import passport from './config/passport.config';
import flash from 'connect-flash';
import router from './routes/api';
import config from './config/config';
import './observers/kernal';


import httpResponseMiddleware from './middleware/HttpResponseMiddleware';


let port = config.port;

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
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', router);

startServer();


app.listen(3003,'localhost', () => {
  console.log('port:',port);
  return console.log(`Express is listening at http://localhost:${config.port}`);
});