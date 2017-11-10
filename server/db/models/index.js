const Author = require('./models/author');
const Message = require('./models/message');
const Channel = require('./models/channel');


Author.hasMany(Message);
Message.belongsTo(Author);
Channel.hasMany(Message, {
  onDelete: 'cascade',
  hooke: true,
});
Message.belongsTo(Channel);

module.exports = {
  Author,
  Message,
  Channel,
};
