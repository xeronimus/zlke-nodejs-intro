const fsPromises = require('fs').promises;

fsPromises.readdir(__dirname).then((result) => console.log(result));
