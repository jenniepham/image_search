var express = require('express');
var app = express();
var bingSearch = require('bing.search');
require('dotenv').config();
var logList;
var searchTerm;
var searchDate;

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var MongoUrl = process.env.MONGO_URL;


////////////////////////////////////////////////////////////////


var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('log');
  // Find some documents
  collection.find({}, {"_id": false}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
    logList = docs;
  });
};

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('log');
  // Insert some documents
  collection.insert({"search terms": searchTerm, "date": searchDate
  });
};

function getResult(img) {
    
    return { 
"url": img.url,
"snippet": img.title,
"thumbnail": img.thumbnail.url,
"context": img.sourceUrl
};
    
}

/////////////////////////////////////////////////////////////


app.get('/log', function(request, response){
  // Use connect method to connect to the server
MongoClient.connect(MongoUrl, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to get server");
  
  findDocuments(db, function() {
     db.close();
    });
});

    
    response.send(logList);
    
});

////////////////////////////////////////////////////////////

app.get('/:url', function(request, response){

var url = request.params.url;
var size = request.query.offset || 10;
var search = new bingSearch(process.env.API_KEY);

if (url !== 'favicon.ico'){
    searchTerm = url;
    searchDate = new Date().toLocaleString();

search.images(url, {top: size}, function(error, data){
if (error) {console.log(error)};

searchTerm = url;
searchDate = new Date;

// Use connect method to connect to the server
MongoClient.connect(MongoUrl, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to post server");
  
  insertDocuments (db, function() {
     db.close();
    });
});


response.send(data.map(getResult));

});
}



});

/////////////////////////////////////////////


app.listen(8080, function(){
   console.log("Server is online, listening at port 8080"); 
    
});