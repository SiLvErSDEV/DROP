// my-app-backend/db.js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', // replace with your PostgreSQL username
    host: 'localhost',
    database: 'DROP_V1', // replace with your PostgreSQL database name
    password: 'Jp202020', // replace with your PostgreSQL password
    port: 5432,
});

module.exports = pool;
