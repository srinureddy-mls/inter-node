

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('https://sendgrid.com');

const msg = {
  to: 'srinulava4@gmail.com',
  from: 'cnureddy817@gmail.com',
  subject: 'Test Email',
  text: 'Hello, this is a test email.'
};

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent successfully');
  })
  .catch((error) => {
    if (error.response) {
      console.error('SendGrid Error Response:', error.response.body);
    } else {
      console.error('Error sending email:', error);
    }
  });



// const { MongoClient } = require('mongodb');

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'mydb';

// // Create a new MongoClient
// const client = new MongoClient(url);

// // Connect to the MongoDB server
// client.connect(function (err) {
//   if (err) {
//     console.error('Error connecting to the MongoDB server:', err);
//     return;
//   }

//   // Get the database object
//   const db = client.db(dbName);

//   console.log('Connected successfully to MongoDB server');

//   // Get the collection
//   const collection = db.collection('mycollection');

//   // Create a new document
//   const document = { name: 'John Doe', age: 30, email: 'johndoe@example.com' };

//   // Insert the document into the collection
//   collection.insertOne(document, function (err, result) {
//     if (err) {
//       console.error('Error inserting document:', err);
//       return;
//     }
//     console.log('Document inserted successfully:', result.insertedId);

//     // Close the MongoDB connection
//     client.close();
//   });
// });
