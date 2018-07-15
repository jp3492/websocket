const express = require('express')
const http = require('http')
const path = require('path')
const ws = require('ws')

const app = express()
const server = http.Server(app)

app.use(express.static('client'))
app.get('/', function(req, res) {
  res.send('Server connected')
})
app.use('/static', express.static(path.join(__dirname, 'client/public')))

const WebSocketServer = new ws.Server({ server })
WebSocketServer.on('connection', function(ws, req) { console.log('socket connected') })

const port = process.env.PORT || 4000
server.listen(port, function(){ console.log("server up") })
