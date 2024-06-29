const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://baf3604:QThFdvj5kPhMqPzi@lasercluster.09gplht.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('Hello from Express');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});