const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const dbo = db.db('mydb');
  const sort = { name: 1 };
  dbo.collection('customers').find().sort(sort).toArray((err, result) => {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
