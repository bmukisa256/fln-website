<!-- events.php -->
<?php
include('header.php');
?>

<main style="padding-top: 17vh;">
    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1>Events</h1>
        </div>
    </section>

    <!-- Upcoming Events Section -->
    <section class="upcoming-events">
        <div class="container">
            <h2 class="text-center mb-5">Upcoming Events</h2>
            <div class="row event-list">
                <?php
                // Example array of upcoming events
                $upcoming_events = [
                    [
                        "date" => "2024-07-15 16:00",
                        "title" => "Annual Women in Law Conference",
                        "description" => "Join us for our flagship event featuring keynote speakers, panel discussions, and networking opportunities.",
                        "image" => "imgs/annual_conference.jpg", // Replace with actual image
                        "link" => "event_detail.php?id=1", // Replace with actual link if available
                    ],
                    [
                        "date" => "2024-08-22 08:00",
                        "title" => "Legal Tech Workshop",
                        "description" => "Learn about the latest technological advancements in the legal industry and how to leverage them in your practice.",
                        "image" => "imgs/legal_tech_workshop.jpg", // Replace with actual image
                        "link" => "event_detail.php?id=2",
                    ],
                    [
                        "date" => "2024-09-10 18:00",
                        "title" => "Mentorship Program Kickoff",
                        "description" => "Our annual mentorship program begins with a networking event for mentors and mentees. Join us to meet your match and kickstart your mentorship journey.",
                        "image" => "imgs/mentorship_kickoff.jpg", // Replace with actual image
                        "link" => "event_detail.php?id=3",
                    ],
                    // Add more upcoming events as needed
                ];

                foreach ($upcoming_events as $event) {
                    $eventDate = DateTime::createFromFormat('Y-m-d H:i', $event["date"]);
                    echo '<div class="col-md-6 mb-4">';
                    echo '<div class="card event-card glass-section h-100">';
                    echo '<div class="row g-0">';
                    echo '<div class="col-md-4">';
                    echo '<img src="' . htmlspecialchars($event["image"]) . '" class="img-fluid rounded-start" alt="' . htmlspecialchars($event["title"]) . '">';
                    echo '</div>';
                    echo '<div class="col-md-8">';
                    echo '<div class="card-body">';
                    echo '<h5 class="card-title">' . htmlspecialchars($event["title"]) . '</h5>';
                    echo '<p class="card-text"><i class="bi bi-calendar-event"></i> ' . $eventDate->format('F d, Y | h:i A') . '</p>';
                    echo '<p class="card-text">' . htmlspecialchars($event["description"]) . '</p>';
                    echo '<a href="' . htmlspecialchars($event["link"]) . '" class="btn btn-primary">Register</a>';
                    echo '</div>';
                    echo '</div>';
                    echo '</div>';
                    echo '</div>';
                }
                ?>
            </div>
        </div>
    </section>

    <!-- Past Events Section -->
    <section class="past-events bg-light">
        <div class="container">
            <h2 class="text-center mb-5">Past Event Highlights</h2>
            <div class="row event-grid">
                <?php
                // Example array of past events
                $past_events = [
                    [
                        "title" => "Women's Leadership Summit",
                        "description" => "Our annual summit brought together influential women leaders in law to share insights and inspire the next generation.",
                        "image" => "imgs/womens_leadership_summit.jpg", // Replace with actual image
                    ],
                    [
                        "title" => "Pro Bono Week",
                        "description" => "Members provided free legal services to underserved communities, making a significant impact on access to justice.",
                        "image" => "imgs/pro_bono_week.jpg", // Replace with actual image
                    ],
                    [
                        "title" => "Career Development Workshop",
                        "description" => "Experienced professionals shared strategies for career advancement and work-life balance in the legal field.",
                        "image" => "imgs/career_development_workshop.jpg", // Replace with actual image
                    ],
                    // Add more past events as needed
                ];

                foreach ($past_events as $event) {
                    echo '<div class="col-md-4 mb-4">';
                    echo '<div class="card past-event-card glass-section h-100">';
                    echo '<img src="' . htmlspecialchars($event["image"]) . '" class="card-img-top" alt="' . htmlspecialchars($event["title"]) . '">';
                    echo '<div class="card-body">';
                    echo '<h5 class="card-title">' . htmlspecialchars($event["title"]) . '</h5>';
                    echo '<p class="card-text">' . htmlspecialchars($event["description"]) . '</p>';
                    echo '</div>';
                    echo '</div>';
                    echo '</div>';
                }
                ?>
            </div>
        </div>
    </section>
</main>

<?php
include('footer.php');
?>