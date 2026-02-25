const fetch = require('node-fetch');

async function testQuizzes() {
    const skillsToTest = [
        "Git & GitHub",
        "AWS Basics",
        "Kubernetes",
        "Basic Statistics",
        "Android Studio",
        "System Design"
    ];

    console.log('Testing Quiz API for new skills...\n');

    for (const skill of skillsToTest) {
        try {
            const response = await fetch(`http://localhost:3000/api/quiz/${encodeURIComponent(skill)}`);
            const data = await response.json();

            if (data.questions && data.questions.length > 0) {
                console.log(`✅ Success: Found ${data.questions.length} questions for "${skill}"`);
                console.log(`   Sample Q: ${data.questions[0].question}\n`);
            } else {
                console.log(`❌ Fail: No questions found for "${skill}"`);
                console.log(`   Response: ${JSON.stringify(data)}\n`);
            }
        } catch (err) {
            console.error(`💥 Error testing "${skill}":`, err.message);
        }
    }
}

testQuizzes();
