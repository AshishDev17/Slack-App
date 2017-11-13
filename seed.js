const {Author, Message, Channel} = require('./server/db/models');
const db = require('./server/db');


const authors = [
  {
    name: 'Anna',
    image: 'images/girl.jpeg',
  },
  {
    name: 'Helen',
    image: 'images/bee.jpeg',
  },
  {
    name: 'Tom',
    image: 'images/crab.jpeg',
  },
  {
    name: 'Sheila',
    image: 'images/mermaid.jpeg',
  },
  {
    name: 'Michael',
    image: 'images/rooster.jpeg',
  },
  {
    name: 'Tess',
    image: 'images/tweety.jpeg',
  },
  {
    name: 'Shane',
    image: 'images/minion.jpeg',
  },
  {
    name: 'Janine',
    image: 'images/cow.jpeg',
  },
  {
    name: 'John',
    image: 'images/clown.jpeg',
  },
];


const channels = [
  {
    name: 'random',
  },
  {
    name: 'tigers',
  },
  {
    name: 'cavaliers',
  },
  {
    name: 'vikings',
  },
  {
    name: 'indians',
  },
];

const getAuthorId = () => Math.floor(Math.random() * (authors.length - 1)) + 1;

const getChannelId = () => Math.floor(Math.random() * (channels.length - 1)) + 1;

const messages = [
  {
    authorId: getAuthorId(),
    content: 'I like React!',
    channelId: getChannelId(),
  },
   {
    authorId: getAuthorId(),
    content: 'I like Redux!',
    channelId: getChannelId(),
  },
   {
    authorId: getAuthorId(),
    content: 'I like Express!',
    channelId: getChannelId(),
  },
   {
    authorId: getAuthorId(),
    content: 'I like Node.js!',
    channelId: getChannelId(),
  },
   {
    authorId: getAuthorId(),
    content: 'I like Semantic UI!',
    channelId: getChannelId(),
  },
   {
    authorId: getAuthorId(),
    content: 'I like Bulma!',
    channelId: getChannelId(),
  },
   {
    authorId: getAuthorId(),
    content: 'I like Victory.js!',
    channelId: getChannelId(),
  },
   {
    authorId: getAuthorId(),
    content: 'I like D3.js!',
    channelId: getChannelId(),
  },
   {
    authorId: getAuthorId(),
    content: 'I like PostgreSQL!',
    channelId: getChannelId(),
  },
   {
    authorId: getAuthorId(),
    content: 'I like Sequelize.js!',
    channelId: getChannelId(),
  },
   {
    authorId: getAuthorId(),
    content: 'I love tacos!',
    channelId: getChannelId(),
  },
   {
    authorId: getAuthorId(),
    content: 'I love enchilladas!',
    channelId: getChannelId(),
  },
   {
    authorId: getAuthorId(),
    content: 'I love refried beans!',
    channelId: getChannelId(),
  },
   {
    authorId: getAuthorId(),
    content: 'I love burritos!',
    channelId: getChannelId(),
  },
];

const seed = () => {
  return Promise.all(authors.map(author => Author.create(author))
  )
  .then(() => Promise.all(channels.map(channel => Channel.create(channel))
  ))
  .then(() => Promise.all(messages.map(message => Message.create(message))
  ))
};

const main = () => {
  console.log('Syncing db....');

  db.sync({force: true})
    .then(() => {
      console.log('Seeding db....');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      console.log('Closing db connection....');
      db.close();
      return null;
    })
};

main();
