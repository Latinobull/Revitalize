const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
require('dotenv').config();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Send every request to the React app
// Define any API routes before this runs
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

// app.post('/api/journals', function (req, res) {
//   req.body
// });

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/journals', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
