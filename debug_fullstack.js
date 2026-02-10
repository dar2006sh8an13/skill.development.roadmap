const API_BASE_URL = "http://localhost:3000";

async function testFullStack() {
    try {
        console.log(`Testing /api/roadmaps/full-stack...`);
        const res = await fetch(`${API_BASE_URL}/api/roadmaps/full-stack`);

        if (res.ok) {
            const data = await res.json();
            console.log(`✅ Success! Received valid JSON for full-stack.`);
            console.log(`Title: ${data.title}`);
            console.log(`Projects: ${data.projects ? data.projects.length : 0}`);
        } else {
            console.error(`❌ Failed: ${res.status} ${res.statusText}`);
            const text = await res.text();
            console.error(`Response: ${text}`);
        }
    } catch (err) {
        console.error('Network Error:', err.message);
    }
}

testFullStack();
