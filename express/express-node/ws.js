

const express = require("express");
const app = express();
const Max = require("max-api");
const WebSocket = require('ws')


function anypost(str) {
	if (Max) {
		Max.post(str);
	} else {
		console.log(str);
	}
}


const ws = new WebSocket('ws://34.212.143.4:3000/');

ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
  Max.outlet(data)
	anypost(data)

});