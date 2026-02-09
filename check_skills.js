const fs = require('fs');
const path = require('path');

const rolesDir = path.join(__dirname, 'backend/data/roles');
const skillsDir = path.join(__dirname, 'backend/data/skills');

const roles = fs.readdirSync(rolesDir).filter(f => f.endsWith('.json'));
const existingSkills = new Set(fs.readdirSync(skillsDir).filter(f => f.endsWith('.json')).map(f => f.replace('.json', '')));

console.log('Checking for missing skills...');

roles.forEach(roleFile => {
    const roleData = JSON.parse(fs.readFileSync(path.join(rolesDir, roleFile), 'utf8'));
    if (roleData.roadmap) {
        ['beginner', 'intermediate', 'advanced'].forEach(level => {
            if (roleData.roadmap[level]) {
                roleData.roadmap[level].forEach(item => {
                    const skillId = typeof item === 'string' ? item : item.skillId;
                    if (skillId && !existingSkills.has(skillId)) {
                        console.log(`Missing skill: ${skillId} (referenced in ${roleFile})`);
                    }
                });
            }
        });
    }
});
