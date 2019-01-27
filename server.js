var express = require('express');
var socket = require('socket.io');

var app = express();


server = app.listen(8080, function(){
    console.log('server is running on port 8080')
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});

// const port = 3000

// app.get('/', (request, response) => {
//   response.send('Hello from PlayUnitAPI!')
// })

// app.listen(port, (err) => {
//   if (err) {
//     return console.log('OOPSIE WOOPSIE!! Uwu We made a fucky wucky!! A wittle fucko boingo! The code monkeys at our headquarters are working VEWY HAWD to fix this!"', err)
// }

//   console.log(`server is listening on $(port)`)
// })

