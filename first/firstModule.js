// const addFunc = require("./secondModule.js"); //This is miport is for common js module
// import {add} from './secondMod.mjs'
import * as cal from './secondMod.mjs'

// add(78,12); //to use this es6 module we have to write "type" : "module"
console.log(cal);
console.log(cal.subtract());
