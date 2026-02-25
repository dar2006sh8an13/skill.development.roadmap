const SKILL_RULES = require('./skillRules');

/**
 * Get the recommended skill path for a domain and level.
 * 
 * @param {string} domain - Job domain (e.g., "AI", "Web Development")
 * @param {string} level  - Skill level ("Beginner", "Intermediate", "Advanced")
 * @returns {Object[]} Array of skill objects { skill, youtube }
 */
function getSkillPath(domain, level) {
    if (!domain || !level) {
        return [];
    }

    // Find matching domain key (case-insensitive)
    const domainKey = Object.keys(SKILL_RULES).find(
        key => key.toLowerCase() === domain.toLowerCase()
    );

    if (!domainKey) return [];

    // Find matching level key (case-insensitive)
    const levelKey = Object.keys(SKILL_RULES[domainKey]).find(
        key => key.toLowerCase() === level.toLowerCase()
    );

    return levelKey ? SKILL_RULES[domainKey][levelKey] : [];
}

/**
 * Get all available domains.
 * @returns {string[]}
 */
function getAvailableDomains() {
    console.log('Available Domains:', Object.keys(SKILL_RULES));
    return Object.keys(SKILL_RULES);
}

/**
 * Get all available levels.
 * @returns {string[]}
 */
function getAvailableLevels() {
    return ["Beginner", "Intermediate", "Advanced"];
}

module.exports = { getSkillPath, getAvailableDomains, getAvailableLevels };
