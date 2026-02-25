const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api';

async function testQuizAPI() {
    console.log('--- Testing Quiz API ---');

    try {
        // 1. Test Fetch Quiz
        console.log('\n1. Fetching quiz for Python...');
        const quizRes = await axios.get(`${BASE_URL}/quiz/Python`);
        console.log('Status:', quizRes.status);
        if (quizRes.data.questions && quizRes.data.questions.length > 0) {
            console.log('✅ Quiz questions retrieved successfully');
        } else {
            console.log('❌ Failed to retrieve quiz questions');
        }

        // 2. Test Submit Quiz (Correct)
        console.log('\n2. Submitting correct answers for Python...');
        const submitRes = await axios.post(`${BASE_URL}/submit-quiz`, {
            skill_name: 'Python',
            answers: ['A storage location for data', 'def'],
            user_id: 1
        });
        console.log('Status:', submitRes.status);
        console.log('Result:', submitRes.data);
        if (submitRes.data.passed === true && submitRes.data.score === 100) {
            console.log('✅ Score calculation for correct answers works');
        } else {
            console.log('❌ Score calculation failed');
        }

        // 3. Test Submit Quiz (Incorrect)
        console.log('\n3. Submitting incorrect answers for Python...');
        const failRes = await axios.post(`${BASE_URL}/submit-quiz`, {
            skill_name: 'Python',
            answers: ['A type of loop', 'func'],
            user_id: 1
        });
        console.log('Status:', failRes.status);
        console.log('Result:', failRes.data);
        if (failRes.data.passed === false && failRes.data.score === 0) {
            console.log('✅ Score calculation for incorrect answers works');
        } else {
            console.log('❌ Score calculation failed');
        }

    } catch (error) {
        console.error('❌ Test failed with error:', error.response ? error.response.data : error.message);
        console.log('\nNOTE: Make sure the backend server (index.js/server.js) is running on port 5000!');
    }
}

testQuizAPI();
