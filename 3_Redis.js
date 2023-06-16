const redis = require('redis');
const client = redis.createClient();

// Set a key-value pair
client.set('mykey', 'myvalue', (err, reply) => {
  if (err) throw err;
  console.log(reply); // OK
});

// Get the value for a key
client.get('mykey', (err, reply) => {
  if (err) throw err;
  console.log(reply); // myvalue
});
