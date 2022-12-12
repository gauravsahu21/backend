const http=require("http");
const server=http.createServer(()=>{
    console.log("request from client");
    console.log("adfadf");
})
server.listen(4000,()=>{
    console.log("listing....");
})