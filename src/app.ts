import express from 'express';
import router from './routes/api';
import mongoose from 'mongoose';
const app = express();
const port = 3003;

app.use('/api', router);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});