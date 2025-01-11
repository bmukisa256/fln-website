<!-- events.php -->
<?php
include('header.php');
?>

<main style="padding-top: 17vh;">
    <!-- Page Header -->
    <section class="page-header py-5 text-white">
        <div class="container text-center">
            <h1>Events</h1>
            <p class="lead">Discover Our Upcoming and Past Events</p>
        </div>
    </section>

    <!-- Upcoming Events Section -->
    <section class="upcoming-events py-5">
        <div class="container">
            <h2 class="text-center mb-5"><i class="bi bi-calendar-event text-primary me-2"></i>Upcoming Events</h2>
            <div class="row">
                <?php
                $events = [
                    ["image" => "imgs/virtaul_session2.jpeg", "date" => "27th JULY 2024 | 4:00 pm", "name" => "Leah Nasasira"],
                    ["image" => "imgs/virtaul_session1.jpeg", "date" => "25th AUGUST 2024 | 8:00 am", "name" => "Daisy Mulamuzi"],
                    ["image" => "imgs/virtaul_session3.jpeg", "date" => "12th SEPTEMBER 2024 | 8:00 am", "name" => "Sandra Nantaba"],
                ];

                foreach ($events as $event) {
                    echo '<div class="col-md-4 mb-4">';
                    echo '    <div class="card event-card glass-section h-100 shadow">';
                    echo '        <img src="' . htmlspecialchars($event["image"]) . '" alt="' . htmlspecialchars($event["name"]) . '" class="card-img-top img-fluid" loading="lazy">';
                    echo '        <div class="card-body">';
                    echo '            <h5 class="card-title text-primary">' . htmlspecialchars($event["name"]) . '</h5>';
                    echo '            <p class="card-text"><i class="bi bi-clock text-warning me-2"></i>' . htmlspecialchars($event["date"]) . '</p>';
                    echo '        </div>';
                    echo '    </div>';
                    echo '</div>';
                }
                ?>
            </div>
        </div>
    </section>

    <!-- Past Events Section -->
    <section class="past-events bg-light py-5">
        <div class="container">
            <h2 class="text-center mb-5"><i class="bi bi-calendar-check text-success me-2"></i>Past Events</h2>
            <div class="row">
                <?php
                $past_events = [
                    ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.42.jpeg", "date" => "7th SEPTEMBER 2022 | 4:00 pm", "name" => "Hope Atuhairwe"],
                    ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.43 (1).jpeg", "date" => "7th SEPTEMBER 2022 | 4:00 pm", "name" => "Mariam Mbabaali"],
                    ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.43.jpeg", "date" => "7th SEPTEMBER 2022 | 4:00 pm", "name" => "Dr. Joyce Nalunga Birimumaaso"],
                    ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.44 (1).jpeg", "date" => "7th SEPTEMBER 2022 | 4:00 pm", "name" => "Dr. Zahara Nampewo"],
                    ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.44.jpeg", "date" => "7th SEPTEMBER 2022 | 4:00 pm", "name" => "Angelina Namakula Ofwono"],
                    ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.45 (1).jpeg", "date" => "7th SEPTEMBER 2022 | 4:00 pm", "name" => "Hon. Lady Justice Jane Frances Abodo"],
                    ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.45.jpeg", "date" => "7th SEPTEMBER 2022 | 4:00 pm", "name" => "Dr. Sylivia Namubiru Mukasa"],
                    ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.46.jpeg", "date" => "7th SEPTEMBER 2022 | 4:00 pm", "name" => "Dr. Patricia Achan Okiria"],
                    ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.50 (1).jpeg", "date" => "23rd SEPTEMBER 2022 | 4:00 pm", "name" => "Alice Nakato Lwanga"],
                    ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.47 (1).jpeg", "date" => "30th SEPTEMBER 2022 | 4:00 pm", "name" => "Cecilia Namuddu Muhwezi"],
                    ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.48.jpeg", "date" => "7th OCTOBER 2022 | 4:00 pm", "name" => "Hon. Lady Justice Lillian T. Ekirukubinza"],
                    ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.48 (1).jpeg", "date" => "14th OCTOBER 2022 | 4:00 pm", "name" => "Dr. Sabrina Kitaka"],
                    ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.49.jpeg", "date" => "21st OCTOBER 2022 | 4:00 pm", "name" => "Dr. Justice Walusimbi-Ngobi"],
                    ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.49 (1).jpeg", "date" => "28th OCTOBER 2022 | 4:00 pm", "name" => "Sylivia Mbabazi"],
                    ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.50.jpeg", "date" => "4th NOVEMBER 2022 | 4:00 pm", "name" => "Hon. Lady Justice Julia Sebutinde"],
                    ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.51 (1).jpeg", "date" => "18th NOVEMBER 2022 | 4:00 pm", "name" => "Mercy Kainobwisho"],
                    ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.52.jpeg", "date" => "25th NOVEMBER 2022 | 4:00 pm", "name" => "Patience T. Rubagumya"],
                    ["image" => "imgs/corporatewomen.jpg", "date" => "1st JUNE 2023 | 5:00 pm", "name" => "Hilder Bahati Sabiti"],
                    ["image" => "imgs/essential.png", "date" => "16th JUNE 2023 | 4:00 pm", "name" => "Ivan Baguma"],
                    ["image" => "imgs/personal fina.jpg", "date" => "7th JULY 2023 | 4:00 pm", "name" => "Angelina Ofwono"],
                    ["image" => "imgs/pp.jpg", "date" => "21st JULY 2023 | 6:00 pm", "name" => "Dr. Joyce Birimumaaso"],
                    ["image" => "imgs/journey.jpg", "date" => "22nd SEPTEMBER 2023 | 4:00 pm", "name" => "Penelope Sanyu"],
                    ["image" => "imgs/century female.jpg", "date" => "13th OCTOBER 2023 | 4:00 pm", "name" => "Daisy Mulamuzi Kasujja"],
                    ["image" => "imgs/dynamic.jpg", "date" => "27th OCTOBER 2023 | 4:00 pm", "name" => "Fatuma Omar"],
                    ["image" => "imgs/goodcommun.jpg", "date" => "3rd NOVEMBER 2023 | 6:00 pm", "name" => "Norah Matovu Muwanga"],
                    ["image" => "imgs/stragtegicnetw.jpg", "date" => "6th OCTOBER 2023 | 4:00 pm", "name" => "Dr. Joyce Birimumaaso"],
                    ["image" => "imgs/personal dev.jpg", "date" => "26th AUGUST 2023 | 8:00 am", "name" => "Mr. Venkatesh Kumar"],
                ];

                foreach ($past_events as $event) {
                    echo '<div class="col-md-4 mb-4">';
                    echo '    <div class="card past-event-card glass-section h-100 shadow">';
                    echo '        <img src="' . htmlspecialchars($event["image"]) . '" alt="' . htmlspecialchars($event["name"]) . '" class="card-img-top img-fluid" loading="lazy">';
                    echo '        <div class="card-body">';
                    echo '            <h5 class="card-title text-success">' . htmlspecialchars($event["name"]) . '</h5>';
                    echo '            <p class="card-text"><i class="bi bi-clock text-warning me-2"></i>' . htmlspecialchars($event["date"]) . '</p>';
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