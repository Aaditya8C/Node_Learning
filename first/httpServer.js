const http = require('http');

const port = process.env.PORT || 5500;

const server = http.createServer((req,res) =>{
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Aaditya Padte</h1> <p>This is node\'s http module</p>');
})

server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
});

