/* describe(), beforEach() and it() are available globally  */

const {expect} = require('chai');
const db = require('../../server/db');
const Author = db.model('author');

describe('Author Model', () => {
  beforeEach(() => {
    db.sync({force: true})
      .then(() => {
        console.log('Test DB synced');
      });
  });

  describe('create author', () => {
    let michael;
    beforeEach(() => {
      return Author.create({
        name: 'Michael',
        image: 'michaelimage',
      })
      .then(author => {
        michael = author;
      });
    });

    it('should create author with name Michael', () => {
      expect(michael.name).to.be.equal('Michael');
    })
  });
});
