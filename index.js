const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log('server is running on port', PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
