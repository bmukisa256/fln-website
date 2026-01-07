<!-- index.php -->
<?php
include('header.php');
?>

<main>
    <!-- Hero Section -->
    <section class="hero"
        style="background-image: url('imgs/hero-image.jpg'); background-size: cover; background-position: center; height: 100vh; position: relative;">
        <div
            class="container glass-section p-5 text-center text-light d-flex flex-column justify-content-center align-items-center h-100">
            <h1 class="display-4">Empowering Women in Law for a Brighter Tomorrow</h1>
            <a href="membership.php" class="cta-button btn btn-primary btn-lg mt-4">
                Join Us Today <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </section>

    <!-- Highlights Section -->
    <section class="highlights py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5">Latest Highlights <i class="bi bi-star-fill text-warning"></i></h2>
            <div id="highlightsCarousel" class="carousel slide" data-bs-ride="carousel">
                <!-- Indicators/Dots -->
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#highlightsCarousel" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Highlight 1"></button>
                    <button type="button" data-bs-target="#highlightsCarousel" data-bs-slide-to="1"
                        aria-label="Highlight 2"></button>
                    <button type="button" data-bs-target="#highlightsCarousel" data-bs-slide-to="2"
                        aria-label="Highlight 3"></button>
                </div>

                <!-- Carousel Inner -->
                <div class="carousel-inner">
                    <!-- Slide 1: About Us -->
                    <div class="carousel-item active">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="card glass-section h-100 text-center shadow">
                                    <div class="card-body">
                                        <i class="bi bi-info-circle-fill highlight-icon mb-3"></i>
                                        <h3 class="card-title">About Us</h3>
                                        <p class="card-text">
                                            The Female Lawyers’ Network (FLN) empowers women in the legal profession to
                                            lead,
                                            collaborate, and advocate for equality.
                                        </p>
                                        <a href="about.php" class="btn btn-primary">
                                            Learn More <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Core Values -->
                    <div class="carousel-item">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="card glass-section h-100 text-center shadow">
                                    <div class="card-body">
                                        <i class="bi bi-briefcase-fill highlight-icon mb-3"></i>
                                        <h3 class="card-title">Core Values</h3>
                                        <p class="card-text">
                                            We uphold professionalism, integrity, gender equality, and collaboration to
                                            foster a
                                            supportive legal community.
                                        </p>
                                        <a href="about.php#core-values" class="btn btn-primary">
                                            Discover Values <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Join FLN -->
                    <div class="carousel-item">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="card glass-section h-100 text-center shadow">
                                    <div class="card-body">
                                        <i class="bi bi-person-plus-fill highlight-icon mb-3"></i>
                                        <h3 class="card-title">Join FLN</h3>
                                        <p class="card-text">
                                            Become a member today and connect with a network of talented female lawyers
                                            dedicated to your growth.
                                        </p>
                                        <a href="membership.php" class="btn btn-primary">
                                            Become a Member <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Carousel Controls -->
                <button class="carousel-control-prev" type="button" data-bs-target="#highlightsCarousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#highlightsCarousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>

    <!-- About Us Section -->
    <section class="introduction bg-light py-5">
        <div class="container">
            <h2 class="text-center mb-5">About Us</h2>
            <p class="text-center mb-5">
                The Female Lawyers’ Network (FLN) is a not-for-profit membership-based network established in 2022 to
                empower women in the legal profession.
            </p>
            <div class="row align-items-center">
                <div class="col-md-6 mb-4">
                    <img src="imgs/nk7.jpg" alt="About Us Detail" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <p>
                        FLN is committed to fostering professional growth, advocating for gender equality, and providing
                        a supportive community for female legal professionals. We organize events, workshops, and
                        mentorship programs to ensure our members have the resources and connections they need to excel
                        in their careers.
                    </p>
                    <p>
                        Our mission is to create an inclusive environment where women in law can thrive, lead, and make
                        impactful changes within the legal sector and beyond.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Values Section -->
    <section class="core-values py-5">
        <div class="container">
            <h2 class="text-center mb-5">Core Values <i class="bi bi-heart-fill text-danger"></i></h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card text-center shadow h-100">
                        <div class="card-body">
                            <i class="bi bi-briefcase-fill fs-1 text-primary mb-3"></i>
                            <h5 class="card-title">Professionalism & Integrity</h5>
                            <p class="card-text">
                                We operate with honesty, honor, dependability, and trustworthiness.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card text-center shadow h-100">
                        <div class="card-body">
                            <i class="bi bi-people-fill fs-1 text-primary mb-3"></i>
                            <h5 class="card-title">Gender Equality</h5>
                            <p class="card-text">
                                Advocating for a society where everyone thrives regardless of gender.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card text-center shadow h-100">
                        <div class="card-body">
                            <i class="bi bi-hand-thumbs-up-fill fs-1 text-primary mb-3"></i>
                            <h5 class="card-title">Collaboration & Stewardship</h5>
                            <p class="card-text">
                                Partnering with stakeholders to promote gender justice responsibly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Join FLN Section -->
    <section class="membership py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-4">Join FLN <i class="bi bi-person-plus-fill text-primary"></i></h2>
            <p class="text-center mb-5">
                Become a member of FLN to connect, collaborate, and grow with a community of talented female lawyers.
            </p>
            <div class="text-center">
                <a href="membership.php" class="btn btn-primary btn-lg">
                    Join FLN Today <i class="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    </section>


    <!-- Messages Section -->
    <section class="messages py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5">Messages from Our Leaders <i
                    class="bi bi-chat-left-text-fill text-primary"></i></h2>
            <div class="row">
                <!-- Message from the President -->
                <div class="col-md-6 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h3 class="card-title text-primary">Message from the President</h3>
                            <p class="card-text">
                                "It is a delight to bring to you the good news from the Female Lawyers’ Network (FLN) of
                                empowered female lawyers and the girl child in a gender-equal and just world. FLN is
                                alive to the fact that gender equality is pivotal to sustainable development, not only
                                in Uganda but globally. This is why we focus on core values such as:
                            </p>
                            <ul>
                                <li>Gender equality</li>
                                <li>Good stewardship</li>
                                <li>Empowerment</li>
                                <li>Collaboration</li>
                            </ul>
                            <p class="card-text">
                                These values benefit not only female lawyers but also the girl child in general. Once
                                empowered, women can significantly contribute to decision-making processes, thereby
                                eradicating gender inequalities and injustices.
                            </p>
                            <footer class="blockquote-footer">Hon Dr. Joyce Nalunga Birimumaaso<br>President, Female
                                Lawyers’ Network (FLN)</footer>
                        </div>
                    </div>
                </div>
                <!-- Message from the Chairperson -->
                <div class="col-md-6 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h3 class="card-title text-primary">Message from the Chairperson</h3>
                            <p class="card-text">
                                "To uphold women’s human rights is to ensure that every woman and girl lives up to her
                                full potential. This year, we celebrated International Women’s Day under the theme
                                'DigitALL: Innovation and technology for gender equality'. We aim to empower young girls
                                who intend to influence the world through law so they are not left behind.
                            </p>
                            <p class="card-text">
                                I invite you to search within and ask how you can facilitate a young girl in achieving
                                her dreams. Join us in our mission to eradicate gender injustices and promote women’s
                                rights.
                            </p>
                            <footer class="blockquote-footer">Hon. Lady Justice Lillian Tibatemwa
                                Ekirukubinza<br>Chairperson, Female Lawyers’ Network (FLN)</footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FLN Secretariat Section -->
    <section class="fln-secretariat py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5">FLN Secretariat <i class="bi bi-people-fill text-secondary"></i></h2>
            <div id="flnSecretariatCarousel" class="carousel slide" data-bs-ride="carousel">
                <!-- Indicators/Dots -->
                <div class="carousel-indicators">
                    <?php
                    // Define team members grouped into slides (4 per slide)
                    $team_members = [
                        // Slide 1
                        [
                            [
                                'image' => 'imgs/WhatsApp Image 2023-02-16 at 16.39.39.jpg',
                                'name' => 'LEAH NASASIRA',
                                'position' => 'Chief Executive Officer',
                            ],
                            [
                                'image' => 'imgs/WhatsApp Image 2023-04-04 at 11.08.26 (1).jpg',
                                'name' => 'SANDRA NANTABA',
                                'position' => 'Executive Coordinator',
                            ],
                            [
                                'image' => 'imgs/daisy.jpg',
                                'name' => 'DAISY MULAMUZI KASUJJA',
                                'position' => 'Strategic Advisor',
                            ],
                            [
                                'image' => 'imgs/fatta.jpg',
                                'name' => 'MUZAFAR GWEYAWADDE',
                                'position' => 'Social Media Officer',
                            ],
                        ],
                        // Slide 2
                        [
                            [
                                'image' => 'imgs/PHOTO-2024-01-03-19-42-44.jpg',
                                'name' => 'MUBIRU BYRON',
                                'position' => 'I.T',
                            ],
                            [
                                'image' => 'imgs/PHOTO-2024-01-03-19-42-54.jpg',
                                'name' => 'JORDANAH NANDAULA',
                                'position' => 'Coordinator',
                            ],
                            [
                                'image' => 'imgs/WhatsApp Image 2023-01-10 at 19.57.11.jpg',
                                'name' => 'APHOPHIA KOMUGAMBE',
                                'position' => 'Law University Coordinator',
                            ],
                            [
                                'image' => 'imgs/lavender.jpg',
                                'name' => 'LAVENDER NASSANGA',
                                'position' => 'Volunteer',
                            ],
                        ],
                    ];

                    $total_slides = count($team_members);
                    for ($i = 0; $i < $total_slides; $i++) {
                        $active_class = $i === 0 ? 'active' : '';
                        echo '<button type="button" data-bs-target="#flnSecretariatCarousel" data-bs-slide-to="' . $i . '" class="' . $active_class . '" aria-current="' . ($i === 0 ? 'true' : 'false') . '" aria-label="FLN Secretariat Member ' . ($i + 1) . '"></button>';
                    }
                    ?>
                </div>

                <!-- Carousel Inner -->
                <div class="carousel-inner">
                    <?php
                    foreach ($team_members as $slide_index => $members_chunk) {
                        $active_class = $slide_index === 0 ? 'active' : '';
                        echo '<div class="carousel-item ' . $active_class . '">';
                        echo '  <div class="row justify-content-center">';
                        foreach ($members_chunk as $member) {
                            echo '      <div class="col-lg-3 col-md-6 mb-4">';
                            echo '          <div class="card glass-section h-100 text-center shadow">';
                            echo '              <img src="' . htmlspecialchars($member['image']) . '" alt="' . htmlspecialchars($member['name']) . '" class="img-fluid rounded-circle mx-auto mt-3" style="width: 150px; height: 150px; object-fit: cover;" loading="lazy">';
                            echo '              <div class="card-body">';
                            echo '                  <h5 class="card-title">' . htmlspecialchars($member['name']) . '</h5>';
                            echo '                  <p class="card-text">' . htmlspecialchars($member['position']) . '</p>';
                            echo '              </div>';
                            echo '          </div>';
                            echo '      </div>';
                        }
                        echo '  </div>';
                        echo '</div>';
                    }
                    ?>
                </div>

                <!-- Carousel Controls -->
                <button class="carousel-control-prev" type="button" data-bs-target="#flnSecretariatCarousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#flnSecretariatCarousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>

    <!-- Board Members Section -->
    <section class="volunteer_area py-5 bg-light">
        <div class="container">
            <h2 class="text-center display-4 font-weight-bold mb-4">FLN Board Members <i
                    class="bi bi-people-fill text-secondary"></i></h2>
            <p class="text-center mb-5">Our Board Comprises Highly Skilled and Professional Women</p>
            <div id="boardCarousel" class="carousel slide" data-bs-ride="carousel">
                <!-- Indicators/Dots -->
                <div class="carousel-indicators">
                    <?php
                    // Assuming there are 4 board members per slide
                    $board_members = [
                        [
                            'image' => 'imgs/WhatsApp Image 2023-01-05 at 13.31.00.jpeg',
                            'name' => 'Hon Dr. Joyce Nalunga Birimumaaso',
                            'position' => 'PRESIDENT | FOUNDER',
                            'description' => 'Member, Leadership Code Tribunal.',
                        ],
                        [
                            'image' => 'imgs/justice lillian.jfif',
                            'name' => 'Hon Prof. Lady Justice Lillian Tibatemwa Ekirukubinza',
                            'position' => 'CHAIRPERSON',
                            'description' => 'Justice of the Supreme Court.',
                        ],
                        [
                            'image' => 'imgs/jane abodo.png',
                            'name' => 'Hon. Lady Justice Jane Frances Abodo',
                            'position' => 'VICE CHAIRPERSON',
                            'description' => 'Director of Public Prosecutions.',
                        ],
                        [
                            'image' => 'imgs/WhatsApp Image 2023-01-05 at 14.26.09.jpeg',
                            'name' => 'Ms. Angelina Namakula Ofwono',
                            'position' => 'MEMBER',
                            'description' => 'Chief Legal, DFCU Bank.',
                        ],
                        [
                            'image' => 'imgs/WhatsApp Image 2023-01-06 at 08.48.58.jpeg',
                            'name' => 'Bulya Lillian',
                            'position' => 'SECRETARY',
                            'description' => 'Managing Partner, L-Bulya & Co. Advocates.',
                        ],
                        [
                            'image' => 'imgs/PHOTO-2022-06-27-16-56-26.jpg',
                            'name' => 'Hope Atuhairwe Kisitu',
                            'position' => 'MEMBER',
                            'description' => 'Corporation Secretary, Uganda Development Corporation.',
                        ],
                        [
                            'image' => 'imgs/WhatsApp Image 2023-01-09 at 15.23.47.jpeg',
                            'name' => 'Anne Abeja',
                            'position' => 'MEMBER',
                            'description' => 'Company Secretary Housing Finance Bank.',
                        ],
                        [
                            'image' => 'imgs/suz.jpg',
                            'name' => 'Suzan Batuuka',
                            'position' => 'MEMBER',
                            'description' => 'Head Legal Uganda Airlines.',
                        ],
                        [
                            'image' => 'imgs/joanita.jpg',
                            'name' => 'Joanita Bushara',
                            'position' => 'MEMBER',
                            'description' => 'Managing Partner of Justitia Advocates Private Practice.',
                        ],
                    ];

                    $total_slides = ceil(count($board_members) / 4);
                    for ($i = 0; $i < $total_slides; $i++) {
                        $active_class = $i === 0 ? 'active' : '';
                        echo '<button type="button" data-bs-target="#boardCarousel" data-bs-slide-to="' . $i . '" class="' . $active_class . '" aria-current="' . ($i === 0 ? 'true' : 'false') . '" aria-label="Board Slide ' . ($i + 1) . '"></button>';
                    }
                    ?>
                </div>

                <!-- Carousel Inner -->
                <div class="carousel-inner">
                    <?php
                    foreach (array_chunk($board_members, 4) as $slide_index => $members_chunk) {
                        $active_class = $slide_index === 0 ? 'active' : '';
                        echo '<div class="carousel-item ' . $active_class . '">';
                        echo '  <div class="row">';
                        foreach ($members_chunk as $member) {
                            echo '      <div class="col-md-3 mb-4">';
                            echo '          <div class="card glass-section h-100 text-center shadow">';
                            echo '              <img src="' . htmlspecialchars($member['image']) . '" alt="' . htmlspecialchars($member['name']) . '" class="card-img-top img-fluid rounded-circle mx-auto mt-3" style="width: 150px; height: 150px; object-fit: cover;">';
                            echo '              <div class="card-body">';
                            echo '                  <h5 class="card-title">' . htmlspecialchars($member['name']) . '</h5>';
                            echo '                  <h6 class="card-subtitle mb-2 text-muted">' . htmlspecialchars($member['position']) . '</h6>';
                            echo '                  <p class="card-text">' . htmlspecialchars($member['description']) . '</p>';
                            echo '              </div>';
                            echo '          </div>';
                            echo '      </div>';
                        }
                        echo '  </div>';
                        echo '</div>';
                    }
                    ?>
                </div>

                <!-- Carousel Controls -->
                <button class="carousel-control-prev" type="button" data-bs-target="#boardCarousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#boardCarousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
    </section>

    <!-- Associate Members Section -->
    <section class="associate-members py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5">Associate Members <i class="bi bi-people-fill text-secondary"></i></h2>
            <p class="text-center mb-5">Our Associate Members are also highly skilled professionals.</p>
            <div id="associateCarousel" class="carousel slide" data-bs-ride="carousel">
                <!-- Indicators/Dots -->
                <div class="carousel-indicators">
                    <?php
                    $associate_members = [
                        [
                            'image' => 'imgs/asuman.png',
                            'name' => 'Hon. Asuman Kiyingi',
                            'position' => 'Deputy Chairperson, Leadership Code Tribunal.',
                        ],
                        [
                            'image' => 'imgs/deo.jpg',
                            'name' => 'Kalikumutima Deo',
                            'position' => 'Managing Partner Kalikumutima & Co. Advocates.',
                        ],
                        [
                            'image' => 'imgs/sp.jpg',
                            'name' => 'Musangala Simon Peter',
                            'position' => 'Managing Partner Musangala & Co. Advocates.',
                        ],
                        [
                            'image' => 'imgs/sto.jpg',
                            'name' => 'Stanley Oketcho',
                            'position' => 'Partner Gem Advocates.',
                        ],
                        [
                            'image' => 'imgs/robert.jpg',
                            'name' => 'Robert Mackay',
                            'position' => 'Managing Partner, R. Mackay & Co. Advocates.',
                        ],
                        [
                            'image' => 'imgs/PHOTO-2023-12-29-21-35-17.jpg',
                            'name' => 'Otim Isaac',
                            'position' => 'Musangala Advocates.',
                        ],
                    ];

                    $total_associate_slides = ceil(count($associate_members) / 3); // 3 per slide
                    for ($i = 0; $i < $total_associate_slides; $i++) {
                        $active_class = $i === 0 ? 'active' : '';
                        echo '<button type="button" data-bs-target="#associateCarousel" data-bs-slide-to="' . $i . '" class="' . $active_class . '" aria-current="' . ($i === 0 ? 'true' : 'false') . '" aria-label="Associate Slide ' . ($i + 1) . '"></button>';
                    }
                    ?>
                </div>

                <!-- Carousel Inner -->
                <div class="carousel-inner">
                    <?php
                    foreach (array_chunk($associate_members, 3) as $slide_index => $members_chunk) {
                        $active_class = $slide_index === 0 ? 'active' : '';
                        echo '<div class="carousel-item ' . $active_class . '">';
                        echo '  <div class="row justify-content-center">';
                        foreach ($members_chunk as $member) {
                            echo '      <div class="col-md-4 mb-4">';
                            echo '          <div class="card glass-section h-100 text-center shadow">';
                            echo '              <img src="' . htmlspecialchars($member['image']) . '" alt="' . htmlspecialchars($member['name']) . '" class="card-img-top img-fluid rounded-circle mx-auto mt-3" style="width: 150px; height: 150px; object-fit: cover;">';
                            echo '              <div class="card-body">';
                            echo '                  <h5 class="card-title">' . htmlspecialchars($member['name']) . '</h5>';
                            echo '                  <p class="card-text">' . htmlspecialchars($member['position']) . '</p>';
                            echo '              </div>';
                            echo '          </div>';
                            echo '      </div>';
                        }
                        echo '  </div>';
                        echo '</div>';
                    }
                    ?>
                </div>

                <!-- Carousel Controls -->
                <button class="carousel-control-prev" type="button" data-bs-target="#associateCarousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#associateCarousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>

    <!-- Carousel Bottom Section -->
    <section class="carousel_bottom py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5">Messages from Our Leaders <i
                    class="bi bi-chat-left-text-fill text-primary"></i></h2>
            <div id="messagesCarousel" class="carousel slide" data-bs-ride="carousel">
                <!-- Indicators/Dots -->
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#messagesCarousel" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Message 1"></button>
                    <button type="button" data-bs-target="#messagesCarousel" data-bs-slide-to="1"
                        aria-label="Message 2"></button>
                    <button type="button" data-bs-target="#messagesCarousel" data-bs-slide-to="2"
                        aria-label="Message 3"></button>
                </div>

                <!-- Carousel Inner -->
                <div class="carousel-inner">
                    <!-- Slide 1: Founder Message -->
                    <div class="carousel-item active">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="card glass-section h-100 text-center shadow">
                                    <div class="card-body">
                                        <img src="imgs/WhatsApp Image 2023-01-05 at 13.31.00.jpeg" alt="Founder Message"
                                            class="img-fluid rounded-circle mb-3"
                                            style="width: 120px; height: 120px; object-fit: cover;">
                                        <h5 class="card-title">HON. DR. JOYCE NALUNGA BIRIMUMAASO</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">FOUNDER | PRESIDENT (FLN)</h6>
                                        <p class="card-text">
                                            <i class="bi bi-quote"></i> "Our mission is to empower female lawyers to
                                            lead with integrity and advocate for gender equality in the legal
                                            profession." <i class="bi bi-quote"></i>
                                        </p>
                                        <a href="flnpg1.html" class="btn btn-primary">
                                            Read Message <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Chairperson Message -->
                    <div class="carousel-item">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="card glass-section h-100 text-center shadow">
                                    <div class="card-body">
                                        <img src="imgs/justice lillian.jfif" alt="Chairperson Message"
                                            class="img-fluid rounded-circle mb-3"
                                            style="width: 120px; height: 120px; object-fit: cover;">
                                        <h5 class="card-title">Hon. Lady Justice Lillian Tibatemwa Ekirukubinza</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">CHAIRPERSON</h6>
                                        <p class="card-text">
                                            <i class="bi bi-quote"></i> "We strive to create an inclusive environment
                                            where every female lawyer can thrive and make impactful changes." <i
                                                class="bi bi-quote"></i>
                                        </p>
                                        <a href="flnpg1.html" class="btn btn-primary">
                                            Read Message <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Patron Message -->
                    <div class="carousel-item">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="card glass-section h-100 text-center shadow">
                                    <div class="card-body">
                                        <img src="imgs/kadaga.jfif" alt="Patron Message"
                                            class="img-fluid rounded-circle mb-3"
                                            style="width: 120px; height: 120px; object-fit: cover;">
                                        <h5 class="card-title">RT. HON. REBECCA ALITWALA KADAGA</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">PATRON (FLN)</h6>
                                        <p class="card-text">
                                            <i class="bi bi-quote"></i> "Empowering women in law is essential for
                                            achieving justice and equality in society." <i class="bi bi-quote"></i>
                                        </p>
                                        <a href="flnpg1.html" class="btn btn-primary">
                                            Read Message <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Carousel Controls -->
                <button class="carousel-control-prev" type="button" data-bs-target="#messagesCarousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#messagesCarousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
</main>

<?php
include('footer.php');
?>