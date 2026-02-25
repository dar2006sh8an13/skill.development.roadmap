const db = require('../config/db');
const QUIZ_QUESTIONS = require('../services/quizQuestions');

/**
 * Get quiz questions for a specific skill.
 */
const getQuizBySkill = async (req, res) => {
    try {
        const { skill_name } = req.params;

        // Find matching skill key (case-insensitive)
        const skillKey = Object.keys(QUIZ_QUESTIONS).find(
            key => key.toLowerCase() === skill_name.toLowerCase()
        );

        const questions = skillKey ? QUIZ_QUESTIONS[skillKey] : null;

        if (!questions) {
            return res.status(404).json({ error: `No quiz found for skill: ${skill_name}` });
        }

        // Remove answers from questions before sending to frontend
        const questionsWithoutAnswers = questions.map(q => ({
            question: q.question,
            options: q.options
        }));

        res.json({ skill: skill_name, questions: questionsWithoutAnswers });
    } catch (error) {
        console.error('Error fetching quiz:', error);
        res.status(500).json({ error: 'Failed to fetch quiz questions' });
    }
};

/**
 * Submit quiz answers and calculate score.
 */
const submitQuiz = async (req, res) => {
    try {
        const { skill_name, answers, user_id } = req.body;
        const questions = QUIZ_QUESTIONS[skill_name];

        if (!questions) {
            return res.status(404).json({ error: `Quiz not found for skill: ${skill_name}` });
        }

        let correctCount = 0;
        questions.forEach((q, index) => {
            if (answers[index] === q.answer) {
                correctCount++;
            }
        });

        const score = (correctCount / questions.length) * 100;
        const passed = score >= 70;

        console.log(`Quiz submitted for ${skill_name}. Score: ${score}%, Passed: ${passed}`);

        // Save result to database if user_id is provided
        if (user_id) {
            try {
                await db.query(
                    'INSERT INTO quiz_results (user_id, skill_name, score, passed) VALUES (?, ?, ?, ?)',
                    [user_id, skill_name, score, passed]
                );
                console.log('Quiz result saved to database.');
            } catch (dbError) {
                console.error('Failed to save quiz result to database (MySQL might be down):', dbError.message);
                // We don't return 500 here because the quiz calculation itself worked.
                // This allows the MVP to work even without a functional DB.
            }
        }

        res.json({
            skill_name,
            score,
            passed,
            message: passed ? 'Congratulations! You passed the quiz.' : 'Keep learning and try again.'
        });
    } catch (error) {
        console.error('Error submitting quiz:', error);
        res.status(500).json({ error: 'Failed to submit quiz' });
    }
};

module.exports = {
    getQuizBySkill,
    submitQuiz
};
