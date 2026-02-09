const fs = require('fs');
const path = require('path');

const projectsPath = path.join(__dirname, '../data/projects.json');

const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));

const enrichProject = (project) => {
    // Basic Implementation Plan Template
    const implementationPlan = [
        "Set up the project environment (Git repo, dependencies).",
        "Design the UI/UX layout and component hierarchy.",
        "Implement the core functionality (frontend logic/backend API).",
        "Add styling and responsive design adjustments.",
        "Test across different devices and browsers.",
        "Deploy the application to a hosting provider."
    ];

    // Basic Guide Template
    const guide = [
        "Use semantic HTML5 tags for better accessibility.",
        "Keep your CSS organized (consider BEM naming or CSS Modules).",
        "Write clean, commented code for easier maintenance.",
        "Use version control (Git) frequently."
    ];

    // Basic Pitfalls Template
    const commonPitfalls = [
        "Overcomplicating the design too early.",
        "Not testing responsiveness enough.",
        "Ignoring accessibility guidelines.",
        "Hardcoding values instead of using variables/constants."
    ];

    let deploymentStrategy = "Deploy to Vercel/Netlify for static sites, or GitHub Pages.";
    let securityConsiderations = "Ensure input validation on forms to prevent XSS.";

    // Customizing based on category/level
    if (project.category.includes('Beginner')) {
        deploymentStrategy = "Deploy using GitHub Pages or Netlify Drop.";
        securityConsiderations = "Basic input validation.";
    } else if (project.category.includes('Intermediate') || project.category.includes('Advanced')) {
        implementationPlan.splice(2, 0, "Set up database schema and connection.", "Implement authentication middleware.");
        deploymentStrategy = "Deploy frontend to Vercel, backend to Render/Heroku.";
        securityConsiderations = "Implement JWT authentication, secure headers (Helmet), and rate limiting.";
    } else if (project.category.includes('DevOps')) {
        implementationPlan[0] = "Provision cloud infrastructure (AWS/Azure).";
        implementationPlan[5] = "Set up CI/CD pipeline for automated deployment.";
        deploymentStrategy = "Docker containerization and Kubernetes orchestration.";
        securityConsiderations = "Use IAM roles, manage secrets securely (Vault/AWS Secrets Manager).";
    } else if (project.category.includes('AI')) {
        implementationPlan.splice(1, 0, "Collect and preprocess dataset.", "Train/Fine-tune model.");
        deploymentStrategy = "Deploy model via API (FastAPI/Flask) or serverless function.";
        securityConsiderations = "Sanitize inputs to prevent prompt injection.";
    }

    // Assign if missing
    if (!project.implementationPlan) project.implementationPlan = implementationPlan;
    if (!project.guide) project.guide = guide;
    if (!project.commonPitfalls) project.commonPitfalls = commonPitfalls;
    if (!project.deploymentStrategy) project.deploymentStrategy = deploymentStrategy;
    if (!project.securityConsiderations) project.securityConsiderations = securityConsiderations;

    return project;
};

const enrichedProjects = projects.map(enrichProject);

fs.writeFileSync(projectsPath, JSON.stringify(enrichedProjects, null, 2));

console.log(`Enriched ${enrichedProjects.length} curated projects with detailed content.`);
