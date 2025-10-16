<!-- footer.php -->
<?php
// Start session if not already started
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Generate CSRF token for subscription form
if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
$csrfToken = $_SESSION['csrf_token'];
?>
<footer class="text-light pt-5 pb-3">
    <div class="container">
        <div class="row">
            <!-- Quick Links -->
            <div class="col-lg-4 col-md-6 mb-4">
                <h5 class="mb-3">Quick Links</h5>
                <ul class="list-unstyled">
                    <li class="mb-2">
                        <a href="index.php" class="text-light text-decoration-none">
                            <i class="bi bi-house-door-fill me-2"></i> Home
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="about.php" class="text-light text-decoration-none">
                            <i class="bi bi-info-circle-fill me-2"></i> About Us
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="events.php" class="text-light text-decoration-none">
                            <i class="bi bi-calendar-event-fill me-2"></i> Events
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="news.php" class="text-light text-decoration-none">
                            <i class="bi bi-newspaper me-2"></i> News
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="pictorial.php" class="text-light text-decoration-none">
                            <i class="bi bi-camera-fill me-2"></i> Pictorial
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="contact.php" class="text-light text-decoration-none">
                            <i class="bi bi-envelope-fill me-2"></i> Contact Us
                        </a>
                    </li>
                </ul>
            </div>
            <!-- Connect With Us -->
            <div class="col-lg-4 col-md-6 mb-4">
                <h5 class="mb-3">Connect With Us</h5>
                <div class="d-flex mb-3">
                    <a href="https://www.facebook.com/profile.php?id=100085065440813&mibextid=ZbWKwL"
                        class="btn btn-outline-light btn-social me-2" target="_blank" aria-label="Facebook">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="https://twitter.com/femalelawyernet" class="btn btn-outline-light btn-social me-2"
                        target="_blank" aria-label="Twitter">
                        <i class="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/invites/contact/?i=x6wh7po2r80w&utm_content=pdz0f9z"
                        class="btn btn-outline-light btn-social me-2" target="_blank" aria-label="Instagram">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/public-profile/settings"
                        class="btn btn-outline-light btn-social me-2" target="_blank" aria-label="LinkedIn">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.youtube.com/@fln_ug" class="btn btn-outline-light btn-social" target="_blank"
                        aria-label="YouTube">
                        <i class="bi bi-youtube"></i>
                    </a>
                </div>
                <!-- Newsletter Subscription -->
                <h6 class="mt-4 mb-2">Subscribe to our Newsletter</h6>

                <!-- Success Message -->
                <div id="footer-success-message" class="alert alert-success d-none mb-3" role="alert">
                    <i class="bi bi-check-circle-fill me-2"></i>
                    <strong>You're subscribed!</strong> Check your inbox for confirmation.
                </div>

                <!-- Subscription Form -->
                <form id="footer-subscription-form" class="d-flex flex-column">
                    <div class="d-flex mb-2">
                        <input type="email" id="footer-email" name="email" class="form-control me-2"
                               placeholder="Your email" aria-label="Email" required>
                        <button type="submit" id="footer-submit-btn" class="btn btn-primary">
                            Subscribe
                        </button>
                    </div>
                    <input type="hidden" name="csrf_token" value="<?php echo $csrfToken; ?>">
                    <div id="footer-error-message" class="text-danger small d-none"></div>
                </form>
            </div>
            <!-- Contact Us -->
            <div class="col-lg-4 col-md-12 mb-4">
                <h5 class="mb-3">Contact Us</h5>
                <ul class="list-unstyled">
                    <li class="mb-3 d-flex align-items-start">
                        <i class="bi bi-envelope-fill me-3 mt-1"></i>
                        <div>
                            <strong>Email:</strong><br>
                            <a href="mailto:femalelawyersnetwork@gmail.com"
                                class="text-light text-decoration-none">femalelawyersnetwork@gmail.com</a>
                        </div>
                    </li>
                    <li class="mb-3 d-flex align-items-start">
                        <i class="bi bi-telephone-fill me-3 mt-1"></i>
                        <div>
                            <strong>Phone:</strong><br>
                            <a href="tel:+256755999544" class="text-light text-decoration-none">+256 755999544</a>
                        </div>
                    </li>
                    <li class="d-flex align-items-start">
                        <i class="bi bi-geo-alt-fill me-3 mt-1"></i>
                        <div>
                            <strong>Address:</strong><br>
                            Plot 567, Nankulabye,<br>Kampala, Uganda
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Footer Bottom -->
        <div class="row">
            <div class="col-12 text-center">
                <p class="mb-0">&copy; <?php echo date("Y"); ?> Female Lawyers Network. All rights reserved.</p>
                <p class="mb-0">Designed with <i class="bi bi-heart-fill text-danger"></i> by FLN Team</p>
            </div>
        </div>
    </div>
</footer>

<!-- JavaScript Files -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/script.js"></script>

<!-- Newsletter Subscription Script -->
<script>
    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Loading state function
    function setLoading(button, isLoading) {
        if (isLoading) {
            button.disabled = true;
            button.innerHTML = '<span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>Loading...';
        } else {
            button.disabled = false;
            button.innerHTML = 'Subscribe';
        }
    }

    // Footer subscription form handler
    document.getElementById('footer-subscription-form').addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = document.getElementById('footer-submit-btn');
        const emailInput = document.getElementById('footer-email');
        const errorDiv = document.getElementById('footer-error-message');
        const successDiv = document.getElementById('footer-success-message');
        const formDiv = document.getElementById('footer-subscription-form');

        // Clear previous errors
        errorDiv.classList.add('d-none');
        errorDiv.textContent = '';
        successDiv.classList.add('d-none');

        // Validate email
        if (!validateEmail(emailInput.value)) {
            errorDiv.textContent = 'Please enter a valid email address';
            errorDiv.classList.remove('d-none');
            return;
        }

        // Set loading state
        setLoading(submitBtn, true);

        try {
            const formData = new FormData(this);

            const response = await fetch('api/subscribe.php', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                successDiv.classList.remove('d-none');
                emailInput.value = '';

                // Hide success message after 5 seconds
                setTimeout(() => {
                    successDiv.classList.add('d-none');
                }, 5000);
            } else {
                errorDiv.textContent = result.message || 'An error occurred';
                errorDiv.classList.remove('d-none');
            }
        } catch (error) {
            errorDiv.textContent = 'Network error. Please try again.';
            errorDiv.classList.remove('d-none');
        } finally {
            setLoading(submitBtn, false);
        }
    });
</script>
</body>

</html>