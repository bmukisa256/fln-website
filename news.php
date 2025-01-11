<!-- news.php -->
<?php
include('header.php');
?>

<main style="padding-top: 17vh;">
    <!-- Page Header -->
    <section class="page-header py-5  text-white">
        <div class="container text-center">
            <h1>News</h1>
            <p class="lead">Explore Our Latest News and Updates</p>
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
            <h2 class="text-center mb-5"><i class="bi bi-newspaper  me-2"></i>Latest News</h2>
            <div class="row article-grid">
                <?php
                $news_items = [
                    ['date' => '2024', 'title' => 'FLN Distinguished Dinner Sponsors', 'image' => 'imgs/dinnersponsors.jpg'],
                    ['date' => '2024', 'title' => 'Founder/President Bio', 'image' => 'imgs/PHOTO-2023-12-29-20-28-10.jpg'],
                    ['date' => '2024', 'title' => 'Our Socials', 'image' => 'imgs/WhatsApp Image 2023-01-04 at 14.01.56.jpeg'],
                    ['date' => 'September 15, 2024', 'title' => 'Sensitization and Awareness on Climate Change', 'image' => 'imgs/climate_change.jpeg'],
                    ['date' => '2024', 'title' => 'Climate Justice Legal', 'image' => 'imgs/news (1).jpeg'],
                    ['date' => '2024', 'title' => 'Climate Justice Education & Public Awareness', 'image' => 'imgs/news (2).jpeg'],
                    ['date' => '2024', 'title' => 'Sensitization & Awareness on Climate Change', 'image' => 'imgs/news (3).jpeg'],
                    ['date' => '2024', 'title' => 'The Role of Women in Climate Justice Action', 'image' => 'imgs/news (4).jpeg'],
                    ['date' => '2024', 'title' => 'Effects of Climate Justice Change and Its Negative Impact on Society', 'image' => 'imgs/news (5).jpeg'],
                    ['date' => '2024', 'title' => 'End Violence Against Women and Children with Disabilities', 'image' => 'imgs/FLN end women violence.jpg'],
                    ['date' => '2024', 'title' => 'Advancing Gender Equality for Women and Children with Disabilities', 'image' => 'imgs/FLN advancing gender equality.jpg'],
                    ['date' => '2024', 'title' => 'Online Symposium on Women and Children with Disabilities', 'image' => 'imgs/FLN online symposium.jpg'],
                ];

                foreach ($news_items as $news) {
                    echo '<div class="col-lg-4 col-md-6 col-12 mb-4">';
                    echo '    <div class="card news-card glass-section h-100 shadow">';
                    echo '        <img src="' . htmlspecialchars($news['image']) . '" class="card-img-top img-fluid" alt="' . htmlspecialchars($news['title']) . '" loading="lazy">';
                    echo '        <div class="card-body d-flex flex-column">';
                    echo '            <h5 class="card-title">' . htmlspecialchars($news['title']) . '</h5>';
                    if (isset($news['date'])) {
                        echo '            <p class="card-text text-muted"><i class="bi bi-calendar-event text-warning me-2"></i>' . htmlspecialchars($news['date']) . '</p>';
                    }
                    echo '        </div>';
                    echo '    </div>';
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