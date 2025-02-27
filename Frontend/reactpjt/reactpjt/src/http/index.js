/*const http=require('node:http')
const server=http.createServer((req,res)=>{
    res.writeHead(200)
    res.end("hello world")
})
server.listen(3002,()=>{
    console.log("server is running on port 3002")
})*/

/*
const http =require('node:http')
const server =http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json"})
    const obj={
        firstName:"adam",
        lastName:"krish"
    }
    res.end(JSON.stringify(obj))
})
server.listen(3002,()=>{
    console.log("server is running on part 3002")
})
*/
/*
const http=require('node:http')
const fs=require('node:fs')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"})
    const name="Disney"
    let html=fs.readFileSync('./http.html',"utf-8")
    html=html.replace("{{ name }}",name)
    res.end(html)

})
    server.listen(3002,()=>{
    console.log("server is running on port 3002")
})

*/
