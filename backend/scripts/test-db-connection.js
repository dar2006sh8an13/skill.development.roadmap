const mysql = require('mysql2/promise');
require('dotenv').config();

async function testDatabaseConnection() {
    console.log('🔍 Testing MySQL database connection...\n');

    try {
        // Create connection
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });

        console.log('✅ Successfully connected to MySQL database!');
        console.log(`   Host: ${process.env.DB_HOST}`);
        console.log(`   Database: ${process.env.DB_NAME}`);
        console.log(`   User: ${process.env.DB_USER}\n`);

        // Test query
        const [rows] = await connection.execute('SELECT 1 + 1 AS result');
        console.log('✅ Test query successful:', rows[0]);

        // Check if users table exists
        const [tables] = await connection.execute(
            "SHOW TABLES LIKE 'users'"
        );

        if (tables.length > 0) {
            console.log('✅ Users table exists');

            // Get table structure
            const [columns] = await connection.execute('DESCRIBE users');
            console.log('\n📋 Users table structure:');
            columns.forEach(col => {
                console.log(`   - ${col.Field}: ${col.Type} ${col.Null === 'NO' ? 'NOT NULL' : ''}`);
            });
        } else {
            console.log('⚠️  Users table does not exist');
            console.log('   Run the init-db.sql script to create it');
        }

        await connection.end();
        console.log('\n✅ Database connection test completed successfully!');

    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        console.error('\n📝 Troubleshooting:');
        console.error('   1. Check your .env file exists in backend/ directory');
        console.error('   2. Verify DB_HOST, DB_USER, DB_PASSWORD, DB_NAME are correct');
        console.error('   3. Ensure your database is running and accessible');
        console.error('   4. Check firewall settings if using cloud database');
        process.exit(1);
    }
}

testDatabaseConnection();
