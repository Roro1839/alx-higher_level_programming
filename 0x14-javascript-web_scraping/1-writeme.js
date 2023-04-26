#!/usr/bin/node

// a script that writes a string to a file.

const fs = require('fs');
const filepath = process.argv[2];
const str = process.argv[3];

fs.writeFileSync(filepath, str, (err) => {
  if (err) {
    console.error(err);
  }
});
