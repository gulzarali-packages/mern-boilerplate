import express from 'express';

import passport from './config/passport.config';
import session from 'express-session';

import router from './routes/api';
import mongoose from 'mongoose';
import config from './config/config';

const app = express();
const port = process.env.APP_PORT;
const db = process.env.DB_URL;

async function startServer() {
  await mongoose.connect(config.databaseURL as any, {
    useNewUrlParser: true,
  } as any);
  console.log('Connected to MongoDB successfully!');
}

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', router);

startServer();

app.listen(config.port, () => {
  return console.log(`Express is listening at http://localhost:${config.port}`);
});