const MongoClient = require('mongodb').MongoClient;
     const url = 'mongodb://localhost:27017/mydb';

     MongoClient.connect(url, (err, db) => {
       if (err) throw err;
       console.log('Connected to MongoDB!');
       // Perform database operations here
       db.close();
     });
