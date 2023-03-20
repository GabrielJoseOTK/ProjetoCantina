const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cantina = require('./models/cantina');
const cantinaRoutes = require('./routes/cantina');
  //"type":"module",//

mongoose.connect('mongodb://127.0.0.1:27017/cantina', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/cantina', cantinaRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});