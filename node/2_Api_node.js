const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];
  res.json(users);
});

app.listen(3000, () => {
  console.log('API server is running on port 3000');
});