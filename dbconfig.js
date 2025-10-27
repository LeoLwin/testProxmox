const mysql = require('mysql2');

const pool = mysql.createPool({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "test",
    debug: false,
    charset: "utf8mb4"
});

// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.');
        }
    }

    if (connection) connection.release();

    return;
})

module.exports = pool.promise();