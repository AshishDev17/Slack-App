/* describe(), beforEach() and it() are available globally  */

const {expect} = require('chai');
const db = require('../../server/db');
const Channel = db.model('channel');

describe('Channel Model', () => {
  beforeEach(() => {
    db.sync({force: true})
      .then(() => {
        console.log('Test DB synced');
      });
  });

  describe('create channel', () => {
    let ch;
    beforeEach(() => {
      return Channel.create({
        name: 'favorite',
      })
      .then(channel => {
        ch = channel;
      });
    });

    it('should create channel with name favorite', () => {
      expect(ch.name).to.be.equal('favorite');
    })
  });
});
