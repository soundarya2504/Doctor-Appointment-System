const http=require('node:http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{"Content-type":"text/plain"})
        res.end("Hello jo From Home Page")
    }
    else if(req.url==='/about'){
        res.writeHead(200,{"Content-type":"text/plain"})
        res.end("Hello padma From About Page")
    }
    else if(req.url==='/api'){
        res.writeHead(200,{"Content-type":"application/json"})
        res.end(JSON.stringify({
            firstName:"jo",
            age:20
        }))
}
else{
    res.writeHead(404)
    res.end("Page Not Found")
}
})
server.listen(3002,()=>{
    console.log("Server is running on port 3002")
})
