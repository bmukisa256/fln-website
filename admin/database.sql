-- Email Subscription System Database Schema
-- Run this SQL script to create the required tables

CREATE DATABASE IF NOT EXISTS email_subscription_system;
USE email_subscription_system;

-- Subscribers table
CREATE TABLE IF NOT EXISTS subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('active', 'unsubscribed') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Email campaigns table
CREATE TABLE IF NOT EXISTS campaigns (
    id INT AUTO_INCREMENT PRIMARY KEY,
    subject VARCHAR(500) NOT NULL,
    content TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    recipient_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add indexes for better performance
CREATE INDEX idx_subscribers_email ON subscribers(email);
CREATE INDEX idx_subscribers_status ON subscribers(status);
CREATE INDEX idx_campaigns_sent_at ON campaigns(sent_at);

-- Insert sample data for testing
INSERT INTO subscribers (email, status) VALUES 
('john@example.com', 'active'),
('jane@example.com', 'active'),
('test@example.com', 'unsubscribed');

INSERT INTO campaigns (subject, content, recipient_count) VALUES 
('Welcome to our Newsletter!', 'Thank you for subscribing to our newsletter. Stay tuned for amazing content!', 2),
('Monthly Update - October 2024', 'Here are the latest updates from our team this month...', 2);