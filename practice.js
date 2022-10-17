const fs=require('fs');
const http=require('http');
const url=require('url');
const replacePlaceholder = require('./modules/replacePlaceholder');
const slugify = require('slugify');
///////////////////////////

//FILES I/O

//blocking / sync
// console.log("sync");
// const hogwarts = `Hogwarts School of Witchcraft and Wizardry`;
// fs.writeFileSync('hogwarts.txt', hogwarts);
// const readInput = fs.readFileSync('hogwarts.txt', 'utf-8');
// console.log(readInput);

//non-blocking / async
// fs.readFile('hogwarts.txt' , 'utf-8' , (err , data)=>{
//     if(err) return console.log("error!");
//     else{
//         const house = fs.writeFile('house.txt' , 'gryffindor' , (err)=>{
//             if(err) return console.log("error!");
//             else{
//                 fs.writeFile('hogwarts.txt' , `${house}` , (err)=>{
//                     if(err) return console.log("error!");
//                     else{
//                         console.log("success!");
//                     }
//                 })
//             }
//         }
//         )
//     }
// })
// console.log("Async");




//SERVER , ROUTES   , API

const data=fs.readFileSync('./dev-data/data.json' , 'utf-8');
const dataObj=JSON.parse(data);

const slugs=dataObj.map((el)=>slugify(el.productName , {lower:true}));

const cardTemp=fs.readFileSync('./templates/template-card.html' , 'utf-8');
const overviewTemp=fs.readFileSync('./templates/template-overview.html' , 'utf-8');
const productTemp=fs.readFileSync('./templates/template-product.html' , 'utf-8');


const server=http.createServer((req,res)=>{
    const {query , pathname} = url.parse(req.url , true);

    //OVERVIEW
    if(pathname==='/' || pathname==='/overview'){

        res.writeHead(200 ,{
            'content-type' : 'text/html'
        })

        const cardHtml=dataObj.map(element=> replacePlaceholder(cardTemp , element)).join('');
        const output=overviewTemp.replace('{%PRODUCT_CARDS%}' , cardHtml);
        res.end(output);
    }

    //PRODUCT
    else if(pathname==='/product'){
        res.writeHead(200,{
            'content-type' : 'text/html'
        })
        const product=dataObj[query.id];
        const output=replacePlaceholder(productTemp,product);
        res.end(output);
    }

    //API
    else if(productname==='/api'){
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