/**
 * QUIZ_QUESTIONS - SkillName -> Array<{ question, options, answer }>
 */

const QUIZ_QUESTIONS = {
    "Python": [
        {
            question: "What is a variable in Python?",
            options: ["A storage location for data", "A type of loop", "A specific function", "A class definition"],
            answer: "A storage location for data"
        },
        {
            question: "Which keyword is used to define a function in Python?",
            options: ["func", "define", "def", "function"],
            answer: "def"
        }
    ],
    "HTML": [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High Tech Multi Language", "Hyper Tool Multi Language", "Hyper Text Multi Language"],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Which tag is used for the largest heading in HTML?",
            options: ["<heading>", "<h6>", "<h1>", "<head>"],
            answer: "<h1>"
        }
    ],
    "CSS": [
        {
            question: "What does CSS stand for?",
            options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
            answer: "Cascading Style Sheets"
        }
    ],
    "Machine Learning": [
        {
            question: "Which of the following is an example of supervised learning?",
            options: ["Clustering", "Linear Regression", "Dimensionality Reduction", "Anomaly Detection"],
            answer: "Linear Regression"
        }
    ],
    "Deep Learning": [
        {
            question: "Which of these is a common activation function in Neural Networks?",
            options: ["ReLU", "Mean Squared Error", "Adam", "Backpropagation"],
            answer: "ReLU"
        }
    ],
    "Math Basics": [
        {
            question: "What is the result of 2^5?",
            options: ["10", "25", "32", "64"],
            answer: "32"
        }
    ],
    "Linux Basics": [
        {
            question: "Which command is used to list files in a directory?",
            options: ["cd", "ls", "mkdir", "rm"],
            answer: "ls"
        }
    ],
    "Git & GitHub": [
        {
            question: "Which command is used to save changes to the local repository?",
            options: ["git push", "git pull", "git commit", "git add"],
            answer: "git commit"
        }
    ],
    "Networking Fundamentals": [
        {
            question: "What does 'IP' stand for in Networking?",
            options: ["Internet Protocol", "Internal Process", "Internet Process", "Inter-Personal"],
            answer: "Internet Protocol"
        }
    ],
    "Shell Scripting": [
        {
            question: "Which character is typically used at the start of a script to specify the interpreter?",
            options: ["#", "$", "&", "!"],
            answer: "#"
        }
    ],
    "CI/CD Pipelines": [
        {
            question: "What does 'CD' in CI/CD commonly stand for?",
            options: ["Continuous Delivery", "Code Deployment", "Centralized Distribution", "Computerized Design"],
            answer: "Continuous Delivery"
        }
    ],
    "AWS Basics": [
        {
            question: "What is AWS EC2 used for?",
            options: ["Storage", "Virtual Servers", "Domain Names", "Database Clusters"],
            answer: "Virtual Servers"
        }
    ],
    "Terraform": [
        {
            question: "What type of tool is Terraform?",
            options: ["CI tool", "Infrastructure as Code (IaC)", "Monitoring tool", "Programming language"],
            answer: "Infrastructure as Code (IaC)"
        }
    ],
    "Kubernetes": [
        {
            question: "What is the primary purpose of Kubernetes?",
            options: ["Code versioning", "Container orchestration", "Database management", "Email serving"],
            answer: "Container orchestration"
        }
    ],
    "Security Basics": [
        {
            question: "What is 'Encryption'?",
            options: ["Deleting data", "Converting data into code to prevent unauthorized access", "Speeding up networks", "Compressing files"],
            answer: "Converting data into code to prevent unauthorized access"
        }
    ],
    "Secure CI/CD": [
        {
            question: "What is the goal of integrating security into a CI/CD pipeline?",
            options: ["To slow down development", "To identify vulnerabilities early in the process", "To increase code size", "To replace manual testing entirely"],
            answer: "To identify vulnerabilities early in the process"
        }
    ],
    "Docker": [
        {
            question: "What is a Docker container?",
            options: ["A virtual machine", "A lightweight, standalone, executable package", "A physical server", "A database engine"],
            answer: "A lightweight, standalone, executable package"
        }
    ],
    "SQL": [
        {
            question: "What does SQL stand for?",
            options: ["Structured Query Language", "Simple Query Language", "Structured Question Language", "System Query Language"],
            answer: "Structured Query Language"
        }
    ],
    "Kotlin / Java": [
        {
            question: "Which keyword is used to declare a variable in Kotlin that cannot be reassigned?",
            options: ["var", "val", "let", "const"],
            answer: "val"
        }
    ],
    "Design Principles": [
        {
            question: "What does 'Hierarchy' mean in design?",
            options: ["The color palette", "The arrangement of elements to show importance", "The font size", "The spacing between lines"],
            answer: "The arrangement of elements to show importance"
        }
    ],
    "Blockchain Basics": [
        {
            question: "What is a blockchain?",
            options: ["A centralized database", "A distributed ledger", "A type of crypto wallet", "A secret code"],
            answer: "A distributed ledger"
        }
    ],
    "ETL Pipelines": [
        {
            question: "What does ETL stand for?",
            options: ["Extract, Transformation, Load", "Execute, Transfer, List", "Extract, Transfer, Load", "Execute, Transformation, List"],
            answer: "Extract, Transformation, Load"
        }
    ],
    "Product Thinking": [
        {
            question: "What is the primary focus of Product Thinking?",
            options: ["Coding the UI", "Solving user problems", "Writing documentation", "Managing servers"],
            answer: "Solving user problems"
        }
    ],
    "Basic Statistics": [
        {
            question: "What is the 'Mean' in statistics?",
            options: ["The middle value", "The most frequent value", "The average of all values", "The difference between max and min"],
            answer: "The average of all values"
        }
    ],
    "Data Cleaning": [
        {
            question: "What is a common task in data cleaning?",
            options: ["Increasing data volume", "Handling missing values", "Creating complex models", "Building web servers"],
            answer: "Handling missing values"
        }
    ],
    "Python (Pandas)": [
        {
            question: "In Pandas, what is a primary 2D data structure called?",
            options: ["Series", "DataFrame", "DataArray", "Matrix"],
            answer: "DataFrame"
        }
    ],
    "Pandas": [
        {
            question: "Which Pandas function is used to read a CSV file?",
            options: ["read_csv()", "load_csv()", "get_csv()", "open_csv()"],
            answer: "read_csv()"
        }
    ],
    "Apache Spark": [
        {
            question: "What is Apache Spark primarily used for?",
            options: ["Micro-controllers", "Small database management", "Large-scale data processing", "Static web hosting"],
            answer: "Large-scale data processing"
        }
    ],
    "Scikit-Learn": [
        {
            question: "What is Scikit-Learn primarily used for in Python?",
            options: ["Web development", "Machine learning", "Game design", "Image editing"],
            answer: "Machine learning"
        }
    ],
    "Model Evaluation": [
        {
            question: "Which metric is commonly used to evaluate a classification model?",
            options: ["Accuracy", "Mean Absolute Error", "R-squared", "Standard Deviation"],
            answer: "Accuracy"
        }
    ],
    "TensorFlow / PyTorch": [
        {
            question: "What type of models are TensorFlow and PyTorch primarily used for?",
            options: ["Linear Regression only", "Deep Learning / Neural Networks", "Static report generation", "Database indexing"],
            answer: "Deep Learning / Neural Networks"
        }
    ],
    "Excel": [
        {
            question: "Which function in Excel is used to add up a range of cells?",
            options: ["ADD()", "SUM()", "TOTAL()", "PLUS()"],
            answer: "SUM()"
        }
    ],
    "Android Studio": [
        {
            question: "What is Android Studio?",
            options: ["A browser", "An Integrated Development Environment (IDE) for Android", "A physical device", "A programming language"],
            answer: "An Integrated Development Environment (IDE) for Android"
        }
    ],
    "Swift": [
        {
            question: "Which company developed the Swift programming language?",
            options: ["Google", "Microsoft", "Apple", "Facebook"],
            answer: "Apple"
        }
    ],
    "Xcode": [
        {
            question: "What is Xcode used for?",
            options: ["Android development", "iOS and macOS development", "Web design", "Database administration"],
            answer: "iOS and macOS development"
        }
    ],
    "Unity Basics": [
        {
            question: "Unity is primarily known as what type of tool?",
            options: ["A word processor", "A game engine", "A graphics card driver", "A search engine"],
            answer: "A game engine"
        }
    ],
    "Figma Basics": [
        {
            question: "What is Figma primarily used for?",
            options: ["Back-end coding", "Interface design and prototyping", "Spreadsheet management", "Video editing"],
            answer: "Interface design and prototyping"
        }
    ],
    "User Research": [
        {
            question: "What is the goal of user research?",
            options: ["To find bugs in the code", "To understand user needs and behaviors", "To design a logo", "To write a marketing plan"],
            answer: "To understand user needs and behaviors"
        }
    ],
    "UI Layout Basics": [
        {
            question: "In mobile design, what does 'UI' stand for?",
            options: ["User Interface", "Uniform Indicator", "Unity Integration", "Universal Identity"],
            answer: "User Interface"
        }
    ],
    "C++ / C#": [
        {
            question: "Which of these is a common use for C++ in software development?",
            options: ["Basic web styling", "System/software and game development", "Short marketing emails", "Simple calculation in spreadsheets"],
            answer: "System/software and game development"
        }
    ],
    "Agile Basics": [
        {
            question: "What is a 'Sprint' in Agile?",
            options: ["A long-term project goal", "A short, fixed-period of time to complete specific work", "A type of meeting", "A high-speed coding session"],
            answer: "A short, fixed-period of time to complete specific work"
        }
    ],
    "System Design": [
        {
            question: "What is 'Scalability' in system design?",
            options: ["The size of the server room", "The ability of a system to handle increased load", "The color scheme of the UI", "The number of lines of code"],
            answer: "The ability of a system to handle increased load"
        }
    ],
    "Microservices": [
        {
            question: "What is a key characteristic of the Microservices architecture?",
            options: ["One large database for everything", "Independently deployable services", "Single monolithic code base", "Manual deployment only"],
            answer: "Independently deployable services"
        }
    ],
    "People Management": [
        {
            question: "What is a '1-on-1' meeting primarily used for?",
            options: ["Group brainstorming", "Company-wide announcements", "Individual feedback and growth discussions", "Reviewing marketing budgets"],
            answer: "Individual feedback and growth discussions"
        }
    ],
    "Public Speaking": [
        {
            question: "What is a 'Keynote' in the context of conferences?",
            options: ["A small breakout session", "The opening or main speech that sets the tone", "A musical performance", "A type of registration form"],
            answer: "The opening or main speech that sets the tone"
        }
    ],
    "Open Source": [
        {
            question: "What does 'Open Source' mean for software?",
            options: ["The software is free to use but the code is secret", "The source code is available for anyone to inspect, modify, and enhance", "The software only runs on open windows", "The software is owned by the government"],
            answer: "The source code is available for anyone to inspect, modify, and enhance"
        }
    ],
    "Roadmapping": [
        {
            question: "What is the purpose of a Product Roadmap?",
            options: ["To list every single bug in the system", "To outline the strategic vision and direction of a product over time", "To provide instructions for installation", "To track daily employee attendance"],
            answer: "To outline the strategic vision and direction of a product over time"
        }
    ],
    "Documentation Tools": [
        {
            question: "Which of these is a popular tool for technical documentation?",
            options: ["Spotify", "Confluence", "Steam", "Photoshop"],
            answer: "Confluence"
        }
    ],
    "Business Basics": [
        {
            question: "What does 'ROI' stand for in business?",
            options: ["Rate Of Interest", "Return On Investment", "Real Operating Income", "Regional Office Index"],
            answer: "Return On Investment"
        }
    ],
    "Cloud Basics": [
        {
            question: "What is 'Cloud Computing'?",
            options: ["Storing data on physical hard drives in your office", "On-demand delivery of IT resources over the internet", "A type of weather forecasting", "A new way to build computers"],
            answer: "On-demand delivery of IT resources over the internet"
        }
    ],
    "API Architecture": [
        {
            question: "What does 'REST' stand for in API design?",
            options: ["Representational State Transfer", "Real-time Electronic System Transfer", "Random Easy Site Template", "Remote Entry System Terminal"],
            answer: "Representational State Transfer"
        }
    ],
};

module.exports = QUIZ_QUESTIONS;
