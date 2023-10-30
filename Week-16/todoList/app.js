const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const tasksRouter = require('./routes/tasks');

app.use('/tasks', tasksRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
