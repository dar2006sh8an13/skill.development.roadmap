const API_BASE_URL = "http://localhost:3000";

async function testEndpoints() {
    try {
        console.log(`Testing API at ${API_BASE_URL}...`);

        // 1. Fetch all roadmaps
        const r1 = await fetch(`${API_BASE_URL}/api/roadmaps`);
        if (!r1.ok) throw new Error(`Failed to fetch /api/roadmaps: ${r1.status}`);
        const roadmaps = await r1.json();
        console.log(`✅ fetched /api/roadmaps (${roadmaps.length} items)`);

        // Check Machine Learning Skill entry
        const mlSkill = roadmaps.find(r => r.id === 'machine-learning-skill');
        if (mlSkill) {
            console.log(`Found 'machine-learning-skill' in list. Type: ${mlSkill.type}`);
        } else {
            console.error(`❌ 'machine-learning-skill' NOT FOUND in /api/roadmaps list!`);
        }

        // 2. Fetch ML Engineer Role
        const r2 = await fetch(`${API_BASE_URL}/api/roadmaps/ml-engineer`);
        if (r2.ok) {
            console.log(`✅ fetched /api/roadmaps/ml-engineer`);
        } else {
            console.error(`❌ Failed to fetch /api/roadmaps/ml-engineer: ${r2.status} ${r2.statusText}`);
        }

        // 3. Fetch Machine Learning Skill
        const r3 = await fetch(`${API_BASE_URL}/api/skills/machine-learning-skill`);
        if (r3.ok) {
            console.log(`✅ fetched /api/skills/machine-learning-skill`);
        } else {
            console.error(`❌ Failed to fetch /api/skills/machine-learning-skill: ${r3.status} ${r3.statusText}`);
        }

    } catch (err) {
        console.error('Test failed:', err.message);
    }
}

testEndpoints();
