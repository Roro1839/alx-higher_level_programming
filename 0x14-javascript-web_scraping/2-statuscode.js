#!/usr/bin/node

// printing the status code of a GET request

const request = require('request');
const link = process.argv[2];
request(link, (err, res, body) => {
  if (err) console.error(err);
  console.log('code:', res.statusCode);
});
