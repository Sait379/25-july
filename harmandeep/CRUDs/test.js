const db = require('./db/db');

db.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Query error', err.stack);
  } else {
    console.log('Server time:', res.rows[0]);
  }
  db.end(); // Close the connection
});
