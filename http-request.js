const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', (err) => {
    throw err;
  })
  .on('response', (response) => {
    console.log('Response Status Code:', response.statusCode,
      '\nResponse Message:', response.statusMessage,
      '\nContent Type:', response.headers['content-type']);
  })
  .pipe(fs.createWriteStream('./future.jpg'));