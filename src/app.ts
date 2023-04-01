import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import bodyParser from 'body-parser';

import passport from './config/passport.config';
import router from './routes/api';
import config from './config/config';

let port = config.port;

const app = express();

async function startServer() {
  await mongoose.connect(config.databaseURL as any, {
    useNewUrlParser: true,
  } as any);
  console.log('Connected to MongoDB successfully!');
}

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


app.listen(3000,'localhost', () => {
  console.log('port:',port);
  return console.log(`Express is listening at http://localhost:${config.port}`);
});