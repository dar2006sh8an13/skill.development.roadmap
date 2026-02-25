const fetch = require('node-fetch');

async function verifyContent() {
    console.log('--- Verifying New Roadmap Content ---');
    try {
        // 1. Check all roadmaps list
        const listRes = await fetch('http://localhost:3000/api/roadmaps');
        const roadmaps = await listRes.json();
        const idsToCheck = ['cloud-architect', 'embedded-engineer', 'solidity'];

        console.log('Checking master roadmaps list:');
        idsToCheck.forEach(id => {
            const found = roadmaps.find(r => r.id === id);
            console.log(`- ${id}: ${found ? 'FOUND' : 'NOT FOUND'} (${found ? found.title : 'N/A'})`);
        });

        // 2. Check detailed roadmaps
        console.log('\nChecking detailed roadmap data:');
        for (const id of idsToCheck) {
            const detailRes = await fetch(`http://localhost:3000/api/roadmaps/${id}`);
            if (detailRes.ok) {
                const detail = await detailRes.json();
                console.log(`- ${id}: OK (Found ${detail.roadmap ? Object.keys(detail.roadmap).length : 0} phases)`);
            } else {
                console.log(`- ${id}: FAILED (Status: ${detailRes.status})`);
            }
        }

    } catch (err) {
        console.error('Verification failed:', err.message);
        console.log('Ensure the backend is running at http://localhost:3000');
    }
}

verifyContent();
