console.log('index.js');

const server = require('./api/server.js');


const port = 8888;
server.listen(port, () => console.log('API'));