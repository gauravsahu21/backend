const {data}=require('./currencies.json');
const http=require('http');
const server=http.createServer((req,res)=>{
    let url=req.url;
    const symbol=url.split('/');
    console.log(symbol);
    if(symbol[2])
    { res.writeHead(200,{"Content-Type":"application/json"})
    const k=data.filter((x)=>x.id===symbol[2].toUpperCase())
    res.write(JSON.stringify(k));
    res.end();

        
    }
    else
    {
    switch(url){
        case "/":
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write('<h1>Currency Database</h1>')
            res.end();
            break;
        case "/currencies":
           res.writeHead(200,{"Content-Type":"application/json"})
            res.write(JSON.stringify(data));
            res.end();
            break;
            
        default:
            res.writeHead(404,{'Content-type':'text/html'});
            res.write('<h1>Not Found</h1>')
            res.end();
           
            


            
    }
    }
});
server.listen(4000,()=>{
    console.log('listen....')
})