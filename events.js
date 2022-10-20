const event=require('events')
const http=require('http')
class sale extends event{
  constructor(){
    super();
  }
}

const myEvent=new sale();

myEvent.emit('salesPurchase');

myEvent.on('sales',()=>{
  console.log('sales');
})


const server=http.createServer();
server.on('request',(req,res)=>{
  res.end('live server')
})

server.listen(8000,'127.0.0.1',()=>{
  console.log('listening...');
})