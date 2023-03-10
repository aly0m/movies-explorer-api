const rateLimit = require('express-rate-limit');

const limiterConfig = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = limiterConfig;
