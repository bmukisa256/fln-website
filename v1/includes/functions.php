<?php
require_once __DIR__ . '/../config/database.php';

class SubscriberManager {
    private $db;
    
    public function __construct() {
        $this->db = new Database();
    }
    
    public function addSubscriber($email) {
        // Validate email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new Exception("Invalid email address");
        }
        
        // Check if already exists
        $existing = $this->db->fetchOne(
            "SELECT id FROM subscribers WHERE email = ?", 
            [$email]
        );
        
        if ($existing) {
            throw new Exception("Email already subscribed");
        }
        
        // Add new subscriber
        $this->db->query(
            "INSERT INTO subscribers (email, status) VALUES (?, 'active')",
            [$email]
        );
        
        return $this->db->lastInsertId();
    }
    
    public function getAllSubscribers() {
        return $this->db->fetchAll(
            "SELECT * FROM subscribers ORDER BY subscribed_at DESC"
        );
    }
    
    public function getActiveSubscribers() {
        return $this->db->fetchAll(
            "SELECT * FROM subscribers WHERE status = 'active' ORDER BY subscribed_at DESC"
        );
    }
    
    public function getSubscriberCount() {
        $result = $this->db->fetchOne(
            "SELECT COUNT(*) as count FROM subscribers WHERE status = 'active'"
        );
        return $result['count'];
    }
    
    public function removeSubscriber($id) {
        $this->db->query(
            "DELETE FROM subscribers WHERE id = ?",
            [$id]
        );
    }
    
    public function unsubscribe($email) {
        $this->db->query(
            "UPDATE subscribers SET status = 'unsubscribed' WHERE email = ?",
            [$email]
        );
    }
}

class CampaignManager {
    private $db;
    
    public function __construct() {
        $this->db = new Database();
    }
    
    public function addCampaign($subject, $content, $recipientCount) {
        $this->db->query(
            "INSERT INTO campaigns (subject, content, recipient_count) VALUES (?, ?, ?)",
            [$subject, $content, $recipientCount]
        );
        
        return $this->db->lastInsertId();
    }
    
    public function getAllCampaigns() {
        return $this->db->fetchAll(
            "SELECT * FROM campaigns ORDER BY sent_at DESC"
        );
    }
    
    public function getCampaignCount() {
        $result = $this->db->fetchOne(
            "SELECT COUNT(*) as count FROM campaigns"
        );
        return $result['count'];
    }
}

// Utility functions
function sanitizeInput($input) {
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function jsonResponse($data, $status = 200) {
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}

function generateCSRFToken() {
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

function validateCSRFToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}
?>