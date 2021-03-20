//IMPORTs
require('dotenv/config');

//ROUTEs
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

const app = express();

//Routing
app.use(bodyParser.json());
app.use('/posts', postsRouter);
app.use('/user', usersRouter);

//PORT
app.listen(8080);

//DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true },  () =>
    console.log('Connected to DB')
)