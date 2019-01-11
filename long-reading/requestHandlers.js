var exec = require('child_process').exec;

function start(response) {
  /* eslint-disable-next-line */
  console.log('Request handler "start" was called.');

  exec('find /',
    { timeout: 10000, maxBuffer: 20000*1024 },
    function(err, stdout, stderr) {
      response.writeHead(22, { 'Content-Type': 'text/plain' });
      response.write(stdout);
      response.end();    
    });
}

function upload(response) {
  /* eslint-disable-next-line */
  console.log('Request handler "upload" was called.');
  response.writeHead(22, { 'Content-Type': 'text/plain' });
  response.write('Hello Upload');
  response.end();
}

exports.start = start;
exports.upload = upload;