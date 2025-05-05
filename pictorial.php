<!-- pictorial.php -->
<?php
include('header.php');
?>

<main style="padding-top: 17vh;">
    <!-- Page Header -->
    <section class="page-header py-5 text-white text-center">
        <div class="container">
            <h1>Pictorial</h1>
            <p class="lead">Explore moments captured during our impactful events, collaborations, and workshops</p>
        </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery py-5">
        <div class="container">
            <!-- Gallery Filter Buttons -->
            <div class="gallery-filter mb-4 text-center">
                <button class="filter-button active" data-filter="all">All</button>
                <button class="filter-button" data-filter="events">Events</button>
                <button class="filter-button" data-filter="conferences">Conferences</button>
                <button class="filter-button" data-filter="workshops">Workshops</button>
            </div>

            <!-- Gallery Grid -->
            <div class="row gallery-grid">
                <?php
                // Array of gallery items
                $gallery_items = [
                    ['image' => 'imgs/nk7.jpg', 'title' => 'NKUMBA UNIVERSITY', 'description' => 'The Female Lawyers’ Network has this year been able to launch a club in Nkumba University', 'category' => 'events'],
                    ['image' => 'imgs/bs2.jpg', 'title' => 'BISHOP STUART UNIVERSITY-MBARARA', 'description' => 'The Female Lawyers’ Network has this year been able to launch a club in Bishop Stuart University', 'category' => 'events'],
                    ['image' => 'imgs/kc2.jpg', 'title' => 'KING CEASOR UNIVERSITY-GABA', 'description' => 'The Female Lawyers’ Network has this year been able to launch a club in King Ceasor University', 'category' => 'events'],
                    ['image' => 'imgs/iuiu.jpg', 'title' => 'ISLAMIC UNIVERSITY IN UGANDA', 'description' => 'Law School End of year Dinner and Handover Ceremony at IUIU Female Campus Kabojja-2023', 'category' => 'events'],
                    ['image' => 'imgs/ist.jpg', 'title' => 'INSTITUTE FOR SOCIAL TRANSFORMATION', 'description' => 'The FLN CEO (right) and the Executive Coordinator, (left) after a fruitful discussion with the IST Executive Director, Maureen Wagubi.', 'category' => 'conferences'],
                    ['image' => 'imgs/nm.jpg', 'title' => 'NATIONAL MARKET WOMEN ENTREPRENEURS\' SYMPOSIUM', 'description' => 'The FLN President and CEO attend the 5th Annual National Market Women Entrepreneurs’ Symposium.', 'category' => 'events'],
                    ['image' => 'imgs/csr.jpg', 'title' => 'CORPORATE SOCIAL RESPONSIBILITY', 'description' => 'The female lawyers’ Network carried out Corporate Social Responsibility (CSR) at Katalemwa Cheshire.', 'category' => 'events'],
                    ['image' => 'imgs/ulsr.jpg', 'title' => 'UGANDA LAW SOCIETY RULE OF LAW BOOT CAMP', 'description' => 'The FLN team attends the Uganda Law Society Rule of Law Boot Camp held at Makerere University in October 2023', 'category' => 'workshops'],
                    ['image' => 'imgs/tj.jpg', 'title' => 'THE JUDICIARY', 'description' => 'Courtesy calls to different offices in the Judiciary to streamline areas of collaboration.', 'category' => 'events'],
                    ['image' => 'imgs/dfcu.jpg', 'title' => 'DFCU BANK(WOMEN IN BUSINESS)', 'description' => 'Meeting with the Manager DFCU Women in Business.', 'category' => 'conferences'],
                    ['image' => 'imgs/aah.jpg', 'title' => 'ACTION AGAINST HUNGER', 'description' => 'Collaboration meeting with the Country Director of Action Against Hunger.', 'category' => 'conferences'],
                    ['image' => 'imgs/iwj.jpg', 'title' => 'INTERNATIONAL ASSOCIATION OF WOMEN JUDGES', 'description' => 'Courtesy call to the president of the International Association of Women Judges.', 'category' => 'conferences'],
                    ['image' => 'imgs/eals.jpg', 'title' => 'EAST AFRICAN LAW SOCIETY', 'description' => 'The FLN CEO with a team from the East Africa Law Society at a multi-stakeholder meeting.', 'category' => 'conferences'],
                    ['image' => 'imgs/gl.jpg', 'title' => 'FLN GRAND LAUNCH', 'description' => 'The FLN Grand Launch of the 5-year Strategic Plan at Hotel Africana.', 'category' => 'events'],
                    ['image' => 'imgs/dn1.jpg', 'title' => 'FLN DISTINGUISHED DINNER', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/JM.jpg', 'title' => 'JURAL MEDIA', 'description' => 'Collaboration with Jural Media, a virtual media house.', 'category' => 'conferences'],
                    ['image' => 'imgs/pds.jpg', 'title' => 'PERSONAL DEVELOPMENT SEMINAR', 'description' => 'Personal Development Seminar by Mandela Group.', 'category' => 'workshops'],
                    ['image' => 'imgs/IMG-20250416-WA0028.jpg', 'title' => 'CLIMATE JUSTICE 2025 ', 'description' => 'Climate justice at Busukuma headed by the FLN president,Dr.Joyce Nalunga B.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250416-WA0021.jpg', 'title' => 'CLIMATE 2025', 'description' => 'At Busukuma, the team handed over various types of trees to the locals.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250501-WA0018.jpg', 'title' => 'KAJJANSI MARKET CLIMATE CHANGE SENSITIZATION 2025', 'description' => 'Climate Change sensitization drive headed by FLN president,Dr.Joyce Nalunga B.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250501-WA0021.jpg', 'title' => 'KAJJANSI MARKET CLIMATE CHANGE SENSITIZATION 2025', 'description' => 'Kajjansi Market', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250501-WA0023.jpg', 'title' => 'KAJJANSI MARKET CLIMATE CHANGE SENSITIZATION 2025', 'description' => 'The locals were very receptive and welcoming to the drive.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250501-WA0026.jpg', 'title' => 'KAJJANSI MARKET CLIMATE CHANGE SENSITIZATION 2025', 'description' => 'The locals were very receptive and welcoming to the drive.', 'category' => 'events'],
                    // Add all remaining images
                ];

                foreach ($gallery_items as $item) {
                    echo '<div class="gallery-item" data-category="' . htmlspecialchars($item['category']) . '">';
                    echo '    <img src="' . htmlspecialchars($item['image']) . '" alt="' . htmlspecialchars($item['title']) . '" class="img-fluid" loading="lazy">';
                    echo '    <div class="gallery-caption">';
                    if (!empty($item['title'])) {
                        echo '        <h5>' . htmlspecialchars($item['title']) . '</h5>';
                    }
                    if (!empty($item['description'])) {
                        echo '        <p>' . htmlspecialchars($item['description']) . '</p>';
                    }
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