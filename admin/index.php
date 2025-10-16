<?php
session_start();
require_once 'includes/functions.php';

$pageTitle = 'Newsletter Subscription';

// Generate CSRF token
$csrfToken = generateCSRFToken();
?>

<?php include 'includes/header.php'; ?>

<div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden border-b gradient-bg px-4 py-20 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
            <div
                class="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium shadow-sm">
                <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Join 1,000+ subscribers</span>
            </div>

            <h1 class="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Stay in the loop with our
                <span class="gradient-text">newsletter</span>
            </h1>

            <p class="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Get the latest updates, exclusive content, and insider tips delivered straight to your inbox. No spam,
                just
                quality content.
            </p>

            <div class="mt-10 flex justify-center">
                <!-- Subscription Form -->
                <div class="w-full max-w-md">
                    <div id="success-message"
                        class="hidden flex flex-col items-center gap-4 rounded-2xl border-2 border-accent bg-green-50 p-8 text-center">
                        <div class="flex w-16 h-16 items-center justify-center rounded-full bg-accent">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-balance text-xl font-semibold text-foreground">You're subscribed!</h3>
                            <p class="mt-2 text-pretty text-sm text-muted-foreground">Welcome aboard! Check your inbox
                                for a confirmation.</p>
                        </div>
                    </div>

                    <form id="subscription-form" class="space-y-4">
                        <div class="space-y-2">
                            <div class="relative">
                                <svg class="absolute left-4 top-1/2 w-5 h-5 -translate-y-1/2 text-muted-foreground"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <input type="email" id="email" name="email" placeholder="Enter your email" required
                                    class="h-14 w-full rounded-xl border-2 border-border pl-12 text-base transition-all focus:border-primary focus:ring-4 focus:ring-blue-100 focus:outline-none bg-white" />
                            </div>
                            <div id="error-message" class="hidden text-sm text-destructive"></div>
                        </div>

                        <input type="hidden" name="csrf_token" value="<?php echo $csrfToken; ?>">

                        <button type="submit" id="submit-btn"
                            class="h-14 w-full rounded-xl text-base font-semibold shadow-glow transition-all bg-primary text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100">
                            <span class="flex items-center justify-center gap-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Subscribe Now
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Decorative elements -->
        <div class="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-blue-100 blur-circle opacity-50"></div>
        <div class="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-green-100 blur-circle opacity-50"></div>
    </section>

    <!-- Features Section -->
    <section class="px-4 py-20 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl">
            <div class="grid gap-8 md:grid-cols-3">
                <div
                    class="flex flex-col items-center gap-4 rounded-2xl border bg-card p-8 text-center shadow-sm transition-all hover:shadow-md">
                    <div class="flex w-14 h-14 items-center justify-center rounded-xl bg-blue-100">
                        <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold">Weekly Updates</h3>
                    <p class="text-pretty text-sm leading-relaxed text-muted-foreground">
                        Curated content delivered every week, keeping you informed and inspired.
                    </p>
                </div>

                <div
                    class="flex flex-col items-center gap-4 rounded-2xl border bg-card p-8 text-center shadow-sm transition-all hover:shadow-md">
                    <div class="flex w-14 h-14 items-center justify-center rounded-xl bg-green-100">
                        <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 17h5l-5 5v-5zM4.828 7l16.172 16M9 3l-7 7 7 7" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold">Exclusive Content</h3>
                    <p class="text-pretty text-sm leading-relaxed text-muted-foreground">
                        Access subscriber-only articles, guides, and resources before anyone else.
                    </p>
                </div>

                <div
                    class="flex flex-col items-center gap-4 rounded-2xl border bg-card p-8 text-center shadow-sm transition-all hover:shadow-md">
                    <div class="flex w-14 h-14 items-center justify-center rounded-xl bg-secondary">
                        <svg class="w-7 h-7 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold">Privacy First</h3>
                    <p class="text-pretty text-sm leading-relaxed text-muted-foreground">
                        Your email is safe with us. Unsubscribe anytime with a single click.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Admin Link -->
    <section class="border-t bg-secondary px-4 py-12 text-center">
        <p class="text-sm text-muted-foreground">
            Are you an admin?
            <a href="admin/" class="font-medium text-primary hover:underline">
                Access the dashboard
            </a>
        </p>
    </section>
</div>

<script>
    document.getElementById('subscription-form').addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = document.getElementById('submit-btn');
        const emailInput = document.getElementById('email');
        const errorDiv = document.getElementById('error-message');
        const successDiv = document.getElementById('success-message');
        const formDiv = document.getElementById('subscription-form');

        // Clear previous errors
        errorDiv.classList.add('hidden');
        errorDiv.textContent = '';

        // Validate email
        if (!validateEmail(emailInput.value)) {
            errorDiv.textContent = 'Please enter a valid email address';
            errorDiv.classList.remove('hidden');
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
                formDiv.classList.add('hidden');
                successDiv.classList.remove('hidden');

                // Reset form after 5 seconds
                setTimeout(() => {
                    formDiv.classList.remove('hidden');
                    successDiv.classList.add('hidden');
                    emailInput.value = '';
                }, 5000);
            } else {
                errorDiv.textContent = result.message || 'An error occurred';
                errorDiv.classList.remove('hidden');
            }
        } catch (error) {
            errorDiv.textContent = 'Network error. Please try again.';
            errorDiv.classList.remove('hidden');
        } finally {
            setLoading(submitBtn, false);
        }
    });
</script>

<?php include 'includes/footer.php'; ?>