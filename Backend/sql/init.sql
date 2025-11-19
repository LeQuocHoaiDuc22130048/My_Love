CREATE DATABASE IF NOT EXISTS duck_zan_db;
USE duck_zan_db;

CREATE TABLE IF NOT EXISTS ProfileMain (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(200),
    Content TEXT,
    ContentBanner TEXT,
    PathImageMain VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS ProfileSub (
    id INT PRIMARY KEY AUTO_INCREMENT,
    NameProfile VARCHAR(200),
    Content TEXT,
    PathImage VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Feedback (
    id INT PRIMARY KEY AUTO_INCREMENT,
    profileSubId INT NOT NULL,
    NameUser VARCHAR(200),
    EmailUser VARCHAR(200),
    ContentFeedback TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (profileSubId) REFERENCES ProfileSub(id) ON DELETE CASCADE
);


