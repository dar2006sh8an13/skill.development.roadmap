const fs = require('fs');
const path = require('path');

const rolesDir = path.join(__dirname, 'backend', 'data', 'roles');

const targetFiles = [
    'postgresql-developer.json',
    'mlops.json',
    'ml-engineer.json',
    'data-scientist.json',
    'data-engineer.json',
    'data-analyst.json',
    'bi-analyst.json',
    'blockchain.json'
];

const plans = {
    'proj-data-beginner-0': [ // Data Cleaner
        "Install Python and Pandas library.",
        "Load the messy CSV dataset.",
        "Identify missing values and duplicates.",
        "Apply cleaning rules (fill/drop NaNs).",
        "Save the cleaned data to a new CSV."
    ],
    'proj-data-beginner-1': [ // Web Scraper
        "Install Python, Requests, and BeautifulSoup.",
        "Inspect the target website structure.",
        "Write logic to fetch and parse HTML.",
        "Extract desired data points.",
        "Save data to a structured format (JSON/CSV)."
    ],
    'proj-data-beginner-2': [ // EDA Dashboard
        "Install Python, Pandas, and Matplotlib/Seaborn.",
        "Load the dataset to be analyzed.",
        "Perform data cleaning and preprocessing.",
        "Generate statistical summaries.",
        "Create visualizations (histograms, scatter plots, etc.)."
    ],
    'proj-data-beginner-3': [ // Stock Plotter
        "Install Python and Plotly.",
        "Fetch stock data using an API (e.g., Yahoo Finance).",
        "Process the data into a Pandas DataFrame.",
        "Create line charts for price history.",
        "Add interactive features like date ranges."
    ],
    'proj-data-beginner-4': [ // SQL Analyzer
        "Set up a SQL database (SQLite/PostgreSQL).",
        "Import a sample dataset.",
        "Write complex SQL queries (Joins, Aggregations).",
        "Optimize query performance.",
        "Visualize query results."
    ],
    'proj-data-intermediate-0': [ // Price Predictor
        "Gather housing or sales data.",
        "Preprocess data (handle missing values, encoding).",
        "Train a Linear Regression model using Scikit-learn.",
        "Evaluate model performance (RMSE, R2 score).",
        "Build a simple UI to input features and get predictions."
    ],
    'proj-data-intermediate-1': [ // Sentiment Analyzer
        "Collect a dataset of reviews or tweets.",
        "Clean text data (tokenize, remove stopwords).",
        "Train a Naive Bayes or SVM classifier.",
        "Test with new custom text inputs.",
        "Visualize sentiment distribution."
    ],
    'proj-data-intermediate-2': [ // Customer Segmenter
        "Load customer purchase history data.",
        "Select relevant features for clustering.",
        "Use K-Means to find customer segments.",
        "Analyze and label each cluster.",
        "Visualize clusters using a scatter plot."
    ],
    'proj-data-intermediate-3': [ // Recommendation Engine
        "Create a user-item interaction matrix.",
        "Implement collaborative filtering (user-based or item-based).",
        "Train the recommendation model.",
        "Generate top-k recommendations for a user.",
        "Evaluate using precision@k."
    ],
    'proj-data-intermediate-4': [ // Fraud Detector
        "Load credit card transaction data.",
        "Handle class imbalance (oversampling/undersampling).",
        "Train an Isolation Forest or Autoencoder.",
        "Detect anomalies in test data.",
        "Report precision and recall metrics."
    ],
    'proj-data-advanced-0': [ // Deep Learning Classifier
        "Find a labeled image dataset (e.g., CIFAR-10, MNIST).",
        "Build a CNN architecture using PyTorch.",
        "Train the model on the training set.",
        "Validate accuracy on the test set.",
        "Save the model and write a prediction script."
    ],
    'proj-data-advanced-1': [ // Chatbot
        "Get an API key from OpenAI.",
        "Set up a Node.js/Python server.",
        "Create a frontend chat interface.",
        "Send user messages to the API.",
        "Display streaming responses."
    ],
    'proj-data-advanced-2': [ // Real-time Pipeline
        "Set up Apache Kafka for data streaming.",
        "Configure Spark Streaming to consume topics.",
        "Process data in real-time (e.g., aggregations).",
        "Write results to a database or dashboard.",
        "Monitor latency and throughput."
    ],
    'proj-data-capstone-0': [ // Autonomous Agent
        "Define the agent's goal and tools.",
        "Initialize LangChain agents.",
        "Connect to external APIs (Search, Calculator).",
        "Implement a loop for the agent to reason and act.",
        "Test with complex multi-step queries."
    ],
    'proj-data-capstone-1': [ // Predictive Maintenance
        "Collect sensor data (time-series).",
        "Perform feature engineering (rolling averages, lags).",
        "Train an LSTM or ARIMA model.",
        "Predict failure probabilities.",
        "Visualize maintenance schedules."
    ]
};

targetFiles.forEach(file => {
    const filePath = path.join(rolesDir, file);
    if (fs.existsSync(filePath)) {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const json = JSON.parse(content);
            let modified = false;

            if (json.projects && Array.isArray(json.projects)) {
                json.projects.forEach(p => {
                    if (plans[p.id] && !p.implementationPlan) {
                        p.implementationPlan = plans[p.id];
                        modified = true;
                    }
                });
            }

            if (modified) {
                fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
                console.log(`Updated ${file}`);
            } else {
                console.log(`No changes needed for ${file}`);
            }
        } catch (err) {
            console.error(`Error processing ${file}:`, err.message);
        }
    } else {
        console.warn(`File not found: ${filePath}`);
    }
});
