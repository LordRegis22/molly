const namePuppyFidoMiddleware = (req, res, next) => {
  let puppyName;
  if (res.locals.isPuppy) {
    puppyName = 'FidoPuppy';
  } else {
    puppyName = 'FidoDog';
  }
  res.locals.puppyName = puppyName;
  return next();
};

module.exports = namePuppyFidoMiddleware;
