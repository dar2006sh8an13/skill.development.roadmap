// Test script to verify backend API endpoints
const API_BASE_URL = "https://skill-deveploment-roadmap.onrender.com";

console.log("Testing backend endpoints...\n");

async function testEndpoint(endpoint) {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        const data = await response.json();
        console.log(`✅ ${endpoint}:`);
        console.log(`   Status: ${response.status}`);
        console.log(`   Data type: ${Array.isArray(data) ? 'Array' : typeof data}`);
        if (Array.isArray(data)) {
            console.log(`   Count: ${data.length}`);
            if (data.length > 0) {
                console.log(`   First item keys: ${Object.keys(data[0]).join(', ')}`);
            }
        }
        console.log('');
        return { success: true, data };
    } catch (error) {
        console.log(`❌ ${endpoint}: ${error.message}\n`);
        return { success: false, error: error.message };
    }
}

(async () => {
    await testEndpoint('/api/roadmaps');
    await testEndpoint('/api/skills');
    await testEndpoint('/api/projects');
    await testEndpoint('/api/practices');
})();
