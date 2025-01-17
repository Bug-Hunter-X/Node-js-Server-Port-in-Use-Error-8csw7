const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Uncommon error:  The server might not start if the port is already in use by another process.