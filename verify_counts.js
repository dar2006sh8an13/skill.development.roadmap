const http = require('http');

function getCount(path) {
    return new Promise((resolve, reject) => {
        http.get(`http://localhost:3000${path}`, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    try {
                        const json = JSON.parse(data);
                        const count = Array.isArray(json) ? json.length : Object.keys(json).length;
                        console.log(`${path}: ${count} items`);
                    } catch (e) {
                        console.log(`${path}: Invalid JSON`);
                    }
                } else {
                    console.log(`${path}: Error ${res.statusCode}`);
                }
                resolve();
            });
        });
    });
}

(async () => {
    await getCount('/api/projects');
    await getCount('/api/practices');
})();
