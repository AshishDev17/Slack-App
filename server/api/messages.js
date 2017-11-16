const router = require('express').Router();
const {Message} = require('../db/models');
module.exports = router;

//GET api/messages
router.get('/', (req, res, next) => {
  Message.findAll()
    .then(messages => res.json(messages))
    .catch(next);
});

