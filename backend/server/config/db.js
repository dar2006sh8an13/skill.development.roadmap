const mysql = require('mysql2');
require('dotenv').config();

// Create MySQL connection pool
let pool;
let promisePool;

try {
    pool = mysql.createPool({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'roadmap_auth',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

    promisePool = pool.promise();

    // Test connection
    pool.getConnection((err, connection) => {
        if (err) {
            console.warn('⚠️  MySQL connection failed. Running in MOCK DATABASE mode.');
            console.warn('Reason:', err.message);

            // Create a mock promise pool that doesn't crash
            promisePool = {
                query: async (sql, params) => {
                    console.log(' [MOCK DB] Executing query:', sql);
                    console.log(' [MOCK DB] Params:', params);
                    return [[]]; // Return empty results
                },
                execute: async (sql, params) => {
                    console.log(' [MOCK DB] Executing statement:', sql);
                    return [[]];
                }
            };
        } else {
            console.log('✅ MySQL database connected successfully');
            connection.release();
        }
    });
} catch (error) {
    console.error('CRITICAL: Failed to initialize database pool:', error.message);
    // Provide a safe fallback
    promisePool = {
        query: async () => [[]],
        execute: async () => [[]]
    };
}

module.exports = promisePool;

