var http = require('http'), 
    fs = require('fs'), 
    port = 8080,
    url = require('url');

var listingData, server;

var requestHandler = function(request, response) {

  if(request.method == 'GET' && request.url == '/listings'){
    response.end(JSON.stringify(listingData));
  } else{
    response.end('Bad Gateway Error.')
    response.statusCode = 404;
  }
};

fs.readFile('listings.json', 'utf8', function(err, data) {

  if(err){
    throw err;
  }
  listingData = JSON.parse(data);
  server = http.createServer(requestHandler);
  server.listen(port, function(){
    console.log('Server is listening on: http://localhost:'+port);
  });
});
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 

    HINT: Check out this resource on fs.readFile
    //https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

    HINT: Read up on JSON parsing Node.js
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */

    //Check for errors
    /*this resource gives you an idea of the general format err objects and Throwing an existing object.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw#throwing_an_existing_object
   */

   //Save the data in the listingData variable already defined
  

  //Creates the server
  
  //Start the server
