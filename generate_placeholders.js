const fs = require('fs');
const path = require('path');

const rolesDir = path.join(__dirname, 'backend/data/roles');
const skillsDir = path.join(__dirname, 'backend/data/skills');

if (!fs.existsSync(skillsDir)) {
    fs.mkdirSync(skillsDir, { recursive: true });
}

const roles = fs.readdirSync(rolesDir).filter(f => f.endsWith('.json'));
const existingSkills = new Set(fs.readdirSync(skillsDir).filter(f => f.endsWith('.json')).map(f => f.replace('.json', '')));

console.log('Generating missing skills...');

const validSkills = [];

roles.forEach(roleFile => {
    const roleData = JSON.parse(fs.readFileSync(path.join(rolesDir, roleFile), 'utf8'));
    if (roleData.roadmap) {
        ['beginner', 'intermediate', 'advanced'].forEach(level => {
            if (roleData.roadmap[level]) {
                roleData.roadmap[level].forEach(item => {
                    const skillId = typeof item === 'string' ? item : item.skillId;

                    if (skillId && !existingSkills.has(skillId)) {
                        console.log(`Generating placeholder for: ${skillId}`);

                        const placeholder = {
                            id: skillId,
                            name: skillId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                            type: "skill",
                            overview: `This is a placeholder for the ${skillId} skill. Detailed content is coming soon.`,
                            prerequisites: [],
                            concepts: ["Basics", "Advanced Topics"],
                            learningOrder: ["Introduction", "Deep Dive"],
                            tools: [],
                            roadmap: {
                                beginner: ["Learn the basics"],
                                intermediate: ["Practice with projects"],
                                advanced: ["Master advanced concepts"]
                            },
                            dateCreated: new Date().toISOString()
                        };

                        fs.writeFileSync(path.join(skillsDir, `${skillId}.json`), JSON.stringify(placeholder, null, 2));
                        existingSkills.add(skillId); // Add to set to avoid duplicates
                    }
                });
            }
        });
    }
});

console.log('Done.');
