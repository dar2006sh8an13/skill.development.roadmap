const fs = require('fs');
const path = require('path');

// 1. Setup Mock DOM Environment BEFORE loading main.js code
global.window = {
    location: { href: 'http://localhost:3000/roadmaps/ml-engineer', pathname: '/roadmaps/ml-engineer', hash: '' },
    addEventListener: () => { },
    getComputedStyle: () => ({ display: 'block' }),
    scrollTo: () => { },
    innerWidth: 1024
};

global.document = {
    addEventListener: () => { },
    getElementById: (id) => {
        // console.log(`getElementById: ${id}`);
        // Return a mock element that can handle common DOM operations
        return createMockElement(id);
    },
    querySelector: (sel) => createMockElement(sel),
    querySelectorAll: (sel) => [],
    createElement: (tag) => createMockElement(tag),
};

global.history = {
    pushState: () => { }
};

global.API_BASE_URL = 'http://localhost:3000';
global.alert = (msg) => console.log(`[ALERT] ${msg}`);

function createMockElement(idOrTag) {
    return {
        id: idOrTag,
        textContent: '',
        innerHTML: '',
        className: '',
        style: {},
        appendChild: () => { },
        classList: {
            add: () => { },
            remove: () => { },
            toggle: () => { },
            contains: () => false
        },
        addEventListener: () => { },
        getAttribute: () => null,
        setAttribute: () => { },
        querySelector: () => createMockElement('nested'),
        querySelectorAll: () => [],
        closest: () => createMockElement('closest')
    };
}

// 2. Load main.js content
const mainJsPath = path.join(__dirname, 'frontend', 'assets', 'js', 'main.js');
let mainJsContent = fs.readFileSync(mainJsPath, 'utf8');

// remove DOMContentLoaded listener to prevent auto-execution if we were just evaling
// But actually we WANT to define the functions globally. 
// main.js defines functions globally (or at top level).
// We should wrap it in a context or just eval it.

// 3. Eval main.js to define functions in this scope
// We need to be careful about 'const' redeclarations if we ran this multiple times, but this is a one-off script.
try {
    eval(mainJsContent);
} catch (e) {
    console.error("Error evaluating main.js:", e);
    process.exit(1);
}

// 4. Load Data
const jsonPath = path.join(__dirname, 'backend', 'data', 'roles', 'ml-engineer.json');
const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// 5. Trigger renderRoadmap
console.log("Starting renderRoadmap validation...");
try {
    // We assume renderRoadmap is now defined globally via eval
    renderRoadmap(jsonData);
    console.log("renderRoadmap finished successfully.");
} catch (e) {
    console.error("CRASH detected in renderRoadmap!");
    console.error(e);
}
