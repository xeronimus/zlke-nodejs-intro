const app = require('express')();
const port = 3000;

function loggerMiddleware(req, res, next) {
  console.log(`HTTP REQUEST ${req.method} ${req.url}` + `${req.headers['user-agent']}`);
  next();
}

app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port);
