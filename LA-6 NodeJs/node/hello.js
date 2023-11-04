const h=require("http");
const host='localhost';
const port=8000;
const reqListen=function(req,res){
    res.writeHead(200);
    res.end("HELLLO MY SERVER");
}
const server = h.createServer(reqListen)
    server.listen(port,host,()=>{
        console.log('Server http://${host}:${port}');
    });