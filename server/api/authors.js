const router = require('express').Router();
const {Author} = require('../db/models');
module.exports = router;

//GET api/authors
router.get('/', (req, res, next) => {
  Author.findAll()
    .then(authors => res.json(authors))
    .catch(next);
});


//POST api/authors
router.post('/', (req, res, next) => {
  Author.create(req.body)
    .then(author => res.json(author))
    .catch(next);
});

//DELETE api/auhtors/:authorId
router.delete('/:authorId', (req, res, next) => {
  const id = req.params.authorId;

  Author.destroy({
    where: {
      id,
    }
  })
  .then(() => res.status(204).end())
  .catch(next);
});
