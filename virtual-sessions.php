<?php include('header.php'); ?>

<section class="events_section_area py-5">
    <div class="container">
        <h2 class="text-center mb-4">FLN VIRTUAL ENGAGEMENTS <i class="fa fa-desktop" aria-hidden="true"></i></h2>
        <p class="text-center mb-5">
            Female Lawyers’ Network (FLN) has been successful in conducting various sessions; both virtual and physical
            sessions. These sessions have covered a wide range of areas cutting across the legal spectrum, health,
            personal management, financial literacy work-life balance, relating for corporates, and many more in a bid
            to empower and mentor women lawyers and law students.
        </p>
        <div class="row">
            <?php
            $events = [
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.42.jpeg", "date" => "7th SEPTEMBER 2022|4:00 pm", "name" => "Hope Atuhairwe"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.43 (1).jpeg", "date" => "7th SEPTEMBER 2022|4:00 pm", "name" => "Mariam Mbabaali"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.43.jpeg", "date" => "7th SEPTEMBER 2022|4:00 pm", "name" => "Dr.Joyce Nalunga Birimumaaso"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.44 (1).jpeg", "date" => "7th SEPTEMBER 2022|4:00 pm", "name" => "Dr.Zahara Nampewo"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.44.jpeg", "date" => "7th SEPTEMBER 2022|4:00 pm", "name" => "Angelina Namakula Ofwono"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.45 (1).jpeg", "date" => "7th SEPTEMBER 2022|4:00 pm", "name" => "Hon.Lady Justice Jane Frances Abodo"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.45.jpeg", "date" => "7th SEPTEMBER 2022|4:00 pm", "name" => "Dr.Sylivia Namubiru Mukasa"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.46.jpeg", "date" => "7th SEPTEMBER 2022|4:00 pm", "name" => "Dr.Patricia Achan Okiria"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.50 (1).jpeg", "date" => "23rd SEPTEMBER 2022|4:00 pm", "name" => "Alice Nakato Lwanga"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.47 (1).jpeg", "date" => "30th SEPTEMBER 2022|4:00 pm", "name" => "Cecilia Namuddu Muhwezi"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.48.jpeg", "date" => "7th OCTOBER 2022|4:00 pm", "name" => "Hon.Lady Justice Lillian.T.Ekirukubinza"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.48 (1).jpeg", "date" => "14th OCTOBER 2022|4:00 pm", "name" => "Dr.Sabrina Kitaka"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.49.jpeg", "date" => "21st OCTOBER 2022|4:00 pm", "name" => "Dr.Justice Walusimbi-Ngobi"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.49 (1).jpeg", "date" => "28th OCTOBER 2022|4:00 pm", "name" => "Sylivia Mbabazi"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.50.jpeg", "date" => "4th NOVEMBER 2022|4:00 pm", "name" => "Hon.Lady Justice Julia Sebutinde"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.51 (1).jpeg", "date" => "18th NOVEMBER 2022|4:00 pm", "name" => "Mercy Kainobwisho"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.52.jpeg", "date" => "25th NOVEMBER 2022|4:00 pm", "name" => "Patience.T.Rubagumya"],
                ["image" => "imgs/corporatewomen.jpg", "date" => "1st JUNE 2023|5:00 pm", "name" => "Hilder Bahati Sabiti"],
                ["image" => "imgs/essential.png", "date" => "16th JUNE 2023|4:00 pm", "name" => "Ivan Baguma"],
                ["image" => "imgs/personal fina.jpg", "date" => "7th JULY 2023|4:00 pm", "name" => "Angelina Ofwono"],
                ["image" => "imgs/pp.jpg", "date" => "21st JULY 2023|6:00 pm", "name" => "Dr.Joyce Birimumaaso"],
                ["image" => "imgs/journey.jpg", "date" => "22nd SEPTEMBER 2023|4:00 pm", "name" => "Penelope Sanyu"],
                ["image" => "imgs/century female.jpg", "date" => "13th OCTOBER 2023|4:00 pm", "name" => "Daisy Mulamuzi Kasujja"],
                ["image" => "imgs/dynamic.jpg", "date" => "27th OCTOBER 2023|4:00 pm", "name" => "Fatuma Omar"],
                ["image" => "imgs/goodcommun.jpg", "date" => "3rd NOVEMBER 2023|6:00 pm", "name" => "Norah Matovu Muwanga"],
                ["image" => "imgs/stragtegicnetw.jpg", "date" => "25th NOVEMBER 2022|4:00 pm", "name" => "Dr.Joyce Birimumaaso"],
                ["image" => "imgs/personal dev.jpg", "date" => "25th NOVEMBER 2022|4:00 pm", "name" => "Dr.Joyce Birimumaaso"],
            ];

            foreach ($events as $event) {
                echo '<div class="col-md-4 col-xs-12 mb-4 d-flex justify-content-center">';
                echo '<div class="card events_single" style="width: 18rem;">';
                echo '<img src="' . $event['image'] . '" class="card-img-top" alt="">';
                echo '<div class="card-body">';
                echo '<p class="card-text"><span class="event_left"><i class="material-icons">access_time</i>' . $event['date'] . '</span></p>';
                echo '<h5 class="card-title">' . $event['name'] . '</h5>';
                echo '</div>';
                echo '</div>';
                echo '</div>';
            }
            ?>
        </div>
    </div>
</section>

<?php include('footer.php'); ?>