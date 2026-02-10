const express = require('express');
const router = express.Router();
const controller = require('../controllers/roadmapController');

router.get('/roadmaps', controller.getRoadmaps);
router.get('/roadmaps/:id', controller.getRoadmapById);
router.get('/projects', controller.getAllProjects);
router.get('/practices', controller.getPractices);
router.get('/skills', controller.getAllSkills);
router.get('/skills/:id', controller.getSkillDetails);

module.exports = router;
