#!/usr/bin/node

const fs = require('fs');

if (process.argv.length < 3) {
  console.log('Usage: ' + process.argv[1] + ' <filename>');
  process.exit(1);
}

const filename = process.argv[2];

fs.readFile(filename, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(data);
});
