const MongoClient = require('mongodb').MongoClient;
     const url = 'mongodb://localhost:27017/mydb';
     MongoClient.connect(url, (err, db) => {
       if (err) throw err;
       const dbo = db.db('mydb');
       const myObj = { name: 'John', age: 30 };
       dbo.collection('customers').insertOne(myObj, (err, res) => {
         if (err) throw err;
         console.log('Document inserted!');
         db.close();
       });
     });
