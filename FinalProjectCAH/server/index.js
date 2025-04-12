const express = require("express");
const app = express();
var router = express.Router();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
var fs = require('fs');
const port1 = 4000;

var databaseName = 'mydb';
var versionNumber = '1.0';
var textDescription = 'my first database';
var estimatedSizeOfDatabase = 2 * 1024 * 1024;

//displays in terminal when user connected to server
io.on("connection", socket => {
	console.log("user connected");

	var hostCode = "hostcode";
	var clientCode = "clientcode";
	// this is for host
	socket.on("codeGenerate", code => {
		hostCode = code;
		socket.join(hostCode);
	});
	// this is for client
	socket.on("codeSent", code => {
		var rooms = io.sockets.adapter.rooms;
		var tmp = JSON.stringify(rooms);
		var flag = tmp.includes(code);
		if(flag) {
			socket.join(code);
			clientCode = code;
			io.in(code).emit("noticeCodeAuth", true);
			io.in(code).emit("wantQNum", true);
		}
		socket.emit("noticeCodeAuth", false);
	});

	// this is for to get qNum
	socket.on("hereQnum", data => {
		io.in(data.port).emit("getQNum", data.qNum);
		
	});
	// notifies on terminal when new user is connected.
	socket.on("newUser", data => {
		io.in(data.port).emit("allUser", data);
		
	});

	socket.on("giveAllUsers", data => {
		io.in(data.port).emit("userGroup", data);
		
	});

	socket.on("startGame", data => {
		io.in(data.port).emit("startClient", data);
		
	});

	socket.on("sAnswer", data => {
		io.in(data.port).emit("Ansarrive", data);
		
	})

	socket.on("goScore", data => {
		io.in(data.port).emit("goScoreBoard", data);
		io.emit('hereScore', data);
	});

	socket.on("restart", data => {
		io.in(data.port).emit("restartGame", data);
		
	});

	socket.on("goStart", data => {
		io.in(data.port).emit("goStartClient", data);

	});	
});

app.use('/', router.get('/', (req, res) => {

	fs.readFile('display.html', function(err, data) {
	    res.writeHead(200, {'Content-Type': 'text/html'});
	    res.write(data);
	    return res.end();
	  });
}));
//displays the port on the terminal
server.listen(port1, () => console.log("server running on port" + port1));