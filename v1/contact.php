<!-- contact.php -->
<?php
include('header.php');
?>

<main style="padding-top: 17vh;">
    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1>Contact Us</h1>
        </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-form bg-light py-5">
        <div class="container">
            <h2 class="text-center mb-4"><i class="bi bi-envelope-fill text-primary me-2"></i>Get in Touch</h2>
            <form id="contact-form" class="glass-section p-4 rounded shadow">
                <div class="mb-3">
                    <label for="name" class="form-label"><i class="bi bi-person-fill text-primary me-2"></i>Full
                        Name<span class="text-danger">*</span></label>
                    <div class="input-group">
                        <span class="input-group-text" id="name-icon"><i class="bi bi-person"></i></span>
                        <input type="text" id="name" name="name" class="form-control" placeholder="Enter your full name"
                            aria-describedby="name-icon" required />
                    </div>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label"><i class="bi bi-envelope-fill text-primary me-2"></i>Email
                        Address<span class="text-danger">*</span></label>
                    <div class="input-group">
                        <span class="input-group-text" id="email-icon"><i class="bi bi-at"></i></span>
                        <input type="email" id="email" name="email" class="form-control"
                            placeholder="Enter your email address" aria-describedby="email-icon" required />
                    </div>
                </div>
                <div class="mb-3">
                    <label for="subject" class="form-label"><i
                            class="bi bi-chat-left-dots-fill text-primary me-2"></i>Subject<span
                            class="text-danger">*</span></label>
                    <div class="input-group">
                        <span class="input-group-text" id="subject-icon"><i class="bi bi-tag"></i></span>
                        <input type="text" id="subject" name="subject" class="form-control"
                            placeholder="Enter the subject" aria-describedby="subject-icon" required />
                    </div>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label"><i
                            class="bi bi-pencil-fill text-primary me-2"></i>Message<span
                            class="text-danger">*</span></label>
                    <div class="input-group">
                        <span class="input-group-text" id="message-icon"><i class="bi bi-chat-text-fill"></i></span>
                        <textarea id="message" name="message" class="form-control" rows="5"
                            placeholder="Enter your message" aria-describedby="message-icon" required></textarea>
                    </div>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-lg">
                        <i class="bi bi-send-fill me-2"></i>Send Message
                    </button>
                </div>
            </form>
        </div>
    </section>

    <!-- Contact Information Section -->
    <section class="contact-info py-5">
        <div class="container">
            <h2 class="text-center mb-5"><i class="bi bi-telephone-fill text-primary me-2"></i>Our Contact Details</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="contact-item glass-section p-4 text-center shadow">
                        <i class="bi bi-geo-alt-fill fs-1 text-primary mb-3"></i>
                        <h3>Address</h3>
                        <p>Plot 567, Nankulabye, Kampala, Uganda</p>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="contact-item glass-section p-4 text-center shadow">
                        <i class="bi bi-telephone-fill fs-1 text-primary mb-3"></i>
                        <h3>Phone</h3>
                        <p><a href="tel:+256755999544" class="text-decoration-none text-dark">+256 755999544</a></p>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="contact-item glass-section p-4 text-center shadow">
                        <i class="bi bi-envelope-fill fs-1 text-primary mb-3"></i>
                        <h3>Email</h3>
                        <p><a href="mailto:femalelawyersnetwork@gmail.com"
                                class="text-decoration-none text-dark">femalelawyersnetwork@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php
include('footer.php');
?>