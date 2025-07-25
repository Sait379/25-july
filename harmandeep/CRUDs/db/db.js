const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',       // usually 'postgres'
  password: 'root@123',
  database: 'university'        // e.g., 'testdb'
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL 🚀'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client;
