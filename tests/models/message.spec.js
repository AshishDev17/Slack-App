/* describe(), beforEach() and it() are available globally  */

const {expect} = require('chai');
const db = require('../../server/db');
const Message = db.model('message');

describe('Message Model', () => {
  beforeEach(() => {
    db.sync({force: true})
      .then(() => {
        console.log('Test DB synced');
      });
  });

  describe('create message', () => {
    let msg;
    beforeEach(() => {
      return Message.create({
        content: 'Hello World!',
      })
      .then(message => {
        msg = message;
      });
    });

    it.only(`should create message with content 'Hello World!'`, () => {
      expect(msg.content).to.be.equal('Hello World!');
    })
  });
});
