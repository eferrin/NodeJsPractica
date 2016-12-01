
const http = require('http');
const port = 3000;
var date = new Date();


const requestHandler = (request, response) => {
  console.log(request.url);

  console.log(date);
  response.end(date.toString());
}

const server = http.createServer(requestHandler)

server.listen(process.env.PORT || port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
