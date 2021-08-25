const express = require('express')
const socketio = require('socket.io')
const app = express()

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render("index",{
        title:"This is title"
    })
})

const server = app.listen(process.env.PORT || 8080,()=>{
    console.log('Server is running . . . ')
})

const io = socketio(server)
io.on('connection',()=>{
    console.log('Client connected')
    
})