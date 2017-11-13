const Author = require('./author');
const Message = require('./message');
const Channel = require('./channel');


Author.hasMany(Message);
Message.belongsTo(Author);
Channel.hasMany(Message, {
  onDelete: 'cascade',
  hooks: true,
});
Message.belongsTo(Channel);

module.exports = {
  Author,
  Message,
  Channel,
};
