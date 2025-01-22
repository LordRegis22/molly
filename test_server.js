const express = require('express');
const app = express();

const checkIfPuppyOrDog = require('./middleware/checkIfPuppyOrDog');
const namePuppyFidoMiddleware = require('./middleware/namePuppyFidoMiddleware');
//all request bodies are converted to json
app.use(express.json());

app.get('/puppies', checkIfPuppyOrDog, namePuppyFidoMiddleware, (req, res) => {
  res.locals.bark = 'bark bark';
  const responseToClient = {
    bark: res.locals.bark,
    puppyName: res.locals.puppyName,
  };
  res.json(responseToClient);
});

//global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.json({ location: 'GLOBAL_ERROR_HANDLER', err });
});

app.listen('3000', () => console.log('listening on 3000'));
