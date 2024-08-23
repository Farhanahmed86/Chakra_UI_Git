const express = require('express')
const connectDB = require('./dbconfig')
const dotenv = require('dotenv')
const exp = require('constants')
const cors = require('cors');

const app = express();


// Sockets setup
const {Server} = require('socket.io')
const http = require('http');
 

const server = http.createServer(app)

const io = new Server(server,{

  cors:'*'
})


dotenv.config()

 

app.use(cors())

app.use(express.json())

app.use('/api',require('./Routes/index'))



 


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

 