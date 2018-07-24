var mongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;
mongoClient.connect("mongodb://localhost/node-intern-challenge")
	.then(conn => global.conn = conn.db("node-intern-challenge"))
	.catch(err => console.log(err))


function findAll(callback){  
    global.conn.collection("livro").find({}).toArray(callback);
}

function insert(livro, callback){
    global.conn.collection("livro").insert(livro, callback);
}

function update(id, livro, callback){
    global.conn.collection("livro").updateOne({"_id":id}, {$set: livro}, callback);
}

function deleteOne(id, callback){
    global.conn.collection("livro").deleteOne({"_id": id}, callback);
}

module.exports = { findAll, insert, update, deleteOne }