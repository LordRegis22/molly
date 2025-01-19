const express = require('express');
const app = express();

const PORT = 1234;

const database = {};

const sampleMiddleware = (req, res, next) => {
  database.test = Date.now();
  res.locals = database.test;
  return next();
};

app.get('/hello', sampleMiddleware, (req, res) => {
  res.json(res.locals);
});

app.listen(PORT, () => {
  console.log(`WE'RE LISTENING ON PORT ${PORT}, BITCHEZZZZ`);
});
