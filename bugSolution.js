const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);
const port = 3000;

const retry = (delay) => new Promise(resolve => setTimeout(resolve, delay));

const startServer = async () => {
  try {
    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Retrying in 1000ms...`);
      await retry(1000);
      startServer(); // Recursive retry 
    } else {
      console.error(`Failed to start server: ${err}`);
    }
  }
};

startServer();