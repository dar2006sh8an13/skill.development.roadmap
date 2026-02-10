const fs = require('fs');
const path = require('path');

const rolesDir = path.join(__dirname, 'backend', 'data', 'roles');

function validateRoadmap(data, file) {
    const errors = [];

    if (data.roadmap) {
        ['beginner', 'intermediate', 'advanced'].forEach(level => {
            if (data.roadmap[level]) {
                if (!Array.isArray(data.roadmap[level])) {
                    errors.push(`'roadmap.${level}' is defined but NOT an array (Type: ${typeof data.roadmap[level]})`);
                } else {
                    // Start checking items in the roadmap level
                    data.roadmap[level].forEach((item, index) => {
                        if (!item.name) errors.push(`roadmap.${level}[${index}] missing 'name'`);
                        if (!item.desc) errors.push(`roadmap.${level}[${index}] missing 'desc'`);
                    });
                }
            }
        });
    }

    return errors.length > 0 ? errors : null;
}

try {
    const files = fs.readdirSync(rolesDir);
    let totalErrors = 0;

    files.forEach(file => {
        if (!file.endsWith('.json')) return;

        try {
            const content = fs.readFileSync(path.join(rolesDir, file), 'utf8');
            const data = JSON.parse(content);

            const errors = validateRoadmap(data, file);
            if (errors) {
                console.error(`[FAIL] ${file} has errors:`);
                errors.forEach(e => console.error(`  - ${e}`));
                totalErrors++;
            }

        } catch (err) {
            console.error(`Error reading ${file}: ${err.message}`);
        }
    });

    if (totalErrors === 0) {
        console.log("All roles have valid roadmap structure.");
    } else {
        console.log(`Found ${totalErrors} role structure errors.`);
    }

} catch (err) {
    console.error("Script failed:", err.message);
}
