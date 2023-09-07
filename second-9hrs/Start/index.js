const express = require('express');

const app = express();



//Middleware code:
const middleware = (req,res,next) =>{
    console.log("Middleware captured...");
    next();
}

app.use(middleware); //this is application level router

app.get('/',(req,res)=>{
    res.send("This is home page");
})
app.get('/about',(req,res)=>{
    res.send("This is about page");
})

// //this is sib=ngle route level middleware
// app.get('/users',middleware,(req,res)=>{
//     res.send("This is users page");
// })

app.listen(3000);
console.log("Server is listening on port 3000");