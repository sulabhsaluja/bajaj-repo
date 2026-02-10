const express = require('express');

const bfhlRoute = require('./routes/bfhl.route');
const healthRoute = require('./routes/health.route');

const app = express();

app.use(express.json());

app.use('/bfhl', bfhlRoute);
app.use('/health', healthRoute);


app.use((err, req, res, next) => {
  res.status(500).json({
    is_success: false,
    message: 'Internal Server Error'
  });
});

module.exports = app;