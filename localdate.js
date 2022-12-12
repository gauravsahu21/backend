const http=require("http");
const server=http.createServer((req,res)=>{
    const date=new Date();
    console.log(date.toLocaleDateString());
    console.log(date.toLocaleTimeString());
    res.writeHead(200,{'Content-Type':'application/json'})//to add headers with status code
   // res.writeHead(200,{'Content-Type':'text/html'});
    //res.write('<h1>hey this is gaurav</h1>')// to send data back to client
    //res.write(JSON.stringify({name:"gaurav"}));//to send data back to client
    res.write(JSON.stringify(serverInfo));
    res.end();//marking your request as completed
})
server.listen(4000,()=>{
    console.log("listing....");
})
const serverInfo={
    serverName:"Crio Server",
    version:"1.0.0",
    currentDate:new Date().toDateString(),
    currentTime:new Date().toTimeString()
}