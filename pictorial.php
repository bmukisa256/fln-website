<?php
include('header.php');
?>

<style>
    .our_causes {
        padding: 50px 0;
        background-color: #f9f9f9;
    }

    .our_causes h2 {
        text-align: center;
        margin-bottom: 30px;
        font-size: 2.5rem;
        color: #333;
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
    }

    .grid-item {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        background: rgba(255, 255, 255, 0.9);
    }

    .grid-item img {
        width: 100%;
        border-radius: 8px;
        transition: transform 0.3s ease;
    }

    .grid-item:hover img {
        transform: scale(1.05);
    }

    .for_padding {
        padding: 15px;
        text-align: center;
    }

    .for_padding h2 {
        font-size: 1.5rem;
        color: #333;
        margin: 10px 0;
    }

    .for_padding p {
        color: #666;
    }

    .ribbon {
        position: absolute;
        right: -10px;
        top: 10px;
        background: #f44336;
        /* Red color */
        color: #fff;
        padding: 5px 10px;
        font-size: 0.8rem;
        transform: rotate(45deg);
        text-align: center;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
</style>

<section class="our_causes">
    <h2>FLN IN PICTURES <i class="fa fa-camera-retro" aria-hidden="true"></i></h2>
    <div class="container">
        <div class="grid-container">

            <?php
            $image_items = [
                [
                    'image' => 'imgs/nk7.jpg',
                    'title' => 'NKUMBA UNIVERSITY',
                    'description' => 'The Female Lawyers’ Network has this year been able to launch a club in Nkumba University',
                ],
                [
                    'image' => 'imgs/bs2.jpg',
                    'title' => 'BISHOP STUART UNIVERSITY-MBARARA',
                    'description' => 'The Female Lawyers’ Network has this year been able to launch a club in Bishop Stuart University',
                ],
                [
                    'image' => 'imgs/kc2.jpg',
                    'title' => 'KING CEASOR UNIVERSITY-GABA',
                    'description' => 'The Female Lawyers’ Network has this year been able to launch a club in King Ceasor University',
                ],
                [
                    'image' => 'imgs/iuiu.jpg',
                    'title' => 'ISLAMIC UNIVERSITY IN UGANDA',
                    'description' => 'Law School End of year Dinner and Handover Ceremony at IUIU Female Campus Kabojja-2023',
                ],
                [
                    'image' => 'imgs/ist.jpg',
                    'title' => 'INSTITUTE FOR SOCIAL TRANSFORMATION',
                    'description' => 'The FLN CEO (right) and the Executive Coordinator, (left) after a fruitful discussion with the IST Executive Director, Maureen Wagubi at the IST Offices in Ntinda on 14th June 2023. IST is a women’s rights organization committed to a society where people value and enjoy social economic and gender justice.',
                ],
                [
                    'image' => 'imgs/nm.jpg',
                    'title' => 'NATIONAL MARKET WOMEN ENTREPRENEURS\' SYMPOSIUM',
                    'description' => 'The FLN President and CEO attend the 5th Annual National Market Women Entrepreneurs’ Symposium held on 21st June 2023 at Silver Springs Hotel, Bugolobi – Kampala organized by the IST',
                ],
                [
                    'image' => 'imgs/csr.jpg',
                    'title' => 'CORPORATE SOCIAL RESPONSIBILITY',
                    'description' => 'The female lawyers’ Network carried out Corporate Social Responsibility (CSR) at Katalemwa Cheshire. They carried with them food, clothes, drinks and also mentored the young ones and gave them a ray of hope that with God their situation can be better.',
                ],
                [
                    'image' => 'imgs/ulsr.jpg',
                    'title' => 'UGANDA LAW SOCIETY RULE OF LAW BOOT CAMP',
                    'description' => 'The FLN team attends the Uganda Law Society Rule of Law Boot Camp held at Makerere University in October 2023',
                ],
                [
                    'image' => 'imgs/tj.jpg',
                    'title' => 'THE JUDICIARY',
                    'description' => 'In the month of November 2023, the FLN team made courtesy calls to different offices in the Judiciary including office of the Chief Justice, Deputy Chief Justice, female Justices of the Court of Appeal. The purpose of these meetings was to introduce the FLN and streamline areas of collaboration with the Judiciary.',
                ],
                [
                    'image' => 'imgs/dfcu.jpg',
                    'title' => 'DFCU BANK(WOMEN IN BUSINESS)',
                    'description' => 'It was such a fruitful meeting between the Manager DFCU Women in Business (Left) Ms. Ruth Asasira and FLN’s CEO(Right) and Executive Coordinator on 15th June, 2023 at the DFCU Head office at Nakasero- Kampala.',
                ],
                [
                    'image' => 'imgs/aah.jpg',
                    'title' => 'ACTION AGAINST HUNGER',
                    'description' => 'Collaboration meeting with the Country Director of Action Against Hunger, Ms. Ritah Kabanyoro at the Head office in Ntinda - Nakawa Division- Kampala District.',
                ],
                [
                    'image' => 'imgs/iwj.jpg',
                    'title' => 'INTERNATIONAL ASSOCIATION OF WOMEN JUDGES',
                    'description' => 'Courtesy call by the FLN president to the president of the International Association of women judges Hon. Lady Justice Elizabeth Jane Alvidza. The purpose of these meetings was to introduce the FLN and streamline areas of collaboration with the International Association of Women Judges.',
                ],
                [
                    'image' => 'imgs/eals.jpg',
                    'title' => 'EAST AFRICAN LAW SOCIETY',
                    'description' => 'The FLN CEO (4th from right) with a team from the East Africa Law Society (EALS) and the Uganda Law Society (ULS) at the EALS multi-stakeholder meeting on the role and place of Civil Society in advancing good governance and accountability in Uganda held on 20th April 2023, at Mestil Hotel, Nsambya.',
                ],
                [
                    'image' => 'imgs/PHOTO-2023-12-29-20-24-21 (2).jpg',
                    'title' => 'MINISTRY OF LOCAL GOVERNMENT',
                    'description' => '',
                ],
                [
                    'image' => 'imgs/dn1.jpg',
                    'title' => 'FLN DISTINGUISHED DINNER',
                    'description' => '',
                ],
                [
                    'image' => 'imgs/dn2.jpg',
                    'title' => 'FLN DISTINGUISHED DINNER',
                    'description' => '',
                ],
                [
                    'image' => 'imgs/dn3.jpg',
                    'title' => 'FLN DISTINGUISHED DINNER',
                    'description' => '',
                ],
                [
                    'image' => 'imgs/JM.jpg',
                    'title' => 'JURAL MEDIA',
                    'description' => 'The FLN entered into a collaboration with Jural Media, a virtual media house whose mandate is to help people and organisations harness the power of technology. The purpose of this collaboration was to promote knowledge sharing, professional development and networking opportunities for female lawyers through the platform.',
                ],
                [
                    'image' => 'imgs/gl.jpg',
                    'title' => 'FLN GRAND LAUNCH',
                    'description' => 'The FLN Grand Launch of the 5-year Strategic plan at Hotel Africana.',
                ],
                [
                    'image' => 'imgs/gl2.jpg',
                    'title' => 'FLN GRAND LAUNCH',
                    'description' => '',
                ],
                [
                    'image' => 'imgs/patronmeet.jpg',
                    'title' => 'PATRON MEET',
                    'description' => 'Meeting with the Patron Rt. Hon. Rebecca Alitwala Kadaga.',
                ],
                [
                    'image' => 'imgs/pds.jpg',
                    'title' => 'PERSONAL DEVELOPMENT SEMINAR',
                    'description' => 'Personal Development Seminar by Mandela Group to the members of the Female Lawyers’ Network.',
                ],
            ];

            // Loop through the image items and generate HTML
            foreach ($image_items as $item) {
                echo '<div class="grid-item">';
                echo '<img src="' . $item['image'] . '" alt="' . $item['title'] . '">';
                echo '<div class="for_padding">';
                echo '<h2>' . $item['title'] . '</h2>';
                echo '<p>' . $item['description'] . '</p>';
                echo '</div>';
                // Add a ribbon with a keyword from the title
                $keyword = explode(' ', $item['title'])[0]; // Take the first word from the title
                echo '<div class="ribbon">' . strtoupper($keyword) . '</div>';
                echo '</div>'; // Close grid-item
            }
            ?>
        </div>
    </div>
</section>

<?php
include('footer.php');
?>