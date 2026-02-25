const recommendation = require('./backend/server/services/recommendation');

console.log("=== CORE SKILL PATH TEST ===");

const testPaths = [
    { domain: "AI", level: "Beginner" },
    { domain: "Web Development", level: "Intermediate" }
];

testPaths.forEach(p => {
    console.log(`\nTesting: ${p.domain} (${p.level})`);
    const skills = recommendation.getSkillPath(p.domain, p.level);
    if (skills && skills.length > 0) {
        console.log(`✅ Success: Found ${skills.length} skills`);
        console.log(`First skill: ${skills[0].skill}, Video: ${skills[0].youtube}`);
    } else {
        console.log(`❌ Failed: No skills found for ${p.domain}`);
    }
});
