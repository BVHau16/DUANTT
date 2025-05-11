const express = require('express');
const app = require('./app');

const HOSTNAME = 'localhost';
const PORT = process.env.PORT || 3000;

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});
