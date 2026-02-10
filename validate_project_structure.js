const fs = require('fs');
const path = require('path');

const rolesDir = path.join(__dirname, 'backend', 'data', 'roles');

function validateProject(p, file, index) {
    const errors = [];
    const id = p.id || `index-${index}`;

    // Check Level
    if (!p.level) errors.push(`Missing 'level'`);
    else if (typeof p.level !== 'string') errors.push(`'level' is not a string`);

    // Check Arrays requiring .join() or .map()
    const arrayFields = ['keyConcepts', 'techStack', 'modules', 'guide', 'requirements', 'implementationPlan', 'learningOutcomes', 'commonPitfalls'];

    arrayFields.forEach(field => {
        if (p[field]) {
            if (!Array.isArray(p[field])) {
                errors.push(`'${field}' is defined but NOT an array (Type: ${typeof p[field]})`);
            }
        }
    });

    return errors.length > 0 ? { id, errors } : null;
}

try {
    const files = fs.readdirSync(rolesDir);
    let totalErrors = 0;

    files.forEach(file => {
        if (!file.endsWith('.json')) return;

        try {
            const content = fs.readFileSync(path.join(rolesDir, file), 'utf8');
            const data = JSON.parse(content);

            if (data.projects && Array.isArray(data.projects)) {
                data.projects.forEach((p, i) => {
                    const result = validateProject(p, file, i);
                    if (result) {
                        console.error(`[FAIL] ${file} -> Project ${result.id}:`);
                        result.errors.forEach(e => console.error(`  - ${e}`));
                        totalErrors++;
                    }
                });
            }
        } catch (err) {
            console.error(`Error reading ${file}: ${err.message}`);
        }
    });

    if (totalErrors === 0) {
        console.log("All projects in all role files have valid data structure.");
    } else {
        console.log(`Found ${totalErrors} project structure errors.`);
    }

} catch (err) {
    console.error("Script failed:", err.message);
}
