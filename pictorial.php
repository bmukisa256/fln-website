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
                    ['image' => 'imgs/nk7.jpg', 'title' => 'NKUMBA UNIVERSITY', 'description' => 'The Female Lawyers\' Network has this year been able to launch a club in Nkumba University', 'category' => 'events'],
                    ['image' => 'imgs/bs2.jpg', 'title' => 'BISHOP STUART UNIVERSITY-MBARARA', 'description' => 'The Female Lawyers\' Network has this year been able to launch a club in Bishop Stuart University', 'category' => 'events'],
                    ['image' => 'imgs/kc2.jpg', 'title' => 'KING CEASOR UNIVERSITY-GABA', 'description' => 'The Female Lawyers\' Network has this year been able to launch a club in King Ceasor University', 'category' => 'events'],
                    ['image' => 'imgs/iuiu.jpg', 'title' => 'ISLAMIC UNIVERSITY IN UGANDA', 'description' => 'Law School End of year Dinner and Handover Ceremony at IUIU Female Campus Kabojja-2023', 'category' => 'events'],
                    ['image' => 'imgs/ist.jpg', 'title' => 'INSTITUTE FOR SOCIAL TRANSFORMATION', 'description' => 'The FLN CEO (right) and the Executive Coordinator, (left) after a fruitful discussion with the IST Executive Director, Maureen Wagubi.', 'category' => 'conferences'],
                    ['image' => 'imgs/nm.jpg', 'title' => 'NATIONAL MARKET WOMEN ENTREPRENEURS\' SYMPOSIUM', 'description' => 'The FLN President and CEO attend the 5th Annual National Market Women Entrepreneurs\' Symposium.', 'category' => 'events'],
                    ['image' => 'imgs/csr.jpg', 'title' => 'CORPORATE SOCIAL RESPONSIBILITY', 'description' => 'The female lawyers\' Network carried out Corporate Social Responsibility (CSR) at Katalemwa Cheshire.', 'category' => 'events'],
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
                    ['image' => 'imgs/IMG-20250616-WA0064.jpg', 'title' => 'FLN President at Blessed Parents\' School about Climate change', 'description' => 'FLN empowers young girls in climate justice.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250616-WA0061.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250616-WA0063.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250616-WA0068.jpg', 'title' => 'Blessed Parents\' School', 'description' => 'Climate justice is not just about protecting the environment — it is about protecting people, especially women and girls, who are often the most affected by climate crises.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250619-WA0027.jpg', 'title' => 'International Biometrics Society Conference at Global Hotel.', 'description' => 'Mentorship equips them to not only understand the complex intersections between gender and climate change, but also to become agents of change in their communities.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250619-WA0026.jpg', 'title' => '', 'description' => 'Women and girls are among the most affected by climate change due to existing social, economic, and cultural inequalities.', 'category' => 'conferences'],
                    ['image' => 'imgs/IMG-20250618-WA0045.jpg', 'title' => '', 'description' => 'FLN President Mentors Women on Climate Justice 16th June 2025 as part of the Conference organised by the ', 'category' => 'conferences'],
                    ['image' => 'imgs/IMG-20250618-WA0041.jpg', 'title' => '', 'description' => '', 'category' => 'conferences'],
                    ['image' => 'imgs/IMG-20250618-WA0042.jpg', 'title' => '', 'description' => '', 'category' => 'conferences'],
                    ['image' => 'imgs/IMG-20250619-WA0022.jpg', 'title' => '', 'description' => '', 'category' => 'conferences'],
                    ['image' => 'imgs/IMG-20250619-WA0048.jpg', 'title' => 'FLN Climate change activities sponsored by Global fund for women', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250619-WA0039.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250619-WA0038.jpg', 'title' => '', 'description' => 'The purpose of mentoring women and girls on climate justice is to empower them with confidence, and leadership skills to actively participate in equitable responses to the climate crisis.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250619-WA0035.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250619-WA0029.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250619-WA0030.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250619-WA0031.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250620-WA0004.jpg', 'title' => 'Victory Senior Secondary School', 'description' => 'The fight for climate justice will not be won without the full participation of girls.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250619-WA0070.jpg', 'title' => '', 'description' => 'They are not just part of the future — they are central to today\'s solutions.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250619-WA0071.jpg', 'title' => '', 'description' => 'By empowering girls, we do not only advance gender equality, we unlock a generation of resilient leaders who will defend our planet with courage, knowledge, and hope.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250619-WA0062.jpg', 'title' => '', 'description' => 'Let us raise empowered girls for a just and sustainable world.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250619-WA0079.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250620-WA0005.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250620-WA0010.jpg', 'title' => '', 'description' => 'The time to act is now.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250620-WA0018.jpg', 'title' => 'Buganda Road Primary School', 'description' => 'Invest in girls\' education, especially climate literacy and green skills.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250620-WA0023.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250620-WA0019.jpg', 'title' => '', 'description' => 'Promote inclusive policies that recognize the gender-climate connection.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250620-WA0021.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250620-WA0024.jpg', 'title' => '', 'description' => 'Provide leadership opportunities and safe platforms for girls to participate in decision-making.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250620-WA0035.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250620-WA0025.jpg', 'title' => '', 'description' => 'Protect girls from gender-based violence exacerbated by climate crises.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250620-WA0038.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250621-WA0002.jpg', 'title' => 'Mpererewe Local Communities', 'description' => 'FLN is passionate about building climate change resilience in schools which is crucial to ensure that students, staff, and infrastructure can withstand and adapt to the impacts of climate change', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250621-WA0005.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250621-WA0004.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250621-WA0007.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250621-WA0008.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250621-WA0012.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250621-WA0006.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250621-WA0001.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250624-WA0024.jpg', 'title' => '', 'description' => 'Mentoring women and girls for climate justice is not just about equity it is about survival.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250624-WA0019.jpg', 'title' => '', 'description' => 'Their leadership, knowledge, and resilience are critical to building a sustainable future.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250624-WA0021.jpg', 'title' => '', 'description' => 'By investing in mentorship, we unlock the full potential of half the world population to drive transformative change.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250624-WA0028.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250624-WA0027.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250624-WA0026.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250624-WA0020.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250628-WA0032.jpg', 'title' => '', 'description' => 'FLN as part of climate action agenda trains, encourages and supports women and girls in local markets to lead tree planting efforts.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250628-WA0034.jpg', 'title' => '', 'description' => 'FLN supporting such involvement means providing access to information, mentoring, training, and supporting women-led climate initiatives.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250628-WA0025.jpg', 'title' => '', 'description' => 'This helps to dismantle these barriers. It signals a shift towards inclusive climate solutions where gender equality is integrated into environmental policy and practice.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250628-WA0022.jpg', 'title' => '', 'description' => 'It also means recognizing and valuing indigenous and local knowledge held by women about plant species, forest ecosystems, and traditional conservation methods.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250628-WA0024.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250628-WA0029.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250628-WA0035.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250628-WA0032.jpg', 'title' => '', 'description' => '', 'category' => 'events'],

                    ['image' => 'imgs/IMG-20250725-WA0024.jpg', 'title' => 'FLN Annual Corporate Social Responsibility', 'description' => 'FLN visited disabled children in a home in Mukono to give share with them love,goods and happiness.', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250725-WA0026.jpg', 'title' => '', 'description' => 'Elizabeth Home Mukono', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250725-WA0029.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250725-WA0031.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250725-WA0032.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250725-WA0048.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250725-WA0011.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0199.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0194.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0190.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0206.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0207.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0217.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0218.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0242.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0243.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0208.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0214.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0216.jpg', 'title' => '', 'description' => '', 'category' => 'events'],


                    ['image' => 'imgs/IMG-20250806-WA0014.jpg', 'title' => 'FLN at MTN women Work Event', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0015.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0019.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0021.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0020.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/fln_president_awarded.jpg', 'title' => 'FLN President awarded at MTN Women at the work event.', 'description' => 'MTN CEO Sylvia Mulinge', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0023.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0024.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0025.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0016.jpg', 'title' => '', 'description' => '', 'category' => 'events'],

                    ['image' => 'imgs/IMG-20250806-WA0043.jpg', 'title' => 'FLN President mentoring young Lawyers Network', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0045.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0044.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0047.jpg', 'title' => '', 'description' => '', 'category' => 'events'],

                    ['image' => 'imgs/IMG-20250806-WA0088.jpg', 'title' => 'HIGH SCHOOL CLIMATE CHANGE Trainings at stafford high school- Kiteezi.', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0089.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0096.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0093.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0092.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0090.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0085.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0087.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0086.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0078.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0079.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0081.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0071.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0072.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0074.jpg', 'title' => '', 'description' => '', 'category' => 'events'],

                    ['image' => 'imgs/IMG-20250806-WA0113.jpg', 'title' => 'FLN Corporate mentorship series at Deed Microfinance Ltd Ntinda', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0107.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0112.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0103.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0098.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0099.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0101.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0105.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0108.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0106.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0104.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                
                    ['image' => 'imgs/IMG-20250806-WA0140.jpg', 'title' => 'FLN Corporate mentorship series at MS muwema & Cos advocates', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0137.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0121.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0123.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0117.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0132.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0126.jpg', 'title' => '', 'description' => '', 'category' => 'events'],

                    ['image' => 'imgs/IMG-20250806-WA0154.jpg', 'title' => 'FLN Climate change activity at St.Balikudembe local market women Busega - at mount camel church', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0150.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0182.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0172.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0171.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0157.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0159.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0156.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0155.jpg', 'title' => '', 'description' => '', 'category' => 'events'],

                    ['image' => 'imgs/WhatsApp Image 2025-08-06 at 15.21.31_0a3fda11.jpg', 'title' => 'FLN President mentoring and motivating parents at Gayaza High School.', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/WhatsApp Image 2025-08-06 at 15.21.31_1185b52b.jpg', 'title' => '', 'description' => '', 'category' => 'events'],

                    ['image' => 'imgs/IMG-20250806-WA0062.jpg', 'title' => 'Climate change. Young female  lawyers talk on climate adaptation and role of youth in climate reduction.', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0056.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0060.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0063.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0054.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250806-WA0048.jpg', 'title' => '', 'description' => '', 'category' => 'events'],

                    ['image' => 'imgs/IMG-20250917-WA0105.jpg', 'title' => 'Owino Market, Kampala - Climate Change Session', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250917-WA0104.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250917-WA0103.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250917-WA0115.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250917-WA0111.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250917-WA0100.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250917-WA0095.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250917-WA0102.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250917-WA0096.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250917-WA0098.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                    ['image' => 'imgs/IMG-20250917-WA0101.jpg', 'title' => '', 'description' => '', 'category' => 'events'],
                   


                ];

                foreach ($gallery_items as $item) {
                    echo '<div class="gallery-item" data-category="' . htmlspecialchars($item['category']) . '" style="position: relative; overflow: hidden; border-radius: 10px; background: rgba(255, 255, 255, 0.15); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease, box-shadow 0.3s ease; height: 300px;">';

                    echo '    <img src="' . htmlspecialchars($item['image']) . '" alt="' . htmlspecialchars($item['title']) . '" class="img-fluid" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px; transition: transform 0.3s ease;">';

                    // Caption overlay that appears on hover
                    if (!empty($item['title']) || !empty($item['description'])) {
                        echo '    <div class="gallery-caption" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.8); color: white; padding: 1rem; opacity: 0; transition: opacity 0.3s ease; display: flex; flex-direction: column; justify-content: center; text-align: center; border-radius: 10px;">';

                        if (!empty($item['title'])) {
                            echo '        <h5 style="font-size: 1.2rem; margin-bottom: 0.5rem; font-weight: bold; color: white;">' . htmlspecialchars($item['title']) . '</h5>';
                        }
                        if (!empty($item['description'])) {
                            echo '        <p style="font-size: 0.9rem; margin: 0; line-height: 1.4; color: white;">' . htmlspecialchars($item['description']) . '</p>';
                        }

                        echo '    </div>';
                    } else {
                        // For items without title/description, show a simple overlay
                        echo '    <div class="gallery-caption" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.6); color: white; padding: 1rem; opacity: 0; transition: opacity 0.3s ease; display: flex; align-items: center; justify-content: center; text-align: center; border-radius: 10px;">';
                        echo '        <p style="font-size: 0.9rem; margin: 0; color: white; font-style: italic;">FLN Event Gallery</p>';
                        echo '    </div>';
                    }

                    echo '</div>';
                }
                ?>
            </div>
        </div>
    </section>
</main>

<script>
// Add hover effects for overlay captions
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const caption = item.querySelector('.gallery-caption');
        const img = item.querySelector('img');

        if (caption) {
            item.addEventListener('mouseenter', function() {
                caption.style.opacity = '1';
                img.style.transform = 'scale(1.05)';
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            });

            item.addEventListener('mouseleave', function() {
                caption.style.opacity = '0';
                img.style.transform = 'scale(1)';
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            });
        }
    });
});
</script>

<?php
include('footer.php');
?>