//SERVER , ROUTES   , API

const fs=require('fs');
const http=require('http');
const url=require('url');


const data=fs.readFileSync('./dev-data/data.json' , 'utf-8');
const dataObj=JSON.parse(data);

const server=http.createServer((req,res)=>{
    const urlName=req.url;
    if(urlName==='/' || urlName==='/home'){
        res.end('/Home');
    }
    else if(urlName==='/about'){
        res.end('About');
    }
    else if(urlName==='/api'){
        res.writeHead(200 , {
            'Content-type' : 'application/json'
        });
        res.end(data);
    }
    else{
        res.writeHead(404 , {
            'Content-type' : 'text/html'
        })
        res.end('<h1>404</h1>');
    }
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Server is listening at port 8000');
})