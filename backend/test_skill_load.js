const { readData } = require('./server/utils/fileHandler');
const path = require('path');

async function test() {
    try {
        console.log('Testing readData...');
        const skillsData = await readData('skill-details.json');
        console.log('Keys found:', Object.keys(skillsData));

        const id = 'html';
        const skill = skillsData[id];

        if (skill) {
            console.log('Found HTML skill:', skill.name);
        } else {
            console.error('HTML skill NOT found');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

test();
