const fs = require('fs');
const path = require('path');

const rolesDir = path.join(__dirname, 'backend', 'data', 'roles');

function validateProjects(data, file) {
    const errors = [];

    if (data.projects) {
        if (!Array.isArray(data.projects)) {
            errors.push(`'projects' is defined but NOT an array`);
        } else {
            data.projects.forEach((p, index) => {
                if (!p.title) errors.push(`projects[${index}] missing 'title'`);

                // keyConcepts
                if (p.keyConcepts && !Array.isArray(p.keyConcepts)) {
                    errors.push(`projects[${index}].keyConcepts is present but NOT an array (Type: ${typeof p.keyConcepts})`);
                }

                // learningOutcomes
                if (p.learningOutcomes && !Array.isArray(p.learningOutcomes)) {
                    errors.push(`projects[${index}].learningOutcomes is present but NOT an array (Type: ${typeof p.learningOutcomes})`);
                }

                // techStack
                if (p.techStack && !Array.isArray(p.techStack)) {
                    errors.push(`projects[${index}].techStack is present but NOT an array (Type: ${typeof p.techStack})`);
                }

                // implementationPlan
                if (p.implementationPlan && !Array.isArray(p.implementationPlan)) {
                    errors.push(`projects[${index}].implementationPlan is present but NOT an array (Type: ${typeof p.implementationPlan})`);
                }
            });
        }
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

            const errors = validateProjects(data, file);
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
        console.log("All roles have valid projects structure.");
    } else {
        console.log(`Found ${totalErrors} role project structure errors.`);
    }

} catch (err) {
    console.error("Script failed:", err.message);
}
