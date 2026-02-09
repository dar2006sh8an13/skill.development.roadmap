const http = require('http');

function testEndpoint(path) {
    return new Promise((resolve, reject) => {
        http.get(`http://localhost:3000${path}`, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                console.log(`GET ${path}: Status ${res.statusCode}`);
                if (res.statusCode === 200) {
                    try {
                        const json = JSON.parse(data);
                        console.log(`GET ${path}: Valid JSON received. Items/Keys: ${Array.isArray(json) ? json.length : Object.keys(json).length}`);
                    } catch (e) {
                        console.log(`GET ${path}: Invalid JSON`);
                    }
                } else {
                    console.log(`GET ${path}: Error body: ${data}`);
                }
                resolve();
            });
        }).on('error', (err) => {
            console.error(`GET ${path}: Request failed - ${err.message}`);
            resolve();
        });
    });
}

async function runTests() {
    await testEndpoint('/api/projects');
    await testEndpoint('/api/practices');
}

runTests();
