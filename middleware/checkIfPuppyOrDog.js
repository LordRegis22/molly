const checkIfPuppyOrDog = (req, res, next) => {
  // pretend we just cheked the database for whether puppy or not
  const isPuppy = true;
  res.locals.isPuppy = isPuppy;
  if (isPuppy) {
    return next({ pizza: "OMG IT'S A UNICOR" });
  } else {
    return next();
  }
};

module.exports = checkIfPuppyOrDog;
