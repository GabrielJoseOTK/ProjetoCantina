const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const cantina = require('./models/cantina');
const pedido = require('./models/pedido');
const cliente = require('./models/cliente');
const usuario = require('./models/usuario');
const notify = require('./models/notify');
const pedidoRoutes = require('./routes/pedido');
const cantinaRoutes = require('./routes/cantina');
const clienteRoutes = require('./routes/cliente');
const usuarioRoutes = require('./routes/usuario');
const notifyRoutes = require('./routes/notify');
  //"type":"module",//

mongoose.connect('mongodb://127.0.0.1:27017/cantina', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//http://127.0.0.1:4200//
app.use(cors({origin:"*"}))


app.use(express.json());
app.use('/cantina', cantinaRoutes);
app.use('/pedido', pedidoRoutes);
app.use('/cliente', clienteRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/notify', notifyRoutes);

app.listen(3000, () => {
  console.log('server is running on port 3000');
});