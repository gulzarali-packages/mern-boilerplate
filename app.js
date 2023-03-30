require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const app = express();

/**
 * import routes
 */
const routes = require('./src/routes');
const authRoutes = require('./src/routes/auth');

mongoose
  .connect(
    process.env.APP_DATABASE_URL,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.use('/', routes);
app.use('/auth', authRoutes);

app.listen(process.env.APP_LISTEN_PORT, function() {
  console.log(`Server started on port ${process.env.APP_LISTEN_PORT}`);
});