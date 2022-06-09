const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('student' in params){
      if(params['student']== 'Hi'.toLowerCase()){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          response: "hey!",
          body: "I am a bot thanks for talking to me",
          currentOccupation: "Name: botter"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] == 'Whats your name'.toLowerCase()){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          response: "botter",
          body: "My creator was Diego",
          currentOccupation: "Name: botter"
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['student'] == 'how are you'.toLowerCase()){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          response: "good",
          body: "a little cold tho",
          currentOccupation: "Name: botter"
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['student'] == 'where do you live'.toLowerCase()){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          response: "i live in a ssd :(",
          body: "its a really fast one tho",
          currentOccupation: "Name: botter"
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['student'] == 'what are you'.toLowerCase()){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          response: "i am an api",
          body: "i respond to your messages",
          currentOccupation: "Name: botter"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
