//require the http module
const http = require('http');
//require the routes file with exported module
const routes = require('./routes')

//event driven architecture
const server = http.createServer(routes);


//listen for incoming request on port 3000
server.listen(3000, () => {
  console.log("we live!")
});
