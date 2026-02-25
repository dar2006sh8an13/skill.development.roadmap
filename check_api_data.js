const fetch = require('node-fetch');

async function checkApi() {
    try {
        const response = await fetch('http://localhost:3000/api/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ domain: 'AI', level: 'Beginner' })
        });
        const data = await response.json();
        console.log('API Response for AI/Beginner:', JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('API Check failed:', err);
    }
}

checkApi();
