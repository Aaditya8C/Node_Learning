const path = require('node:path');

// const a = path.extname('index.js')
// console.log(a);
const b = path.extname(__filename)
console.log(__filename)
console.log(b);