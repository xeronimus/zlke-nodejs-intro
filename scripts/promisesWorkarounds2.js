const util = require('util');
const {exec} = require('child_process');

exec('pwd', (err, stdout, stderr) => {
  if (err) {
    console.error('that did not work', err);
  } else {
    console.log(stdout, stderr);
  }
});

const pExec = util.promisify(exec);

pExec('pwd')
  .then((result) => console.log(result.stdout))
  .catch((err) => console.error('that did not work', err));
