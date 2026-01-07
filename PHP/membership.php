<!-- membership.php -->
<?php
include('header.php');
?>

<main style="padding-top: 17vh;">
    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1>Membership</h1>
        </div>
    </section>

    <!-- Membership Benefits Section -->
    <section class="benefits">
        <div class="container">
            <h2 class="text-center mb-5">Membership Benefits</h2>
            <ul class="benefits-list">
                <li>Exclusive networking opportunities with fellow legal professionals</li>
                <li>Access to professional development workshops and seminars</li>
                <li>Mentorship programs connecting junior and senior lawyers</li>
                <li>Advocacy support for gender equality in the legal field</li>
                <li>Subscription to our monthly newsletter with industry insights</li>
                <li>Discounted rates for our annual conference and events</li>
            </ul>
        </div>
    </section>

    <!-- Membership Application Form Section -->
    <section class="membership-form bg-light">
        <div class="container">
            <h2 class="text-center mb-5">Become a Member</h2>
            <form id="membership-application" class="glass-section p-4 rounded">
                <div class="mb-3">
                    <label for="name" class="form-label">Full Name<span class="text-danger">*</span></label>
                    <input type="text" id="name" name="name" class="form-control" required />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email Address<span class="text-danger">*</span></label>
                    <input type="email" id="email" name="email" class="form-control" required />
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label">Phone Number<span class="text-danger">*</span></label>
                    <input type="tel" id="phone" name="phone" class="form-control" required />
                </div>
                <div class="mb-3">
                    <label for="membership-type" class="form-label">Membership Type<span
                            class="text-danger">*</span></label>
                    <select id="membership-type" name="membership-type" class="form-select" required>
                        <option value="">Select Membership Type</option>
                        <option value="student">Student</option>
                        <option value="associate">Associate</option>
                        <option value="full">Full Member</option>
                    </select>
                </div>
                <button type="submit" class="button">Submit Application</button>
            </form>
        </div>
    </section>

    <!-- Frequently Asked Questions Section -->
    <section class="faqs">
        <div class="container">
            <h2 class="text-center mb-5">Frequently Asked Questions</h2>
            <div class="accordion" id="faqAccordion">
                <div class="accordion-item">
                    <h3 class="accordion-header" id="faq1">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                            What are the membership fees?
                        </button>
                    </h3>
                    <div id="collapse1" class="accordion-collapse collapse" aria-labelledby="faq1"
                        data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            Membership fees vary depending on the type of membership. Student memberships start at $50
                            per year, associate memberships at $100 per year, and full memberships at $200 per year.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header" id="faq2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                            How often do you host events?
                        </button>
                    </h3>
                    <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="faq2"
                        data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            We host various events throughout the year, including monthly networking sessions, quarterly
                            workshops, and an annual conference.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header" id="faq3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                            Can men join the network?
                        </button>
                    </h3>
                    <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="faq3"
                        data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            While our primary focus is on supporting women in law, we welcome allies of all genders who
                            are committed to our mission of promoting gender equality in the legal profession.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php
include('footer.php');
?>