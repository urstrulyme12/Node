const fs = require('fs');

fs.readFile('demo.txt','utf-8',(err,data)=>{
    if(err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
})

fs.writeFile('sample.txt','utf-8',(err)=>{
    if(err) {
        console.log(err);
    }
    console.log("This is sample text with file creation and modification");
})

// WRITE
// const contentsam = "(class,module,rest,spread,promise,async await)";
// fs.writeFile('sam2.txt',contentsam,(err)=>{
//     if(err) {
//         console.log(err);
//     }
//     console.log("ADDED***");
// })


// fs.rename('sam2.txt','repl1.txt',(err)=>{
//     if(err) {
//         console.log(err);
//     }
//     console.log("ADDED***");
// })


fs.unlink('repl1.txt',(err)=>{
    if(err) {
        console.log(err);
    }
    console.log("ADDED***");
})