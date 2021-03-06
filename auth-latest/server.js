require('dotenv').config();
const mongoose = require('mongoose');

process.on('uncaughtException', (err) => {
  console.log('UNHANDLED EXCEPTION! SHUTTING DOWN...');
  console.log(err, err.message);
  process.exit(1);
});

const app = require('./app');

const uri = 'mongodb://localhost:27017/authDb';

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Connected to auth database'));

const PORT = 5000;
// eslint-disable-next-line no-console
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! SHUTTING DOWN...');
  server.close(() => {
    process.exit(1);
  });
});
