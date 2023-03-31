import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';

import passport from './config/passport.config';
import router from './routes/api';
import config from './config/config';

const app = express();

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