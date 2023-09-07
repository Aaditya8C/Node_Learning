const fs = require('fs');
// fs.readFile('file.csv','utf8',(err,data)=>{
//     console.log(err,data);
// })


// const x = fs.readFileSync('file.csv');
// console.log(x.toString());


// fs.writeFile("file2.txt" , "This is second file", ()=>{
//     console.log("Written to the new file");
// })


const b = fs.writeFileSync("file2.txt" , "This is second file data")
console.log(b);

console.log("This is due to non blocking object module which runs first before any function.");