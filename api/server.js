console.log('server.js')

const express = require('express');
const server = express();

const suppliersRouter = require('../suppliers/suppliersRouter');

// global middleware
server.use(express.json());

//route
server.use('/suppliers', suppliersRouter);


server.get('/', (req, res) => {
  res.status(200).send({hello: "world"});
});

module.exports = server;