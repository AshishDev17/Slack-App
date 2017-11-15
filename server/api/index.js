const router = require('express').Router();
module.exports = router;

router.use('/messages', require('./messages'));
router.use('./channels', require('./channels'));

//if route doesn't macth
router.use((req, res, next) => {
  res.status(400).send('Not found');
});

