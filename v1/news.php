<!-- news.php -->
<?php
include('header.php');
?>

<main style="padding-top: 17vh;">
    <!-- Page Header -->
    <section class="page-header py-5  text-white">
        <div class="container text-center">
            <h1>Miscellaneous</h1>
            <p class="lead">Explore Our Updates</p>
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
              <!--  <button type="submit" class="button">Search</button> -->
            </form>
        </div>
    </section> 

    <!-- News Articles Section -->
    <section class="news-grid py-5">
        <div class="container">
            <h2 class="text-center mb-5"><i class="bi bi-newspaper  me-2"></i>Latest</h2>
            <div class="row article-grid">
                <?php
                $news_items = [
                    ['date' => '2024', 'title' => 'FLN Distinguished Dinner Sponsors', 'image' => 'imgs/dinnersponsors.jpg'],
                    ['date' => '2024', 'title' => 'Founder/President Bio', 'image' => 'imgs/PHOTO-2023-12-29-20-28-10.jpg'],
                    ['date' => '2024', 'title' => 'Our Socials', 'image' => 'imgs/WhatsApp Image 2023-01-04 at 14.01.56.jpeg'],
                    ['date' => '2024', 'title' => 'Sensitization and Awareness on Climate Change', 'image' => 'imgs/climate_change.jpeg'],
                    ['date' => '2024', 'title' => 'Climate Justice Legal', 'image' => 'imgs/news (1).jpeg'],
                    ['date' => '2024', 'title' => 'Climate Justice Education & Public Awareness', 'image' => 'imgs/news (2).jpeg'],
                    ['date' => '2024', 'title' => 'Sensitization & Awareness on Climate Change', 'image' => 'imgs/news (3).jpeg'],
                    ['date' => '2024', 'title' => 'The Role of Women in Climate Justice Action', 'image' => 'imgs/news (4).jpeg'],
                    ['date' => '2024', 'title' => 'Effects of Climate Justice Change and Its Negative Impact on Society', 'image' => 'imgs/news (5).jpeg'],
                    ['date' => '2024', 'title' => 'End Violence Against Women and Children with Disabilities', 'image' => 'imgs/FLN end women violence.jpg'],
                    ['date' => '2024', 'title' => 'Advancing Gender Equality for Women and Children with Disabilities', 'image' => 'imgs/FLN advancing gender equality.jpg'],
                    ['date' => '2024', 'title' => 'Online Symposium on Women and Children with Disabilities', 'image' => 'imgs/FLN online symposium.jpg'],
                    ['date' => '2025', 'title' => 'Global fund for Women', 'image' => 'imgs/IMG-20250409-WA0013.jpg'],
                    ['date' => '2025', 'title' => 'Climate Justice', 'image' => 'imgs/IMG-20250409-WA0014.jpg'],
                    ['date' => '2025', 'title' => 'Developed Countries', 'image' => 'imgs/IMG-20250409-WA0015.jpg'],
                    ['date' => '2025', 'title' => 'Intergenerational Equity', 'image' => 'imgs/IMG-20250409-WA0016.jpg'],
                    ['date' => '2025', 'title' => 'Green Economy', 'image' => 'imgs/IMG-20250409-WA0017.jpg'],
                    ['date' => '2025', 'title' => 'Vulnerable Communities', 'image' => 'imgs/IMG-20250409-WA0018.jpg'],
                    ['date' => '2025', 'title' => 'Strategic Partnership Announcement', 'image' => 'imgs/tress assn.jpg'],
                    ['date' => '2025', 'title' => 'FLN and Emparthy Whale', 'image' => 'imgs/tree assn2.jpg'],
                    ['date' => '2025', 'title' => 'Planting Trees', 'image' => 'imgs/planting_trees.jpg'],
                    ['date' => '2025', 'title' => 'Markets Drive', 'image' => 'imgs/IMG-20250921-WA0024.jpg'],
                    ['date' => '2025', 'title' => 'FLN Symposium Women In Electoral Governance', 'image' => 'v1\imgs\FlnUpdate29-4-26\1758648916973.jpg'],
                    ['date' => '2025', 'title' => 'FLN Symposium Women In Electoral Governance SPONSORS', 'image' => 'v1\imgs\FlnUpdate29-4-26\1757350269515.jpg'],
                    ['date' => '2025', 'title' => 'FLN CSR ACTIVITY', 'image' => 'v1\imgs\FlnUpdate29-4-26\1752749041682.jpg'],
                    ['date' => '2025', 'title' => 'CLIMATE CHANGE NEED TO KNOW', 'image' => 'v1\imgs\FlnUpdate29-4-26\1755025250616.jpg'],
                    ['date' => '2025', 'title' => 'BECOME FLN MEMBER', 'image' => 'v1\imgs\FlnUpdate29-4-26\1756724080016.jpg'],
                    ['date' => '2025', 'title' => 'INTER-UNIVERSITY LEADERSHIP', 'image' => 'v1\imgs\FlnUpdate29-4-26\1763636823152.jpg'],
                    ['date' => '2025', 'title' => 'INTER-UNIVERSITY LEADERSHIP', 'image' => 'v1\imgs\FlnUpdate29-4-26\1762339083110.jpg'],
                    ['date' => '2025', 'title' => 'INTER-UNIVERSITY LEADERSHIP', 'image' => 'v1\imgs\FlnUpdate29-4-26\1762631422397.jpg'],
                    ['date' => '2026', 'title' => 'LEGAL SYMPOSIUM: BISHOP STUART UNIVERSITY', 'image' => 'v1\imgs\FlnUpdate29-4-26\1774912670854.jpg'],
                    ['date' => '2026', 'title' => 'SUBSCRIBE AS FLN MEMEBER', 'image' => 'v1\imgs\FlnUpdate29-4-26\1772635724407.jpg'],
                    ['date' => '2026', 'title' => 'CLIMATE', 'image' => 'v1\imgs\FlnUpdate29-4-26\1772033801784.jpg'],
                    ['date' => '2026', 'title' => 'FACE OF CRISIS', 'image' => 'v1\imgs\FlnUpdate29-4-26\1772033803525.jpg'],
                    ['date' => '2026', 'title' => 'INTERGENERATIONAL EQUITY', 'image' => 'v1\imgs\FlnUpdate29-4-26\1767308250896.jpg'],
                    ['date' => '2026', 'title' => 'GENDER EQUALITY = CLIMATE JUSTICE', 'image' => 'v1\imgs\FlnUpdate29-4-26\1766504308552.jpg'],
                    ['date' => '2026', 'title' => 'FLN EMPOWERMENT APPROACH', 'image' => 'v1\imgs\FlnUpdate29-4-26\176111937772₂.jpg'],
                    ['date' => '2026', 'title' => 'FLN GREEN LIVELIHOODS AND ECONOMIC EMPOWERMENT', 'image' => 'v1\imgs\FlnUpdate29-4-26\1755874656210.jpg'],
                    ['date' => '2026', 'title' => 'PROTECTING REFUGEES RIGHTS MATTERS', 'image' => 'v1\imgs\FlnUpdate29-4-26\1756453668341.jpg'],
                    ['date' => '2026', 'title' => 'FLN PRIDE WALKING ALONGSIDE WOMEN AND GIRLS', 'image' => 'v1\imgs\FlnUpdate29-4-26\1774804050465.jpg'],


                    
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