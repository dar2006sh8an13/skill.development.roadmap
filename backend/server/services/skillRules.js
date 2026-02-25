/**
 * SKILL_RULES - Domain -> Level -> Skill List (with YouTube recommendations)
 */

const SKILL_RULES = {
    "AI": {
        Beginner: [
            { skill: "Python", youtube: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
            { skill: "Math Basics", youtube: "https://www.youtube.com/watch?v=HfACrKJ_Y2w" },
            { skill: "Machine Learning", youtube: "https://www.youtube.com/watch?v=GwIo3gDZCVQ" },
            { skill: "Deep Learning", youtube: "https://www.youtube.com/watch?v=b99UVkWzYbQ" }
        ],
        Intermediate: [
            { skill: "Natural Language Processing", youtube: "https://www.youtube.com/watch?v=CMrHM8a33hw" },
            { skill: "Computer Vision", youtube: "https://www.youtube.com/watch?v=N8W-H8P0EAI" },
            { skill: "MLOps", youtube: "https://www.youtube.com/watch?v=06-AZXmwHjo" }
        ],
        Advanced: [
            { skill: "Transformers", youtube: "https://www.youtube.com/watch?v=TQQlZhbC5ps" },
            { skill: "Reinforcement Learning", youtube: "https://www.youtube.com/watch?v=JgvyzIkgxF0" },
            { skill: "Model Deployment", youtube: "https://www.youtube.com/watch?v=S_F_7V0nS7U" }
        ]
    },

    "Web Development": {
        Beginner: [
            { skill: "HTML", youtube: "https://www.youtube.com/watch?v=ok-plXXHlWw" },
            { skill: "CSS", youtube: "https://www.youtube.com/watch?v=1Rs2ND1ryYc" },
            { skill: "JavaScript", youtube: "https://www.youtube.com/watch?v=W6NZ1cH5X-E" }
        ],
        Intermediate: [
            { skill: "React", youtube: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
            { skill: "Node.js", youtube: "https://www.youtube.com/watch?v=fBNz5xF-Kx4" },
            { skill: "REST APIs", youtube: "https://www.youtube.com/watch?v=lsMQRaeKNDk" }
        ],
        Advanced: [
            { skill: "System Design", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" },
            { skill: "GraphQL", youtube: "https://www.youtube.com/watch?v=ed8SzLpxYKs" },
            { skill: "CI/CD", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" }
        ]
    },

    "DevOps Engineer": {
        Beginner: [
            { skill: "Linux Basics", youtube: "https://www.youtube.com/watch?v=wBp0Rb-ZJak" },
            { skill: "Git & GitHub", youtube: "https://www.youtube.com/watch?v=RGOj5yBW7fM" },
            { skill: "Networking Fundamentals", youtube: "https://www.youtube.com/watch?v=0Nf9S3A0zOk" },
            { skill: "Shell Scripting", youtube: "https://www.youtube.com/watch?v=zsajhz2_50g" }
        ],
        Intermediate: [
            { skill: "Docker", youtube: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
            { skill: "CI/CD Pipelines", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" },
            { skill: "AWS Basics", youtube: "https://www.youtube.com/watch?v=ulprqHHWlng" },
            { skill: "Terraform", youtube: "https://www.youtube.com/watch?v=7xndcJVf4P8" }
        ],
        Advanced: [
            { skill: "Kubernetes", youtube: "https://www.youtube.com/watch?v=X48VuDVv0do" },
            { skill: "Infrastructure as Code", youtube: "https://www.youtube.com/watch?v=n7z_5mBAtXk" },
            { skill: "Monitoring & Logging", youtube: "https://www.youtube.com/watch?v=9_p_H6Z_0g4" },
            { skill: "Scalable Cloud Architecture", youtube: "https://www.youtube.com/watch?v=yP5_m6IsMv4" }
        ]
    },

    "DevSecOps Engineer": {
        Beginner: [
            { skill: "Linux", youtube: "https://www.youtube.com/watch?v=wBp0Rb-ZJak" },
            { skill: "Networking", youtube: "https://www.youtube.com/watch?v=0Nf9S3A0zOk" },
            { skill: "Security Basics", youtube: "https://www.youtube.com/watch?v=7_pL7XlS_lU" },
            { skill: "Git", youtube: "https://www.youtube.com/watch?v=RGOj5yBW7fM" }
        ],
        Intermediate: [
            { skill: "Secure CI/CD", youtube: "https://www.youtube.com/watch?v=vE0M_xN_f60" },
            { skill: "Docker Security", youtube: "https://www.youtube.com/watch?v=e8R-L5Bf-V8" },
            { skill: "Cloud Security", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" },
            { skill: "Vulnerability Scanning", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" }
        ],
        Advanced: [
            { skill: "DevSecOps Automation", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" },
            { skill: "Container Security", youtube: "https://www.youtube.com/watch?v=6jL3P3C-YvA" },
            { skill: "Threat Modeling", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" },
            { skill: "Zero Trust Architecture", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" }
        ]
    },

    "Data Analyst": {
        Beginner: [
            { skill: "Excel", youtube: "https://www.youtube.com/watch?v=rwbho0CgEAE" },
            { skill: "SQL", youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
            { skill: "Basic Statistics", youtube: "https://www.youtube.com/watch?v=xxpc-HPKN28" },
            { skill: "Data Cleaning", youtube: "https://www.youtube.com/watch?v=6WPVs_64xY8" }
        ],
        Intermediate: [
            { skill: "Python (Pandas)", youtube: "https://www.youtube.com/watch?v=vmEHCJofslg" },
            { skill: "Data Visualization", youtube: "https://www.youtube.com/watch?v=wiuT1pSAsyA" },
            { skill: "Power BI / Tableau", youtube: "https://www.youtube.com/watch?v=TmhQCmq7zZE" },
            { skill: "Exploratory Data Analysis", youtube: "https://www.youtube.com/watch?v=kLpYpPvtF64" }
        ],
        Advanced: [
            { skill: "Advanced SQL", youtube: "https://www.youtube.com/watch?v=7S_tz1z_5bA" },
            { skill: "Predictive Analytics", youtube: "https://www.youtube.com/watch?v=Z8mPUfJ8A5w" },
            { skill: "Dashboard Optimization", youtube: "https://www.youtube.com/watch?v=7M7oG_2w9Dk" },
            { skill: "Business Insights Strategy", youtube: "https://www.youtube.com/watch?v=27LwT5N-mXk" }
        ]
    },

    "Data Engineer": {
        Beginner: [
            { skill: "Python", youtube: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
            { skill: "SQL", youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
            { skill: "Database Fundamentals", youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
            { skill: "Linux", youtube: "https://www.youtube.com/watch?v=wBp0Rb-ZJak" }
        ],
        Intermediate: [
            { skill: "ETL Pipelines", youtube: "https://www.youtube.com/watch?v=8_U0U_H_o-M" },
            { skill: "Apache Spark", youtube: "https://www.youtube.com/watch?v=D8U0U_H_o-M" },
            { skill: "Data Warehousing", youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
            { skill: "Airflow", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" }
        ],
        Advanced: [
            { skill: "Distributed Systems", youtube: "https://www.youtube.com/watch?v=yP5_m6IsMv4" },
            { skill: "Big Data Architecture", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" },
            { skill: "Streaming Systems", youtube: "https://www.youtube.com/watch?v=fBNz5xF-Kx4" },
            { skill: "Cloud Data Engineering", youtube: "https://www.youtube.com/watch?v=ulprqHHWlng" }
        ]
    },

    "Android Developer": {
        Beginner: [
            { skill: "Kotlin / Java", youtube: "https://www.youtube.com/watch?v=F9UC9DY-vEg" },
            { skill: "Android Studio", youtube: "https://www.youtube.com/watch?v=EKn7-yC1Ekw" },
            { skill: "UI Layout Basics", youtube: "https://www.youtube.com/watch?v=1uU9D8t300g" },
            { skill: "OOP", youtube: "https://www.youtube.com/watch?v=pY-E8A6L_uM" }
        ],
        Intermediate: [
            { skill: "API Integration", youtube: "https://www.youtube.com/watch?v=9nI6V17h018" },
            { skill: "Room Database", youtube: "https://www.youtube.com/watch?v=lw7mS_pT6Y4" },
            { skill: "MVVM Architecture", youtube: "https://www.youtube.com/watch?v=1uU9D8t300g" },
            { skill: "Firebase", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" }
        ],
        Advanced: [
            { skill: "Jetpack Compose", youtube: "https://www.youtube.com/watch?v=cP7M6E4O0m0" },
            { skill: "Performance Optimization", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" },
            { skill: "Security Best Practices", youtube: "https://www.youtube.com/watch?v=6jL3P3C-YvA" },
            { skill: "Scalable App Architecture", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" }
        ]
    },

    "Machine Learning Engineer": {
        Beginner: [
            { skill: "Python", youtube: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
            { skill: "Statistics", youtube: "https://www.youtube.com/watch?v=xxpc-HPKN28" },
            { skill: "Linear Algebra", youtube: "https://www.youtube.com/watch?v=HfACrKJ_Y2w" },
            { skill: "Pandas", youtube: "https://www.youtube.com/watch?v=vmEHCJofslg" }
        ],
        Intermediate: [
            { skill: "Scikit-Learn", youtube: "https://www.youtube.com/watch?v=GwIo3gDZCVQ" },
            { skill: "Model Evaluation", youtube: "https://www.youtube.com/watch?v=06-AZXmwHjo" },
            { skill: "Feature Engineering", youtube: "https://www.youtube.com/watch?v=wiuT1pSAsyA" },
            { skill: "TensorFlow / PyTorch", youtube: "https://www.youtube.com/watch?v=b99UVkWzYbQ" }
        ],
        Advanced: [
            { skill: "Deep Learning", youtube: "https://www.youtube.com/watch?v=b99UVkWzYbQ" },
            { skill: "MLOps", youtube: "https://www.youtube.com/watch?v=06-AZXmwHjo" },
            { skill: "Model Deployment", youtube: "https://www.youtube.com/watch?v=S_F_7V0nS7U" },
            { skill: "AI System Design", youtube: "https://www.youtube.com/watch?v=TQQlZhbC5ps" }
        ]
    },

    "PostgreSQL Developer": {
        Beginner: [
            { skill: "SQL Basics", youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
            { skill: "PostgreSQL Setup", youtube: "https://www.youtube.com/watch?v=qw--VYLpxG4" },
            { skill: "CRUD Operations", youtube: "https://www.youtube.com/watch?v=FOfpG7E3_2w" },
            { skill: "Indexes", youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY" }
        ],
        Intermediate: [
            { skill: "Joins & Optimization", youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
            { skill: "Stored Procedures", youtube: "https://www.youtube.com/watch?v=7_pL7XlS_lU" },
            { skill: "Query Tuning", youtube: "https://www.youtube.com/watch?v=7S_tz1z_5bA" },
            { skill: "Replication", youtube: "https://www.youtube.com/watch?v=vE0M_xN_f60" }
        ],
        Advanced: [
            { skill: "Performance Tuning", youtube: "https://www.youtube.com/watch?v=7S_tz1z_5bA" },
            { skill: "Partitioning", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" },
            { skill: "High Availability", youtube: "https://www.youtube.com/watch?v=RGOj5yBW7fM" },
            { skill: "Database Architecture", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" }
        ]
    },

    "iOS Developer": {
        Beginner: [
            { skill: "Swift", youtube: "https://www.youtube.com/watch?v=8Xg7E9MAQ64" },
            { skill: "Xcode", youtube: "https://www.youtube.com/watch?v=EKn7-yC1Ekw" },
            { skill: "UIKit Basics", youtube: "https://www.youtube.com/watch?v=ok-plXXHlWw" },
            { skill: "OOP", youtube: "https://www.youtube.com/watch?v=pY-E8A6L_uM" }
        ],
        Intermediate: [
            { skill: "API Integration", youtube: "https://www.youtube.com/watch?v=9nI6V17h018" },
            { skill: "Core Data", youtube: "https://www.youtube.com/watch?v=lw7mS_pT6Y4" },
            { skill: "MVVM", youtube: "https://www.youtube.com/watch?v=1uU9D8t300g" },
            { skill: "Animations", youtube: "https://www.youtube.com/watch?v=1Rs2ND1ryYc" }
        ],
        Advanced: [
            { skill: "SwiftUI", youtube: "https://www.youtube.com/watch?v=ed8SzLpxYKs" },
            { skill: "App Optimization", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" },
            { skill: "Security", youtube: "https://www.youtube.com/watch?v=6jL3P3C-YvA" },
            { skill: "Scalable App Design", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" }
        ]
    },

    "Blockchain Developer": {
        Beginner: [
            { skill: "Blockchain Basics", youtube: "https://www.youtube.com/watch?v=gyMwXuJrbJQ" },
            { skill: "Cryptography", youtube: "https://www.youtube.com/watch?v=HfACrKJ_Y2w" },
            { skill: "Ethereum", youtube: "https://www.youtube.com/watch?v=U36F9_m6N-s" },
            { skill: "Solidity", youtube: "https://www.youtube.com/watch?v=M576WGiDBdQ" }
        ],
        Intermediate: [
            { skill: "Smart Contracts", youtube: "https://www.youtube.com/watch?v=M576WGiDBdQ" },
            { skill: "Web3.js", youtube: "https://www.youtube.com/watch?v=XhS8r_e8U30" },
            { skill: "Token Standards", youtube: "https://www.youtube.com/watch?v=M576WGiDBdQ" },
            { skill: "DApps", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" }
        ],
        Advanced: [
            { skill: "Security Audits", youtube: "https://www.youtube.com/watch?v=M576WGiDBdQ" },
            { skill: "Layer 2 Solutions", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" },
            { skill: "Consensus Algorithms", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" },
            { skill: "Blockchain Architecture", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" }
        ]
    },

    "QA Engineer": {
        Beginner: [
            { skill: "Software Testing Basics", youtube: "https://www.youtube.com/watch?v=t_9-6V0vI98" },
            { skill: "Manual Testing", youtube: "https://www.youtube.com/watch?v=FOfpG7E3_2w" },
            { skill: "Bug Reporting", youtube: "https://www.youtube.com/watch?v=ok-plXXHlWw" },
            { skill: "Test Cases", youtube: "https://www.youtube.com/watch?v=lsMQRaeKNDk" }
        ],
        Intermediate: [
            { skill: "Selenium", youtube: "https://www.youtube.com/watch?v=XhS8r_e8U30" },
            { skill: "Automation Testing", youtube: "https://www.youtube.com/watch?v=XhS8r_e8U30" },
            { skill: "API Testing", youtube: "https://www.youtube.com/watch?v=lsMQRaeKNDk" },
            { skill: "CI Integration", youtube: "https://www.youtube.com/watch?v=vE0M_xN_f60" }
        ],
        Advanced: [
            { skill: "Performance Testing", youtube: "https://www.youtube.com/watch?v=28J_wGkYV0c" },
            { skill: "Security Testing", youtube: "https://www.youtube.com/watch?v=6jL3P3C-YvA" },
            { skill: "Test Architecture", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" },
            { skill: "Advanced Automation Frameworks", youtube: "https://www.youtube.com/watch?v=XhS8r_e8U30" }
        ]
    },

    "Software Architect": {
        Beginner: [
            { skill: "OOP", youtube: "https://www.youtube.com/watch?v=pY-E8A6L_uM" },
            { skill: "Design Patterns", youtube: "https://www.youtube.com/watch?v=ed8SzLpxYKs" },
            { skill: "System Basics", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" },
            { skill: "Data Structures", youtube: "https://www.youtube.com/watch?v=HfACrKJ_Y2w" }
        ],
        Intermediate: [
            { skill: "System Design", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" },
            { skill: "Microservices", youtube: "https://www.youtube.com/watch?v=ed8SzLpxYKs" },
            { skill: "API Architecture", youtube: "https://www.youtube.com/watch?v=ed8SzLpxYKs" },
            { skill: "Cloud Basics", youtube: "https://www.youtube.com/watch?v=ulprqHHWlng" }
        ],
        Advanced: [
            { skill: "Scalable Systems", youtube: "https://www.youtube.com/watch?v=yP5_m6IsMv4" },
            { skill: "Distributed Systems", youtube: "https://www.youtube.com/watch?v=H_o-M_xN_f8" },
            { skill: "High Availability", youtube: "https://www.youtube.com/watch?v=qw--VYLpxG4" },
            { skill: "Enterprise Architecture", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" }
        ]
    },

    "UX Designer": {
        Beginner: [
            { skill: "Design Principles", youtube: "https://www.youtube.com/watch?v=zP06D9c1X8E" },
            { skill: "Figma Basics", youtube: "https://www.youtube.com/watch?v=jwCmyeJkvzH" },
            { skill: "User Research", youtube: "https://www.youtube.com/watch?v=PzM8Z8D-UvE" },
            { skill: "Wireframing", youtube: "https://www.youtube.com/watch?v=W5vG-9X1_-M" }
        ],
        Intermediate: [
            { skill: "Prototyping", youtube: "https://www.youtube.com/watch?v=_2oQGQ-D0d4" },
            { skill: "Usability Testing", youtube: "https://www.youtube.com/watch?v=6W6w-5-C0Wc" },
            { skill: "Design Systems", youtube: "https://www.youtube.com/watch?v=G_H2v_v-H6U" },
            { skill: "Accessibility", youtube: "https://www.youtube.com/watch?v=U-8XpS-C6A8" }
        ],
        Advanced: [
            { skill: "Advanced UX Strategy", youtube: "https://www.youtube.com/watch?v=Yf1m8O-kXvE" },
            { skill: "Interaction Design", youtube: "https://www.youtube.com/watch?v=zP06D9c1X8E" },
            { skill: "UX Analytics", youtube: "https://www.youtube.com/watch?v=W5vG-9X1_-M" },
            { skill: "Product Thinking", youtube: "https://www.youtube.com/watch?v=17X2_V_v0fU" }
        ]
    },

    "Technical Writer": {
        Beginner: [
            { skill: "Technical Writing Basics", youtube: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
            { skill: "Documentation Tools", youtube: "https://www.youtube.com/watch?v=FOfpG7E3_2w" },
            { skill: "Markdown", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" },
            { skill: "Grammar & Clarity", youtube: "https://www.youtube.com/watch?v=1uU9D8t300g" }
        ],
        Intermediate: [
            { skill: "API Documentation", youtube: "https://www.youtube.com/watch?v=ed8SzLpxYKs" },
            { skill: "User Guides", youtube: "https://www.youtube.com/watch?v=ok-plXXHlWw" },
            { skill: "Knowledge Base Systems", youtube: "https://www.youtube.com/watch?v=1uU9D8t300g" },
            { skill: "SEO Writing", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" }
        ],
        Advanced: [
            { skill: "Information Architecture", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" },
            { skill: "Developer Docs", youtube: "https://www.youtube.com/watch?v=1uU9D8t300g" },
            { skill: "Content Strategy", youtube: "https://www.youtube.com/watch?v=1uU9D8t300g" },
            { skill: "Documentation Automation", youtube: "https://www.youtube.com/watch?v=scEDHsr3APg" }
        ]
    },

    "Game Developer": {
        Beginner: [
            { skill: "C++ / C#", youtube: "https://www.youtube.com/watch?v=pY-E8A6L_uM" },
            { skill: "Unity Basics", youtube: "https://www.youtube.com/watch?v=EKn7-yC1Ekw" },
            { skill: "Game Logic", youtube: "https://www.youtube.com/watch?v=mY93v_v-9pU" },
            { skill: "OOP", youtube: "https://www.youtube.com/watch?v=pY-E8A6L_uM" }
        ],
        Intermediate: [
            { skill: "Physics Systems", youtube: "https://www.youtube.com/watch?v=mY93v_v-9pU" },
            { skill: "Game Design Patterns", youtube: "https://www.youtube.com/watch?v=ed8SzLpxYKs" },
            { skill: "Multiplayer Basics", youtube: "https://www.youtube.com/watch?v=mY93v_v-9pU" },
            { skill: "Animation Systems", youtube: "https://www.youtube.com/watch?v=1Rs2ND1ryYc" }
        ],
        Advanced: [
            { skill: "Game Engine Architecture", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" },
            { skill: "Performance Optimization", youtube: "https://www.youtube.com/watch?v=28J_wGkYV0c" },
            { skill: "3D Rendering", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" },
            { skill: "Advanced Multiplayer", youtube: "https://www.youtube.com/watch?v=mY93v_v-9pU" }
        ]
    },

    "Server-Side Game Dev": {
        Beginner: [
            { skill: "Networking Basics", youtube: "https://www.youtube.com/watch?v=0Nf9S3A0zOk" },
            { skill: "Node.js / Java", youtube: "https://www.youtube.com/watch?v=fBNz5xF-Kx4" },
            { skill: "Databases", youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
            { skill: "API Development", youtube: "https://www.youtube.com/watch?v=lsMQRaeKNDk" }
        ],
        Intermediate: [
            { skill: "Real-time Systems", youtube: "https://www.youtube.com/watch?v=mY93v_v-9pU" },
            { skill: "WebSockets", youtube: "https://www.youtube.com/watch?v=fBNz5xF-Kx4" },
            { skill: "Matchmaking Systems", youtube: "https://www.youtube.com/watch?v=mY93v_v-9pU" },
            { skill: "Scaling Servers", youtube: "https://www.youtube.com/watch?v=yP5_m6IsMv4" }
        ],
        Advanced: [
            { skill: "Distributed Game Systems", youtube: "https://www.youtube.com/watch?v=yP5_m6IsMv4" },
            { skill: "Low-latency Optimization", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" },
            { skill: "Cloud Scaling", youtube: "https://www.youtube.com/watch?v=yP5_m6IsMv4" },
            { skill: "Game Infrastructure", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" }
        ]
    },

    "MLOps Engineer": {
        Beginner: [
            { skill: "Python", youtube: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
            { skill: "Git", youtube: "https://www.youtube.com/watch?v=RGOj5yBW7fM" },
            { skill: "Docker", youtube: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
            { skill: "Basic ML", youtube: "https://www.youtube.com/watch?v=GwIo3gDZCVQ" }
        ],
        Intermediate: [
            { skill: "CI/CD for ML", youtube: "https://www.youtube.com/watch?v=06-AZXmwHjo" },
            { skill: "Model Deployment", youtube: "https://www.youtube.com/watch?v=S_F_7V0nS7U" },
            { skill: "Kubernetes", youtube: "https://www.youtube.com/watch?v=X48VuDVv0do" },
            { skill: "Monitoring Models", youtube: "https://www.youtube.com/watch?v=06-AZXmwHjo" }
        ],
        Advanced: [
            { skill: "Automated ML Pipelines", youtube: "https://www.youtube.com/watch?v=06-AZXmwHjo" },
            { skill: "Model Governance", youtube: "https://www.youtube.com/watch?v=06-AZXmwHjo" },
            { skill: "Scalable ML Systems", youtube: "https://www.youtube.com/watch?v=yP5_m6IsMv4" },
            { skill: "ML Infrastructure Design", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" }
        ]
    },

    "Product Manager": {
        Beginner: [
            { skill: "Product Thinking", youtube: "https://www.youtube.com/watch?v=17X2_V_v0fU" },
            { skill: "User Research", youtube: "https://www.youtube.com/watch?v=PzM8Z8D-UvE" },
            { skill: "Roadmapping", youtube: "https://www.youtube.com/watch?v=17X2_V_v0fU" },
            { skill: "Agile Basics", youtube: "https://www.youtube.com/watch?v=Z9QbYZh1YXY" }
        ],
        Intermediate: [
            { skill: "Stakeholder Management", youtube: "https://www.youtube.com/watch?v=17X2_V_v0fU" },
            { skill: "Metrics & KPIs", youtube: "https://www.youtube.com/watch?v=17X2_V_v0fU" },
            { skill: "Market Analysis", youtube: "https://www.youtube.com/watch?v=17X2_V_v0fU" },
            { skill: "MVP Strategy", youtube: "https://www.youtube.com/watch?v=17X2_V_v0fU" }
        ],
        Advanced: [
            { skill: "Product Scaling", youtube: "https://www.youtube.com/watch?v=yP5_m6IsMv4" },
            { skill: "Growth Strategy", youtube: "https://www.youtube.com/watch?v=17X2_V_v0fU" },
            { skill: "Data-driven Decisions", youtube: "https://www.youtube.com/watch?v=17X2_V_v0fU" },
            { skill: "Cross-functional Leadership", youtube: "https://www.youtube.com/watch?v=17X2_V_v0fU" }
        ]
    },

    "Engineering Manager": {
        Beginner: [
            { skill: "Software Development", youtube: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
            { skill: "Team Collaboration", youtube: "https://www.youtube.com/watch?v=Z9QbYZh1YXY" },
            { skill: "Agile Practices", youtube: "https://www.youtube.com/watch?v=0_u6_6x_A-s" },
            { skill: "Code Review", youtube: "https://www.youtube.com/watch?v=FOfpG7E3_2w" }
        ],
        Intermediate: [
            { skill: "People Management", youtube: "https://www.youtube.com/watch?v=Z9QbYZh1YXY" },
            { skill: "Technical Planning", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" },
            { skill: "Performance Metrics", youtube: "https://www.youtube.com/watch?v=17X2_V_v0fU" },
            { skill: "Architecture Understanding", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" }
        ],
        Advanced: [
            { skill: "Org Scaling", youtube: "https://www.youtube.com/watch?v=yP5_m6IsMv4" },
            { skill: "Technical Strategy", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" },
            { skill: "Engineering Leadership", youtube: "https://www.youtube.com/watch?v=0_u6_6x_A-s" },
            { skill: "Innovation Management", youtube: "https://www.youtube.com/watch?v=17X2_V_v0fU" }
        ]
    },

    "Developer Relations": {
        Beginner: [
            { skill: "Technical Writing", youtube: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
            { skill: "Public Speaking", youtube: "https://www.youtube.com/watch?v=t_9-6V0vI98" },
            { skill: "Community Building", youtube: "https://www.youtube.com/watch?v=FOfpG7E3_2w" },
            { skill: "API Basics", youtube: "https://www.youtube.com/watch?v=lsMQRaeKNDk" }
        ],
        Intermediate: [
            { skill: "Content Creation", youtube: "https://www.youtube.com/watch?v=ok-plXXHlWw" },
            { skill: "Workshops", youtube: "https://www.youtube.com/watch?v=vE0M_xN_f60" },
            { skill: "Open Source", youtube: "https://www.youtube.com/watch?v=RGOj5yBW7fM" },
            { skill: "Developer Advocacy", youtube: "https://www.youtube.com/watch?v=FOfpG7E3_2w" }
        ],
        Advanced: [
            { skill: "Global Community Strategy", youtube: "https://www.youtube.com/watch?v=yP5_m6IsMv4" },
            { skill: "Technical Evangelism", youtube: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
            { skill: "Partner Ecosystems", youtube: "https://www.youtube.com/watch?v=FOfpG7E3_2w" },
            { skill: "Platform Growth", youtube: "https://www.youtube.com/watch?v=17X2_V_v0fU" }
        ]
    },

    "BI Analyst": {
        Beginner: [
            { skill: "Excel", youtube: "https://www.youtube.com/watch?v=rwbho0CgEAE" },
            { skill: "SQL", youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
            { skill: "Data Visualization", youtube: "https://www.youtube.com/watch?v=wiuT1pSAsyA" },
            { skill: "Business Basics", youtube: "https://www.youtube.com/watch?v=rfscVS0vtbw" }
        ],
        Intermediate: [
            { skill: "Power BI / Tableau", youtube: "https://www.youtube.com/watch?v=TmhQCmq7zZE" },
            { skill: "Data Modeling", youtube: "https://www.youtube.com/watch?v=m8I7eGye5Z0" },
            { skill: "Dashboard Design", youtube: "https://www.youtube.com/watch?v=7M7oG_2w9Dk" },
            { skill: "KPIs", youtube: "https://www.youtube.com/watch?v=17X2_V_v0fU" }
        ],
        Advanced: [
            { skill: "Advanced Analytics", youtube: "https://www.youtube.com/watch?v=Z8mPUfJ8A5w" },
            { skill: "Forecasting", youtube: "https://www.youtube.com/watch?v=Z8mPUfJ8A5w" },
            { skill: "Business Intelligence Strategy", youtube: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
            { skill: "Data Governance", youtube: "https://www.youtube.com/watch?v=rfscVS0vtbw" }
        ]
    }
};

module.exports = SKILL_RULES;
