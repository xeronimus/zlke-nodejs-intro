const path = require('path');
const express = require('express');

const service = require('./service');

const PORT = process.env.PORT || 3000;
const app = express();

// REST endpoints
const restRouter = express.Router();
restRouter.get('/students', (req, res) => res.json(service.getAllStudents()));

app.use('/api', restRouter);

// serve static client files
app.use(express.static(path.resolve(__dirname, './public')));

// enable html5 history mode by "forwarding" every unmatched route to the index.html file
app.get('*', (request, response) =>
  response.sendFile(path.resolve(__dirname, './public/index.html'))
);

// generic error handler
app.use((err, req, res, next /* yes, this argument is needed! */) => {
  console.error(err);
  res.status(500).json({message: 'an error occurred'});
});

// start our server
app.listen(PORT, () => console.log(`Webapp listening at http://localhost:${PORT}`));
