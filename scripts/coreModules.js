const fs = require('fs');

fs.readFile('./README.md', 'utf-8', (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});
