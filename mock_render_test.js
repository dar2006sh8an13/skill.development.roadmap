const fs = require('fs');
const path = require('path');

// Mock DOM
const document = {
    getElementById: (id) => {
        // console.log(`getElementById: ${id}`);
        return {
            textContent: '',
            innerHTML: '',
            appendChild: (child) => { },
            style: {},
            querySelector: () => ({ innerHTML: '' }) // Mock for projectsSection
        };
    },
    createElement: (tag) => {
        return {
            className: '',
            innerHTML: '',
            appendChild: (child) => { },
            style: {},
            querySelector: () => null,
            querySelectorAll: () => []
        };
    }
};
global.document = document;

// Mock capitalize inline
// We will test the logic as it is in the recent main.js (inline)

function renderRoadmap(data) {
    try {
        console.log("Start renderRoadmap");
        document.getElementById('roadmap-title').textContent = data.title;
        document.getElementById('roadmap-desc').textContent = data.description;

        // Sidebar Data
        document.getElementById('role-scope').textContent = data.careerScope || 'High demand.';

        const companiesContainer = document.getElementById('role-companies');
        companiesContainer.innerHTML = '';
        if (data.companiesHiring) {
            data.companiesHiring.forEach(co => {
                const span = document.createElement('span');
                span.className = 'tag';
                span.textContent = co;
                companiesContainer.appendChild(span);
            });
        }

        document.getElementById('role-salary').textContent = "Approx $80k - $150k+";

        // Roadmap Steps
        const content = document.getElementById('roadmap-content');
        content.innerHTML = '';

        ['beginner', 'intermediate', 'advanced'].forEach(level => {
            if (data.roadmap && data.roadmap[level]) {
                const section = document.createElement('div');
                section.className = 'roadmap-level';

                // Inline capitalize logic test
                const title = level.charAt(0).toUpperCase() + level.slice(1);

                section.innerHTML = `...`; // Template literal simulation

                // Inner map test
                data.roadmap[level].map(item => {
                    // Access properties to check for crash
                    const s = item.status || 'required';
                    const id = item.skillId || '';
                    const n = item.name;
                    const d = item.desc;
                    return '';
                }).join('');

                content.appendChild(section);
            }
        });

        // Render Enhanced Projects Section
        if (data.projects && data.projects.length > 0) {
            console.log("Rendering projects...");
            renderProjects(data.projects);
        }

        // Render Tools
        if (data.tools) {
            console.log("Rendering tools...");
            data.tools.map(t => ``).join('');
        }

        console.log("renderRoadmap completed successfully");

    } catch (error) {
        console.error("CRASH IN renderRoadmap!");
        console.error(error);
    }
}

function renderProjects(projects) {
    try {
        const content = document.getElementById('roadmap-content');

        // Mock querySelector
        let projectsSection = { innerHTML: '', querySelectorAll: () => [] };

        // Template literal simulation for projects
        projects.map(p => {
            // Check property access
            const l = p.level ? p.level.toLowerCase() : 'beginner';
            const t = p.title;
            const concepts = (p.keyConcepts || p.learningOutcomes || []).join(', ');
            const tech = (p.techStack || []).map(t => t).join('');

            // Implementation Plan
            if (p.implementationPlan) {
                p.implementationPlan.map(s => s).join('');
            }

            return '';
        }).join('');

        console.log("renderProjects completed successfully");

    } catch (e) {
        console.error("CRASH IN renderProjects!");
        console.error(e);
        throw e; // Re-throw to be caught by renderRoadmap
    }
}

// Load Data
try {
    const jsonPath = path.join(__dirname, 'backend', 'data', 'roles', 'ml-engineer.json');
    const jsonContent = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(jsonContent);
    // console.log("Data loaded. Running render...");
    renderRoadmap(data);
} catch (e) {
    console.error("Setup failed:", e);
}
