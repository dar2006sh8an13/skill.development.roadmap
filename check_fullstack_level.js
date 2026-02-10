const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'backend', 'data', 'roles', 'full-stack.json');

try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    if (data.projects) {
        data.projects.forEach((p, index) => {
            if (!p.level) {
                console.error(`[ERROR] Project at index ${index} (ID: ${p.id}) is missing 'level' field.`);
            } else {
                // console.log(`[OK] Project ${p.id} has level: ${p.level}`);
            }
        });
        console.log('Check complete.');
    } else {
        console.log('No projects found in full-stack.json');
    }

} catch (err) {
    console.error('Error:', err.message);
}
