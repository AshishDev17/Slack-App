const {Channel} = require('../../server/db/models');
const app = require('../../server');
const request = require('supertest');
const {expect} = require('chai');
const db = require('../../server/db');

describe('Channel route', () => {
  beforeEach(() => {
    db.sync({force: true});
  });

  describe('/api/channels', () => {
    const channelName = 'fun';

    beforeEach(() => {
      return Channel.create({
        name: channelName,
      });
    });

    it('GET /api/channels', () => {
      return request(app)
        .get('/api/channels')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body[0].name).to.be.equal(channelName);
        });
    });
  });
});
