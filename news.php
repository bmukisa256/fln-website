<?php include('header.php'); ?>

<style>
    .latest_news {
        padding: 50px 0;
        background-color: #f8f9fa;
        /* Light background color */
    }

    .latest_news h2 {
        text-align: center;
        margin-bottom: 30px;
        font-size: 2.5rem;
        color: #4338CA;
        /* Primary color */
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .latest_news .single_news {
        position: relative;
        /* Position relative for the ribbon */
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        margin-bottom: 30px;
        /* Spacing between cards */
    }

    .latest_news .single_news:hover {
        transform: translateY(-5px);
        /* Lift effect on hover */
        box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
        /* Enhanced shadow on hover */
    }

    .latest_news img {
        width: 100%;
        height: 200px;
        /* Fixed height for uniformity */
        object-fit: cover;
        /* Ensures images are uniform and cropped */
        border-bottom: 5px solid #06B6D4;
        /* Color for the bottom border */
    }

    .latest_news .texts {
        padding: 20px;
        text-align: center;
        background-color: #ffffff;
        /* White background for text section */
        position: relative;
        /* Needed for absolute positioning of text */
        z-index: 1;
        /* Ensure text is on top of background */
    }

    .latest_news .date {
        font-size: 14px;
        color: #888;
        /* Grey color for date */
        margin-bottom: 10px;
    }

    .latest_news h3 {
        font-size: 1.5rem;
        margin: 0;
        color: #333;
        /* Darker text color for headlines */
        font-weight: bold;
        line-height: 1.4;
        /* Better spacing between lines */
    }

    .ribbon {
        position: absolute;
        top: 15px;
        right: -20px;
        background-color: #F43F5E;
        /* Ribbon color */
        color: white;
        padding: 10px 15px;
        transform: rotate(45deg);
        font-size: 0.8rem;
        white-space: nowrap;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        /* Shadow for ribbon */
    }

    /* Additional Styling for Responsive Design */
    @media (max-width: 768px) {
        .latest_news h2 {
            font-size: 2rem;
            /* Smaller heading on mobile */
        }

        .latest_news .single_news {
            margin-bottom: 20px;
            /* Reduced margin on mobile */
        }

        .latest_news img {
            height: 150px;
            /* Smaller image height on mobile */
        }

        .latest_news h3 {
            font-size: 1.3rem;
            /* Smaller title on mobile */
        }
    }
</style>

<section class="latest_news">
    <div class="container">
        <h2 style="color: black; text-align: center; font-size: 24px;">
            NEWS <i class="fa fa-newspaper" aria-hidden="true"></i>
        </h2>


        <div class="row">
            <?php
            // Example array of news articles
            $news_items = [
                [
                    'date' => 'January 1, 2023',
                    'title' => 'FLN DISTINGUISHED DINNER SPONSORS',
                    'image' => 'imgs/dinnersponsors.jpg',
                ],
                [
                    'date' => 'January 5, 2023',
                    'title' => 'FOUNDER/PRESIDENT BIO',
                    'image' => 'imgs/PHOTO-2023-12-29-20-28-10.jpg',
                ],
                [
                    'date' => 'January 10, 2023',
                    'title' => 'OUR SOCIALS',
                    'image' => 'imgs/WhatsApp Image 2023-01-04 at 14.01.56.jpeg',
                ],
                [
                    'date' => 'September 15, 2024',
                    'title' => 'SENSITIZATION AND AWARENESS ON CLIMATE CHANGE',
                    'image' => 'imgs/climate_change.jpeg',
                ],
            ];

            foreach ($news_items as $news) {
            ?>
                <div class="col-md-4 mb-4">
                    <div class="single_news">
                        <div class="ribbon">New</div>
                        <img src="<?php echo $news['image']; ?>" alt="">
                        <div class="texts">
                            <p class="date"><a href="#"><?php echo $news['date']; ?></a></p>
                            <h3><?php echo $news['title']; ?></h3>
                        </div>
                    </div>
                </div>
            <?php
            }
            ?>
        </div>
    </div>
</section>

<?php include('footer.php'); ?>