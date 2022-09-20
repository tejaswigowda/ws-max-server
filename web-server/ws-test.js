const WebSocket = require('ws')

const ws = new WebSocket('ws://34.212.143.4:3000/');

ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});
