var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var postData = '';
    var pathname = url.parse(request.url).pathname;
    /* eslint-disable-next-line */
    console.log('Request for ' + pathname + ' received.');

    request.setEncoding('utf8');

    request.addListener('data', function(postDataChunk) {
      postData += postDataChunk;
      /* eslint-disable-next-line */
      console.log('Receieved POST data chunk "' + postDataChunk + '".')
    });

    request.addListener('end', function() {
      route(handle, pathname, response, postData);
    });
  }
  
  http.createServer(onRequest).listen(8888);
  /* eslint-disable-next-line */
  console.log('Server has started.');
}

exports.start = start;