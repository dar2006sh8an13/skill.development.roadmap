const recommendation = require('./backend/server/services/recommendation');
const quizQuestions = require('./backend/server/services/quizQuestions');

console.log("=== LOCAL RECOMMENDATION TEST ===");

const domains = recommendation.getAvailableDomains();
console.log(`Available Domains: ${domains.join(', ')}`);

const testDomain = "DevOps Engineer";
const testLevel = "Beginner";
console.log(`\nTesting Recommendation for: ${testDomain} (${testLevel})`);

const path = recommendation.getSkillPath(testDomain, testLevel);
console.log("Path:", JSON.stringify(path, null, 2));

console.log("\n=== LOCAL QUIZ TEST ===");
const testSkill = "Docker";
const questions = quizQuestions[testSkill];
if (questions) {
    console.log(`Questions for ${testSkill}:FOUND (${questions.length} questions)`);
    console.log("First question:", questions[0].question);
} else {
    console.log(`Questions for ${testSkill}: NOT FOUND`);
}

const testSkill2 = "Blockchain Basics";
const questions2 = quizQuestions[testSkill2];
if (questions2) {
    console.log(`Questions for ${testSkill2}: FOUND (${questions2.length} questions)`);
    console.log("First question:", questions2[0].question);
} else {
    console.log(`Questions for ${testSkill2}: NOT FOUND`);
}
