const fs = require('fs')
const http = require('http')

const server = http.createServer((req,res)=>{
    fs.readFile('./index.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data)
    })
})

server.listen(5000,()=>{
    console.log(`Server is on ${5000}`)
})