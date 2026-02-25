-- Create quiz_results table for tracking user progress
CREATE TABLE IF NOT EXISTS quiz_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    skill_name VARCHAR(100) NOT NULL,
    score DECIMAL(5, 2) NOT NULL,
    passed BOOLEAN NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_skill (user_id, skill_name)
);
