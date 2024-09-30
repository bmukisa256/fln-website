<?php include('header.php'); ?>

<style>
.events_single {
    height: 360px;
    /* Adjusted height for better spacing */
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    /* Optional: Add border for better distinction */
    border-radius: 8px;
    /* Optional: Rounded corners */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    /* Optional: Add shadow for depth */
    overflow: hidden;
    /* Prevent overflow of content */
    max-width: 100%;
}

.card-body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    /* Increased padding for better spacing */
}

.card-title {
    font-size: 1.25rem;
    /* Slightly larger font size for better visibility */
    font-weight: bold;
    /* Make the title bold */
    margin: 10px 0 5px;
    /* Add margin for spacing */
    color: #333;
    /* Darker color for better contrast */
}

.card-text {
    font-size: 14px;
    /* Adjust font size for better readability */
    color: #555;
    /* Lighter color for the date */
    margin: 0;
    /* Remove margin for better alignment */
}

.event_left {
    display: flex;
    align-items: center;
    /* Center the icon and text vertically */
    font-size: 14px;
    /* Ensure consistent font size */
    margin-bottom: 5px;
    /* Add spacing below the date */
}

.material-icons {
    margin-right: 5px;
    /* Space between icon and text */
    color: #06B6D4;
    /* Customize icon color */
}

.card-img-top {
    height: 270px;
    /* Fixed height for images */
    object-fit: cover;
    /* Ensure the image covers the area without distortion */
}
</style>

<section class="events_section_area py-5">
    <div class="container">
        <h2 style="color: black; text-align: center; font-size: 24px;">FLN VIRTUAL ENGAGEMENTS <i class="fa fa-desktop"
                aria-hidden="true"></i></h2>
        <p class="text-center mb-5">
            Female Lawyers’ Network (FLN) has been successful in conducting various sessions; both virtual and physical
            sessions. These sessions have covered a wide range of areas cutting across the legal spectrum, health,
            personal management, financial literacy work-life balance, relating for corporates, and many more in a bid
            to empower and mentor women lawyers and law students.
        </p>
        <div class="row">
            <?php
            $events = [
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.42.jpeg", "date" => "7th SEPTEMBER 2024|4:00 pm", "name" => "Hope Atuhairwe"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.43 (1).jpeg", "date" => "7th SEPTEMBER 2024|4:00 pm", "name" => "Mariam Mbabaali"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.43.jpeg", "date" => "7th SEPTEMBER 2024|4:00 pm", "name" => "Dr. Joyce Nalunga Birimumaaso"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.44 (1).jpeg", "date" => "7th SEPTEMBER 2024|4:00 pm", "name" => "Dr. Zahara Nampewo"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.44.jpeg", "date" => "7th SEPTEMBER 2024|4:00 pm", "name" => "Angelina Namakula Ofwono"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.45 (1).jpeg", "date" => "7th SEPTEMBER 2024|4:00 pm", "name" => "Hon. Lady Justice Jane Frances Abodo"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.45.jpeg", "date" => "7th SEPTEMBER 2024|4:00 pm", "name" => "Dr. Sylivia Namubiru Mukasa"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.46.jpeg", "date" => "7th SEPTEMBER 2024|4:00 pm", "name" => "Dr. Patricia Achan Okiria"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.50 (1).jpeg", "date" => "23rd SEPTEMBER 2024|4:00 pm", "name" => "Alice Nakato Lwanga"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.47 (1).jpeg", "date" => "30th SEPTEMBER 2024|4:00 pm", "name" => "Cecilia Namuddu Muhwezi"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.48.jpeg", "date" => "7th OCTOBER 2024|4:00 pm", "name" => "Hon. Lady Justice Lillian T. Ekirukubinza"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.48 (1).jpeg", "date" => "14th OCTOBER 2024|4:00 pm", "name" => "Dr. Sabrina Kitaka"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.49.jpeg", "date" => "21st OCTOBER 2024|4:00 pm", "name" => "Dr. Justice Walusimbi-Ngobi"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.49 (1).jpeg", "date" => "28th OCTOBER 2024|4:00 pm", "name" => "Sylivia Mbabazi"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.50.jpeg", "date" => "4th NOVEMBER 2024|4:00 pm", "name" => "Hon. Lady Justice Julia Sebutinde"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.51 (1).jpeg", "date" => "18th NOVEMBER 2024|4:00 pm", "name" => "Mercy Kainobwisho"],
                ["image" => "imgs/WhatsApp Image 2023-01-04 at 21.47.52.jpeg", "date" => "25th NOVEMBER 2024|4:00 pm", "name" => "Patience T. Rubagumya"],
                ["image" => "imgs/corporatewomen.jpg", "date" => "1st JUNE 2023|5:00 pm", "name" => "Hilder Bahati Sabiti"],
                ["image" => "imgs/essential.png", "date" => "16th JUNE 2023|4:00 pm", "name" => "Ivan Baguma"],
                ["image" => "imgs/personal fina.jpg", "date" => "7th JULY 2023|4:00 pm", "name" => "Angelina Ofwono"],
                ["image" => "imgs/pp.jpg", "date" => "21st JULY 2023|6:00 pm", "name" => "Dr. Joyce Birimumaaso"],
                ["image" => "imgs/journey.jpg", "date" => "22nd SEPTEMBER 2023|4:00 pm", "name" => "Penelope Sanyu"],
                ["image" => "imgs/century female.jpg", "date" => "13th OCTOBER 2023|4:00 pm", "name" => "Daisy Mulamuzi Kasujja"],
                ["image" => "imgs/dynamic.jpg", "date" => "27th OCTOBER 2023|4:00 pm", "name" => "Fatuma Omar"],
                ["image" => "imgs/goodcommun.jpg", "date" => "3rd NOVEMBER 2023|6:00 pm", "name" => "Norah Matovu Muwanga"],
                ["image" => "imgs/stragtegicnetw.jpg", "date" => "25th NOVEMBER 2024|4:00 pm", "name" => "Dr. Joyce Birimumaaso"],
                ["image" => "imgs/personal dev.jpg", "date" => "25th NOVEMBER 2024|4:00 pm", "name" => "Dr. Joyce Birimumaaso"],
                ["image" => "imgs/virtaul_session1.jpeg", "date" => "25th AUGUST 2024|8:00 am", "name" => "Dr. Joyce Birimumaaso"],
                ["image" => "imgs/virtaul_session2.jpeg", "date" => "27th JULY 2024|4:00 pm", "name" => "Dr. Joyce Birimumaaso"],
                ["image" => "imgs/virtaul_session3.jpeg", "date" => "12th SEPTEMBER 2024|8:00 am", "name" => "Dr. Joyce Birimumaaso"],
            ];
            foreach ($events as $event) {
                echo '<div class="col-md-3 col-sm-6 mb-4 d-flex justify-content-center">'; // Adjusted to use col-sm-6 for smaller screens
                echo '<div class="card events_single w-100">'; // Added w-100 to make the card take full width of the column
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