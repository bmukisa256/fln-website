<!-- pictorial.php -->
<?php
include('header.php');
?>

<main style="padding-top: 17vh;">

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1>Pictorial</h1>
        </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery py-5">
        <div class="container">
            <!-- Gallery Filter Buttons -->
            <div class="gallery-filter mb-4">
                <button class="filter-button active" data-filter="all">All</button>
                <button class="filter-button" data-filter="events">Events</button>
                <button class="filter-button" data-filter="conferences">Conferences</button>
                <button class="filter-button" data-filter="workshops">Workshops</button>
            </div>
            <!-- Gallery Grid -->
            <div class="row gallery-grid">
                <?php
                // Example array of gallery items
                $gallery_items = [
                    [
                        'image' => 'imgs/annual_gala.jpg', // Replace with actual image
                        'title' => 'Annual Gala 2023',
                        'description' => 'Celebrating achievements and fostering connections at our yearly gala event.',
                        'category' => 'events',
                    ],
                    [
                        'image' => 'imgs/women_in_law_conference.jpg', // Replace with actual image
                        'title' => 'Women in Law Conference',
                        'description' => 'Inspiring talks and panel discussions at our flagship conference.',
                        'category' => 'conferences',
                    ],
                    [
                        'image' => 'imgs/leadership_workshop.jpg', // Replace with actual image
                        'title' => 'Leadership Workshop',
                        'description' => 'Developing leadership skills in an interactive workshop setting.',
                        'category' => 'workshops',
                    ],
                    [
                        'image' => 'imgs/networking_mixer.jpg', // Replace with actual image
                        'title' => 'Networking Mixer',
                        'description' => 'Building professional relationships at our monthly networking event.',
                        'category' => 'events',
                    ],
                    [
                        'image' => 'imgs/legal_tech_symposium.jpg', // Replace with actual image
                        'title' => 'Legal Tech Symposium',
                        'description' => 'Exploring the intersection of law and technology at our annual symposium.',
                        'category' => 'conferences',
                    ],
                    [
                        'image' => 'imgs/mentorship_program.jpg', // Replace with actual image
                        'title' => 'Mentorship Program Kickoff',
                        'description' => 'Launching our annual mentorship program with a day of activities and networking.',
                        'category' => 'workshops',
                    ],
                    // Add more gallery items as needed
                ];

                foreach ($gallery_items as $item) {
                    echo '<div class="col-md-4 mb-4 gallery-item glass-section" data-category="' . htmlspecialchars($item['category']) . '">';
                    echo '<img src="' . htmlspecialchars($item['image']) . '" alt="' . htmlspecialchars($item['title']) . '" loading="lazy" class="img-fluid">';
                    echo '<div class="gallery-caption p-3">';
                    echo '<h5>' . htmlspecialchars($item['title']) . '</h5>';
                    echo '<p>' . htmlspecialchars($item['description']) . '</p>';
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