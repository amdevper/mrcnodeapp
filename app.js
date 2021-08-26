const express = require('express')
const socketio = require('socket.io')
const app = express()

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render("index",{
        title:"This is title",
        test: "get called"
    })
})

const server = app.listen(process.env.PORT || 8080,()=>{
    console.log('Server is running . . . ')
})

const io = socketio(server)
/*
io.on('connection',(socket)=>{
    console.log('Client connected')
    socket.emit("hello",counter)
    socket.on('disconnect',()=>{
        console.log('disconnected')
    })  
})
let counter = 0
setInterval((socket)=>{
    console.log('yes',counter)
    socket.emit("hello",counter)
    counter++
},1000)
*/
/*
let counter = 0
setInterval(()=>{
    io.on('connection',(sock2)=>{
        sock2.emit("hello",counter)
    })
    counter ++
},1000)
*/
let ddd =0
const datata = "helllllllooooooowwwwoooorrrrlllld"
io.on('connection',(socket)=>{
    console.log('Client connected')
    socket.emit("hello","Hello from Server")
    socket.emit("another","another")

    
    setInterval(function() {
        var currentDate = new Date();
        
        io.sockets.emit('clock',{currentDate:currentDate});
        
    },1000);

    
    

    socket.on('disconnect',()=>{
        console.log('Client leaved')
    })
    socket.on('join',(data)=>{
        console.log('Received from client :',data)
    })
    socket.on("toserver",(data)=>{
        console.log('Received from client :',data)
    })
    socket.on('fromclient',(data)=>{
        console.log('Received from client :',data)
    })
})