const { readData } = require('../utils/fileHandler');
const path = require('path');
const fs = require('fs').promises;

// Helper to read specific file
const readJsonFile = async (folder, id) => {
    try {
        const filePath = path.join(__dirname, `../../data/${folder}/${id}.json`);
        // Check if file exists
        try {
            await fs.access(filePath);
        } catch {
            return null;
        }

        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading file ${folder}/${id}:`, error);
        throw error;
    }
};

const getRoadmaps = async (req, res) => {
    try {
        const roadmaps = await readData('roadmaps.json');
        res.json(roadmaps);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch roadmaps' });
    }
};

const getRoadmapById = async (req, res) => {
    try {
        const roadmap = await readJsonFile('roles', req.params.id);

        if (!roadmap) {
            return res.status(404).json({ error: 'Roadmap not found' });
        }
        res.json(roadmap);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch roadmap' });
    }
};

const getSkillDetails = async (req, res) => {
    try {
        const skill = await readJsonFile('skills', req.params.id);

        if (!skill) {
            // Fallback: check if we can find basic info or return error
            return res.status(404).json({ error: 'Skill details not found' });
        }
        res.json(skill);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch skill details' });
    }
};

const getAllProjects = async (req, res) => {
    try {
        let allProjects = [];

        // 1. Get Projects from Roles
        const rolesDir = path.join(__dirname, '../../data/roles');
        try {
            const roleFiles = await fs.readdir(rolesDir);
            for (const file of roleFiles) {
                if (file.endsWith('.json')) {
                    const roleData = await readJsonFile('roles', file.replace('.json', ''));
                    if (roleData && roleData.projects) {
                        const enrichedProjects = roleData.projects.map(p => ({
                            ...p,
                            sourceType: 'Role',
                            sourceName: roleData.title
                        }));
                        allProjects = allProjects.concat(enrichedProjects);
                    }
                }
            }
        } catch (err) {
            console.error('Error reading roles for projects:', err);
        }

        // 2. Get Projects from Skills
        const skillsDir = path.join(__dirname, '../../data/skills');
        try {
            const skillFiles = await fs.readdir(skillsDir);
            for (const file of skillFiles) {
                if (file.endsWith('.json')) {
                    const skillData = await readJsonFile('skills', file.replace('.json', ''));
                    if (skillData && skillData.projects) {
                        const enrichedProjects = skillData.projects.map(p => ({
                            ...p,
                            sourceType: 'Skill',
                            sourceName: skillData.name
                        }));
                        allProjects = allProjects.concat(enrichedProjects);
                    }
                }
            }
        } catch (err) {
            console.error('Error reading skills for projects:', err);
        }

        // 3. Get Curated Projects from projects.json
        try {
            const curatedProjects = await readData('projects.json');
            if (curatedProjects && Array.isArray(curatedProjects)) {
                const enrichedCurated = curatedProjects.map(p => ({
                    ...p,
                    sourceType: 'Curated',
                    sourceName: p.category // Use category as source name
                }));
                allProjects = allProjects.concat(enrichedCurated);
            }
        } catch (err) {
            console.error('Error reading curated projects:', err);
        }

        res.json(allProjects);
    } catch (error) {
        console.error('Failed to fetch all projects:', error);
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
};

const getPractices = async (req, res) => {
    try {
        const practices = await readData('practices.json');
        res.json(practices);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch best practices' });
    }
};

const getAllSkills = async (req, res) => {
    try {
        let allSkills = [];

        const skillsDir = path.join(__dirname, '../../data/skills');
        const skillFiles = await fs.readdir(skillsDir);

        for (const file of skillFiles) {
            if (file.endsWith('.json')) {
                const skillData = await readJsonFile('skills', file.replace('.json', ''));
                if (skillData) {
                    allSkills.push({
                        id: file.replace('.json', ''),
                        name: skillData.name || file.replace('.json', ''),
                        overview: skillData.overview || '',
                        ...skillData
                    });
                }
            }
        }

        res.json(allSkills);
    } catch (error) {
        console.error('Failed to fetch all skills:', error);
        res.status(500).json({ error: 'Failed to fetch skills' });
    }
};

module.exports = {
    getRoadmaps,
    getRoadmapById,
    getSkillDetails,
    getAllProjects,
    getPractices,
    getAllSkills
};
