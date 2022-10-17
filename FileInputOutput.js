const fs=require('fs');
//FILES I/O

//blocking / sync
console.log("sync");
const hogwarts = `Hogwarts School of Witchcraft and Wizardry`;
fs.writeFileSync('hogwarts.txt', hogwarts);
const readInput = fs.readFileSync('hogwarts.txt', 'utf-8');
console.log(readInput);

//non-blocking / async
fs.readFile('hogwarts.txt' , 'utf-8' , (err , data)=>{
    if(err) return console.log("error!");
    else{
        const house = fs.writeFile('house.txt' , 'gryffindor' , (err)=>{
            if(err) return console.log("error!");
            else{
                fs.writeFile('hogwarts.txt' , `${house}` , (err)=>{
                    if(err) return console.log("error!");
                    else{
                        console.log("success!");
                    }
                })
            }
        }
        )
    }
})
console.log("Async");