const fs = require('fs');
const path = require('path');

const rolesDir = path.join(__dirname, 'backend', 'data', 'roles');

function validateRole(data, file) {
    const errors = [];

    // Check Root Arrays
    const arrayFields = ['companiesHiring', 'skills', 'tools'];

    arrayFields.forEach(field => {
        if (data[field]) {
            if (!Array.isArray(data[field])) {
                errors.push(`'${field}' is defined but NOT an array (Type: ${typeof data[field]})`);
            }
        }
    });

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

            const errors = validateRole(data, file);
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
        console.log("All roles have valid root-level array structures.");
    } else {
        console.log(`Found ${totalErrors} role structure errors.`);
    }

} catch (err) {
    console.error("Script failed:", err.message);
}
