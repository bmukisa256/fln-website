<!-- header.php -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Female Lawyers Network</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/styles.css" />
</head>

<body>
    <header>
        <!-- Top Contact Bar -->
        <div class="container py-2 d-none d-md-block">
            <div class="row">
                <div class="col-md-6 col-sm-12 text-start">
                    <p class="mb-0">
                        <i class="bi bi-telephone-fill"></i>
                        <a href="tel:+256755999544" class="text-decoration-none text-dark">+256 755999544</a>
                    </p>
                </div>
                <div class="col-md-6 col-sm-12 text-end">
                    <p class="mb-0">
                        <i class="bi bi-envelope-fill"></i>
                        <a href="mailto:femalelawyersnetwork@gmail.com"
                            class="text-decoration-none text-dark">femalelawyersnetwork@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>

        <!-- Navbar -->
        <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a href="index.php" class="navbar-brand logo">F L N</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                    aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarContent">
                    <ul class="navbar-nav ms-auto nav-links">
                        <li class="nav-item">
                            <a href="index.php" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="about.php" class="nav-link">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a href="events.php" class="nav-link">Events</a>
                        </li>
                        <li class="nav-item">
                            <a href="news.php" class="nav-link">News</a>
                        </li>
                        <li class="nav-item">
                            <a href="pictorial.php" class="nav-link">Pictorial</a>
                        </li>
                        <li class="nav-item">
                            <a href="contact.php" class="nav-link">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Mobile Sidebar -->
        <div id="mobileSidebar" class="mobile-sidebar">
            <div class="sidebar-content">
                <button id="closeSidebar" class="btn btn-danger mb-3">Close</button>
                <ul class="sidebar-links">
                    <li><a href="index.php">Home</a></li>
                    <li><a href="about.php">About Us</a></li>
                    <li><a href="events.php">Events</a></li>
                    <li><a href="news.php">News</a></li>
                    <li><a href="pictorial.php">Pictorial</a></li>
                    <li><a href="contact.php">Contact Us</a></li>
                </ul>
            </div>
        </div>
        <!-- Mobile Nav Toggle Button -->
        <button id="mobileNavToggle" class="mobile-nav-toggle"><i class="bi bi-list"></i></button>
    </header>