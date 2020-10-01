const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Do not need to type the '/' because it will assume that you're using the slash
app.use('/', routes);

app.listen(3001, () => {
  console.log('Server started listening on PORT http://localhost:3001');
});
