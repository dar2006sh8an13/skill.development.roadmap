const fs = require('fs').promises;
const path = require('path');

const dataDir = path.join(__dirname, '../../data');

const readData = async (fileName) => {
    try {
        const filePath = path.join(dataDir, fileName);
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading ${fileName}:`, error);
        throw error;
    }
};

module.exports = { readData };
