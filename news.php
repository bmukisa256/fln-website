<!-- news.php -->
<?php
include('header.php');
?>

<main style="padding-top: 17vh;">
    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1>News</h1>
        </div>
    </section>

    <!-- News Search Section -->
    <section class="news-search bg-light py-5">
        <div class="container">
            <form id="news-search-form" class="d-flex flex-wrap gap-3">
                <input type="text" id="search-input" class="form-control flex-grow-1" placeholder="Search news..." />
                <select id="category-filter" class="form-select flex-grow-0" style="width: 200px;">
                    <option value="">All Categories</option>
                    <option value="legal-updates">Legal Updates</option>
                    <option value="member-spotlight">Member Spotlight</option>
                    <option value="events">Events</option>
                </select>
                <button type="submit" class="button">Search</button>
            </form>
        </div>
    </section>

    <!-- News Articles Section -->
    <section class="news-grid py-5">
        <div class="container">
            <div class="row article-grid">
                <?php
                // Example array of news articles
                $news_items = [
                    [
                        'date' => '2024-01-15',
                        'title' => 'FLN Distinguished Dinner Sponsors',
                        'image' => 'imgs/dinnersponsors.jpg', // Replace with actual image
                        'category' => 'events',
                        'link' => 'news_detail.php?id=1', // Replace with actual link if available
                    ],
                    [
                        'date' => '2024-02-20',
                        'title' => 'Founder/President Bio',
                        'image' => 'imgs/president_bio.jpg', // Replace with actual image
                        'category' => 'member-spotlight',
                        'link' => 'news_detail.php?id=2',
                    ],
                    [
                        'date' => '2024-03-10',
                        'title' => 'Our Socials',
                        'image' => 'imgs/socials.jpg', // Replace with actual image
                        'category' => 'events',
                        'link' => 'news_detail.php?id=3',
                    ],
                    [
                        'date' => '2024-04-05',
                        'title' => 'Sensitization and Awareness on Climate Change',
                        'image' => 'imgs/climate_change_awareness.jpg', // Replace with actual image
                        'category' => 'legal-updates',
                        'link' => 'news_detail.php?id=4',
                    ],
                    [
                        'date' => '2024-05-18',
                        'title' => 'Climate Justice Legal Initiatives',
                        'image' => 'imgs/climate_justice.jpg', // Replace with actual image
                        'category' => 'legal-updates',
                        'link' => 'news_detail.php?id=5',
                    ],
                    [
                        'date' => '2024-06-22',
                        'title' => 'Climate Justice Education & Public Awareness',
                        'image' => 'imgs/climate_justice_education.jpg', // Replace with actual image
                        'category' => 'legal-updates',
                        'link' => 'news_detail.php?id=6',
                    ],
                    // Add more news items as needed
                ];

                foreach ($news_items as $news) {
                    echo '<div class="col-md-4 mb-4">';
                    echo '<div class="card news-card glass-section h-100">';
                    echo '<img src="' . htmlspecialchars($news['image']) . '" class="card-img-top img-fluid" alt="' . htmlspecialchars($news['title']) . '" loading="lazy">';
                    echo '<div class="card-body d-flex flex-column">';
                    echo '<h5 class="card-title">' . htmlspecialchars($news['title']) . '</h5>';
                    echo '<p class="card-text text-muted"><i class="bi bi-calendar-event"></i> ' . date("F d, Y", strtotime($news['date'])) . '</p>';
                    echo '<a href="' . htmlspecialchars($news['link']) . '" class="btn btn-primary mt-auto">Read More</a>';
                    echo '</div>';
                    echo '</div>';
                    echo '</div>';
                }
                ?>
            </div>
            <!-- Pagination -->
            <div class="pagination mt-4">
                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
</main>

<?php
include('footer.php');
?>