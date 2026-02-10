const fs = require('fs');
const path = require('path');

const roadmapsPath = path.join(__dirname, 'backend', 'data', 'roadmaps.json');
const rolesDir = path.join(__dirname, 'backend', 'data', 'roles');
const skillsDir = path.join(__dirname, 'backend', 'data', 'skills');

try {
    const roadmaps = JSON.parse(fs.readFileSync(roadmapsPath, 'utf8'));

    console.log('Checking integrity of roadmaps.json...');

    let errors = 0;

    roadmaps.forEach(item => {
        if (item.type === 'role') {
            const filePath = path.join(rolesDir, `${item.id}.json`);
            if (!fs.existsSync(filePath)) {
                console.error(`[MISSING ROLE] ID: ${item.id}, Title: ${item.title} -> File not found: ${filePath}`);
                errors++;
            } else {
                try {
                    JSON.parse(fs.readFileSync(filePath, 'utf8'));
                } catch (e) {
                    console.error(`[INVALID JSON ROLE] ID: ${item.id} -> ${e.message}`);
                    errors++;
                }
            }
        } else if (item.type === 'skill') {
            const filePath = path.join(skillsDir, `${item.id}.json`);
            if (!fs.existsSync(filePath)) {
                console.error(`[MISSING SKILL] ID: ${item.id}, Title: ${item.title} -> File not found: ${filePath}`);
                errors++;
            } else {
                try {
                    JSON.parse(fs.readFileSync(filePath, 'utf8'));
                } catch (e) {
                    console.error(`[INVALID JSON SKILL] ID: ${item.id} -> ${e.message}`);
                    errors++;
                }
            }
        }
    });

    if (errors === 0) {
        console.log('Integrity check passed! All roles and skills have corresponding valid JSON files.');
    } else {
        console.log(`Found ${errors} issues.`);
    }

} catch (err) {
    console.error('Error:', err.message);
}
