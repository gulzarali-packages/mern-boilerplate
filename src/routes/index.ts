import express from 'express';

const routes = express.Router();

routes.get('/', function (req, res) {
  res.send('Home page');
});

export default routes;