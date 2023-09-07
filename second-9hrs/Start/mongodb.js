const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://Aaditya:<mongoaadi>@cluster0.qpbqksx.mongodb.net/?retryWrites=true&w=majority';
// const url = ' mongodb://127.0.0.1:27017';
const database = 'Sample1';
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('Users');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();