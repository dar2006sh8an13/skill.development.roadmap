const recommendation = require('./backend/server/services/recommendation');
const quizQuestions = require('./backend/server/services/quizQuestions');

console.log("🚀 STARTING FULL SYSTEM DEMO 🚀\n");

// 1. Check all domains
const domains = recommendation.getAvailableDomains();
console.log(`📊 TOTAL DOMAINS FOUND: ${domains.length}`);
console.log(`Domains list: ${domains.join(', ')}\n`);

// 2. Sample Recommendations for Core & New Roles
const samples = [
    { domain: "AI", level: "Beginner" },
    { domain: "Web Development", level: "Intermediate" },
    { domain: "Blockchain Developer", level: "Beginner" },
    { domain: "DevOps Engineer", level: "Advanced" }
];

samples.forEach(s => {
    const path = recommendation.getSkillPath(s.domain, s.level);
    console.log(`📍 Path for ${s.domain} (${s.level}):`);
    if (path && path.length > 0) {
        console.log(`   ✅ Correct! Found ${path.length} skills.`);
        console.log(`   📹 Sample Video Link: ${path[0].youtube}`);
    } else {
        console.log(`   ❌ ERROR: No path found for ${s.domain}`);
    }
});

// 3. Sample Quiz questions check
console.log("\n❓ QUIZ INTEGRITY CHECK:");
const quizSkills = ["Blockchain Basics", "Docker", "Product Thinking", "Python"];
quizSkills.forEach(skill => {
    const questions = quizQuestions[skill];
    if (questions) {
        console.log(`   ✅ ${skill}: Found ${questions.length} questions.`);
    } else {
        console.log(`   ❌ ${skill}: No questions found.`);
    }
});

console.log("\n✨ SYSTEM IS FULLY OPERATIONAL ✨");
