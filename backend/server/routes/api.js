const express = require('express');
const router = express.Router();
const controller = require('../controllers/roadmapController');
const quizController = require('../controllers/quizController');
const { getSkillPath, getAvailableDomains, getAvailableLevels } = require('../services/recommendation');

router.get('/roadmaps', controller.getRoadmaps);
router.get('/roadmaps/:id', controller.getRoadmapById);
router.get('/projects', controller.getAllProjects);
router.get('/practices', controller.getPractices);
router.get('/skills', controller.getAllSkills);
router.get('/skills/:id', controller.getSkillDetails);

// Skill Path Recommendation API
router.post('/recommend', (req, res) => {
    const { domain, level } = req.body;

    if (!domain || !level) {
        return res.status(400).json({ error: 'Both domain and level are required.' });
    }

    const skills = getSkillPath(domain, level);
    res.json({ domain, level, skills });
});

// Get available domains and levels for the courses page
router.get('/recommend/options', (req, res) => {
    res.json({
        domains: getAvailableDomains(),
        levels: getAvailableLevels()
    });
});

// Quiz Routes
router.get('/quiz/:skill_name', quizController.getQuizBySkill);
router.post('/submit-quiz', quizController.submitQuiz);

module.exports = router;
