-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 07, 2026 at 08:00 PM
-- Server version: 11.8.3-MariaDB-log
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u508604795_subscribers`
--

-- --------------------------------------------------------

--
-- Table structure for table `campaigns`
--

CREATE TABLE `campaigns` (
  `id` int(11) NOT NULL,
  `subject` varchar(500) NOT NULL,
  `content` text NOT NULL,
  `sent_at` timestamp NULL DEFAULT current_timestamp(),
  `recipient_count` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `campaigns`
--

INSERT INTO `campaigns` (`id`, `subject`, `content`, `sent_at`, `recipient_count`, `created_at`) VALUES
(1, 'Welcome to our Newsletter!', 'Thank you for subscribing to our newsletter. Stay tuned for amazing content!', '2025-10-07 11:28:24', 2, '2025-10-07 11:28:24'),
(2, 'Monthly Update - October 2024', 'Here are the latest updates from our team this month...', '2025-10-07 11:28:24', 2, '2025-10-07 11:28:24'),
(3, 'Weekly Newsletter - October 21, 2025', 'Dear Subscriber,\r\n\r\nWelcome to our weekly newsletter! Here\'s what\'s happening this week:\r\n\r\n## Featured Article\r\n[Write your main article or announcement here]\r\n\r\n## Quick Updates\r\n• Update 1: Brief description\r\n• Update 2: Brief description  \r\n• Update 3: Brief description\r\n\r\n## Upcoming Events\r\n📅 Event Name - Date & Time\r\n📅 Event Name - Date & Time\r\n\r\nWe hope you find this content valuable. Don\'t forget to follow us on social media!\r\n\r\nBest regards,\r\nThe Newsletter Team', '2025-10-21 09:25:24', 0, '2025-10-21 09:25:24'),
(4, 'Weekly Newsletter - October 7, 2025', 'hello', '2025-10-21 09:27:08', 0, '2025-10-21 09:27:08'),
(5, 'Helo, there', 'Hi', '2025-10-21 14:51:03', 3, '2025-10-21 14:51:03');

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subscribed_at` timestamp NULL DEFAULT current_timestamp(),
  `status` enum('active','unsubscribed') DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscribers`
--

INSERT INTO `subscribers` (`id`, `email`, `subscribed_at`, `status`, `created_at`, `updated_at`) VALUES
(1, 'john@example.com', '2025-10-07 11:28:24', 'active', '2025-10-07 11:28:24', '2025-10-07 11:28:24'),
(2, 'jane@example.com', '2025-10-07 11:28:24', 'active', '2025-10-07 11:28:24', '2025-10-07 11:28:24'),
(10, 'ateraxantonio@gmail.com', '2025-10-21 14:50:23', 'active', '2025-10-21 14:50:23', '2025-10-21 14:50:23'),
(11, 'jakavoxuxig223@gmail.com', '2025-10-22 22:58:20', 'active', '2025-10-22 22:58:20', '2025-10-22 22:58:20'),
(12, 'acuzelahu814@gmail.com', '2025-10-25 07:11:59', 'active', '2025-10-25 07:11:59', '2025-10-25 07:11:59'),
(13, 'zedekiwall8582@gmail.com', '2025-10-25 08:05:17', 'active', '2025-10-25 08:05:17', '2025-10-25 08:05:17'),
(14, 'johnsvolker2001@gmail.com', '2025-10-27 09:22:14', 'active', '2025-10-27 09:22:14', '2025-10-27 09:22:14'),
(15, 'diggorihhu@gmail.com', '2025-10-31 18:37:36', 'active', '2025-10-31 18:37:36', '2025-10-31 18:37:36'),
(16, 'tezepewu93@gmail.com', '2025-11-02 10:28:27', 'active', '2025-11-02 10:28:27', '2025-11-02 10:28:27'),
(17, 'azuladiqed294@gmail.com', '2025-11-10 16:25:37', 'active', '2025-11-10 16:25:37', '2025-11-10 16:25:37'),
(18, 'uviwaxaloq351@gmail.com', '2025-11-18 00:55:58', 'active', '2025-11-18 00:55:58', '2025-11-18 00:55:58'),
(19, 'murupopax79@gmail.com', '2025-11-28 02:35:08', 'active', '2025-11-28 02:35:08', '2025-11-28 02:35:08'),
(20, 'paqawuwode717@gmail.com', '2025-11-28 03:34:09', 'active', '2025-11-28 03:34:09', '2025-11-28 03:34:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `campaigns`
--
ALTER TABLE `campaigns`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_campaigns_sent_at` (`sent_at`);

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `idx_subscribers_email` (`email`),
  ADD KEY `idx_subscribers_status` (`status`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `campaigns`
--
ALTER TABLE `campaigns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
