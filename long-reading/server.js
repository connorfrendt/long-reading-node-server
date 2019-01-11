var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    /* eslint-disable-next-line */
    console.log('Request for ' + pathname + ' received.');

    route(handle, pathname, response);
  }
  
  http.createServer(onRequest).listen(8888);
  /* eslint-disable-next-line */
  console.log('Server has started.');
}

exports.start = start;