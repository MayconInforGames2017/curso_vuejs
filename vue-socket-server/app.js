// Implementação do servidor

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('socketio...');
});

io.on('connection', (socket) => {
  console.log('novo socket conectado');

  socket.on('increment', (counter) => {
    console.log('increment');
    io.socket.emit('COUNTER_INCREMENT', counter + 1);
  });

  socket.on('decrement', (counter) => {
    console.log('decrement');
    io.socket.emit('COUNTER_DECREMENT', counter - 1);
  });

});

http.listen(5000, () => {
  console.log('Teste na porta 5000');
});

module.exports = app;

