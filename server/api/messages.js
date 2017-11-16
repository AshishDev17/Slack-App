const router = require('express').Router();
const {Message} = require('../db/models');
module.exports = router;

//GET api/messages
router.get('/', (req, res, next) => {
  Message.findAll()
    .then(messages => res.json(messages))
    .catch(next);
});


//POST api/messages
router.post('/', (req, res, next) => {
  Message.create(req.body)
    .then(message => res.json(message))
    .catch(next);
});

//PUT api/messages/:messageId
router.put('/:messageId', (req, res, next) => {
  Message.findById(+req.params.messageId)
    .then(message => message.update(req.body))
    .then(message => res.json(message))
    .catch(next);
});

//DELETE api/messages/:messageId
router.delete('/:messageId', (req, res, next) => {
  const id = req.params.messageId;

  Message.destroy({
    where: {
      id,
    }
  })
  .then(() => res.status(204).end())
  .catch(next);
});
