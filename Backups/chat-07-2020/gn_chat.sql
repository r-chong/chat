-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2020 at 07:00 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gn_chat`
--

-- --------------------------------------------------------

--
-- Table structure for table `chatlog`
--

CREATE TABLE `chatlog` (
  `id` int(11) NOT NULL,
  `date` varchar(25) NOT NULL DEFAULT current_timestamp(),
  `chatstring` varchar(500) NOT NULL,
  `note` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chatlog`
--

INSERT INTO `chatlog` (`id`, `date`, `chatstring`, `note`) VALUES
(1, '2020-07-19 12:48:34', '[admin]: it would help to have at least one entry', '0'),
(2, '2020-07-19 23:40:51', '', '0'),
(3, '2020-07-19 23:41:03', '', '0'),
(4, '2020-07-19 23:42:24', '', '0'),
(5, '2020-07-19 23:43:08', '', '0'),
(6, '2020-07-19 23:51:38', 'chatstring', '0'),
(7, '2020-07-19 23:51:40', 'chatstring', '0'),
(8, '2020-07-19 23:52:23', 'chatstring', 'test'),
(9, '2020-07-19 23:52:52', 'chatstring', 'test'),
(10, '2020-07-19 23:53:01', '[Reese]: dfds', 'test'),
(11, '2020-07-19 23:53:21', '[Reese]: dfds', 'test'),
(12, '2020-07-19 23:53:30', '[Reese]: dfds', ''),
(13, '2020-07-19 23:56:09', '[Reese]: dfds', ''),
(14, '2020-07-19 23:56:25', '[Reese]: dfds', ''),
(15, '2020-07-19 23:57:05', '[Reese]: dfds', ''),
(16, '2020-07-19 23:57:42', '[Reese]: dfds', ''),
(17, '2020-07-19 23:58:16', '[Reese]: dfds', ''),
(18, '2020-07-19 23:58:23', '[Reese]: dfds', ''),
(19, '2020-07-19 23:58:37', '[Reese]: dfds', ''),
(20, '2020-07-19 23:59:48', '[Reese]: dfds', ''),
(21, '2020-07-20 00:00:16', '[Reese]: dfds', ''),
(22, '2020-07-20 00:01:18', '[Reese]: dfds', ''),
(23, '2020-07-20 00:01:49', '[Reese]: dfds', ''),
(24, '2020-07-20 00:02:32', '[Reese]: dfdsf', ''),
(25, '2020-07-22 20:02:40', '[Reese]: test', ''),
(26, '2020-07-22 20:02:51', '[Reese]: blah', ''),
(27, '2020-07-22 20:03:26', '[Reese]: dfds', ''),
(28, '2020-07-22 20:03:30', '[Reese]: dfds', ''),
(29, '2020-07-22 20:06:12', '[Reese]: bbbbb', ''),
(30, '2020-07-22 20:08:14', '[Reese]: dfds', ''),
(31, '2020-07-22 20:08:50', '[Reese]: dfds', ''),
(32, '2020-07-22 20:11:39', '[Reese]: dfds', ''),
(33, '2020-07-22 20:25:51', '[Reese]: dfds', ''),
(34, '2020-07-22 20:26:22', '[Reese]: dfds', ''),
(35, '2020-07-22 20:27:11', '[Reese]: dfds', ''),
(36, '2020-07-22 20:27:15', '[Reese]: dfds', ''),
(37, '2020-07-22 20:27:24', '[Reese]: dfds', ''),
(38, '2020-07-22 20:28:19', '[Reese]: dfds', ''),
(39, '2020-07-22 20:29:05', '[Reese]: dfds', ''),
(40, '2020-07-22 20:30:52', '[Reese]: dfds', ''),
(41, '2020-07-22 20:45:55', '[Reese]: test', ''),
(42, '2020-07-22 20:46:56', '[Reese]: hello', ''),
(43, '2020-07-22 20:47:02', '[Reese]: are you recording this?', ''),
(44, '2020-07-22 20:47:11', '[Reese]: hello?', ''),
(45, '2020-07-22 23:55:55', '[Reese]: hi', ''),
(46, '2020-07-22 23:56:22', '[Reese]: what happens if i type something', ''),
(47, '2020-07-22 23:59:01', '[Reese]: des this work', ''),
(48, '2020-07-22 23:59:09', '[Reese]: it seems like it does.', ''),
(49, '2020-07-22 23:59:26', '[Reese]: why won\'t it update? ', ''),
(50, '2020-07-23 00:00:29', '[Reese]: callback?', ''),
(51, '2020-07-23 00:00:34', '[Reese]: is this gonna work?', ''),
(52, '2020-07-23 00:00:39', '[Reese]: it works once', ''),
(53, '2020-07-23 00:00:45', '[Reese]: huh?', ''),
(54, '2020-07-23 00:01:01', '[Reese]: on refresh', ''),
(55, '2020-07-23 00:01:07', '[Reese]: it does not work', ''),
(56, '2020-07-23 00:01:13', '[Reese]: it is one line behind', ''),
(57, '2020-07-23 00:02:03', '[Reese]: if i type something', ''),
(58, '2020-07-23 00:02:09', '[Reese]: it works', ''),
(59, '2020-07-23 00:02:13', '[Reese]: if i don\'t referesh', ''),
(60, '2020-07-23 00:02:15', '[Reese]: it works', ''),
(61, '2020-07-23 00:02:19', '[Reese]: so refresh does somerhing', ''),
(62, '2020-07-23 00:02:22', '[Reese]: wait', ''),
(63, '2020-07-23 00:02:31', '[Reese]: hmm...', ''),
(64, '2020-07-23 00:02:42', '[Reese]: why is there a delay?', ''),
(65, '2020-07-23 00:02:47', '[Reese]: 1', ''),
(66, '2020-07-23 00:02:48', '[Reese]: 2', ''),
(67, '2020-07-23 00:04:28', '[Reese]: is', ''),
(68, '2020-07-23 00:04:29', '[Reese]: it', ''),
(69, '2020-07-23 00:04:31', '[Reese]: because', ''),
(70, '2020-07-23 00:04:33', '[Reese]: it ', ''),
(71, '2020-07-23 00:04:35', '[Reese]: is ', ''),
(72, '2020-07-23 00:04:36', '[Reese]: too ', ''),
(73, '2020-07-23 00:04:38', '[Reese]: fast?', ''),
(74, '2020-07-23 00:04:39', '[Reese]: but', ''),
(75, '2020-07-23 00:04:42', '[Reese]: but', ''),
(76, '2020-07-23 00:05:58', '[Reese]: :)', ''),
(77, '2020-07-23 00:06:04', '[Reese]: why did that not appear?', ''),
(78, '2020-07-23 00:07:14', '[Reese]: moved', ''),
(79, '2020-07-23 00:07:16', '[Reese]: the', ''),
(80, '2020-07-23 00:07:20', '[Reese]: onsuccess', ''),
(81, '2020-07-23 00:07:22', '[Reese]: to within', ''),
(82, '2020-07-23 00:07:24', '[Reese]: the', ''),
(83, '2020-07-23 00:07:41', '[Reese]: onreadystate', ''),
(84, '2020-07-23 00:07:44', '[Reese]: onsuccess', ''),
(85, '2020-07-23 00:07:47', '[Reese]: function', ''),
(86, '2020-07-23 00:07:56', '[Reese]: this seems to ahve fixed the issue of missing lines', ''),
(87, '2020-07-23 00:08:17', '[Reese]: it\'s a tad slower BECAUSE it waits for the function to complete before retreiving the new text', ''),
(88, '2020-07-23 00:08:43', '[Reese]: will have to do something about this text box if i type past the field i cannot see what i am typeing... oh, it goes behind the submit button.', ''),
(89, '2020-07-23 00:09:36', '[Reese]: what needs to be done now?', ''),
(90, '2020-07-23 00:09:42', '[Reese]: will need to integrate users', ''),
(91, '2020-07-23 00:09:48', '[Reese]: probably an api key for each user', ''),
(92, '2020-07-23 00:11:00', '[Reese]: does the dev side see all the lines?', ''),
(93, '2020-07-23 00:11:16', '[Reese]: looks liek it just gets the python array', ''),
(94, '2020-07-23 00:11:30', '[Reese]: oh, the submit is ok with the dev tools turned off', ''),
(95, '2020-07-23 00:22:36', '[Reese]: apikey', ''),
(96, '2020-07-23 00:22:40', '[Reese]: is working!', ''),
(97, '2020-07-23 00:22:50', '[Reese]: now need to set it on login', ''),
(98, '2020-07-23 00:24:08', '[username]: test', ''),
(99, '2020-07-23 00:24:38', '[Pixel]: who am i?', ''),
(100, '2020-07-23 00:24:42', '[Pixel]: is anyone on?', ''),
(101, '2020-07-23 00:25:17', '[Pixel]: ok, ttyl', ''),
(102, '2020-07-23 08:28:48', '[Pixel]: sadf', ''),
(103, '2020-07-23 08:32:10', '[Pixel]: test', ''),
(104, '2020-07-25 21:30:21', '[Pixel]: does this still work', ''),
(105, '2020-07-25 22:10:15', '[Pixel]: hello', ''),
(106, '2020-07-26 12:02:52', '[Pixel]: test', ''),
(107, '2020-07-26 12:10:50', '[Pixel]: hello everyone', ''),
(108, '2020-07-26 12:10:53', '[Pixel]: this', ''),
(109, '2020-07-26 12:10:53', '[Pixel]: is', ''),
(110, '2020-07-26 12:10:55', '[Pixel]: Master', ''),
(111, '2020-07-26 12:10:56', '[Pixel]: Notes', ''),
(112, '2020-07-26 12:10:58', '[Pixel]: Collaboration', ''),
(113, '2020-07-26 12:10:59', '[Pixel]: Version', ''),
(114, '2020-07-26 12:11:01', '[Pixel]: 11', ''),
(115, '2020-07-26 12:13:22', '[Pixel]: hello', ''),
(116, '2020-07-26 12:13:27', '[Pixel]: this', ''),
(117, '2020-07-26 12:13:27', '[Pixel]: is', ''),
(118, '2020-07-26 12:13:29', '[Pixel]: master', ''),
(119, '2020-07-26 12:13:31', '[Pixel]: notes collaboration', ''),
(120, '2020-07-26 12:13:32', '[Pixel]: v11', ''),
(121, '2020-07-26 12:13:33', '[Pixel]: test', ''),
(122, '2020-07-26 12:13:36', '[Pixel]: take 2', ''),
(123, '2020-07-26 13:59:00', '[Pixel]: Hi', ''),
(124, '2020-07-26 22:37:40', 'this is a test', ''),
(125, '2020-07-26 22:37:50', '[Pixel]: test', ''),
(126, '2020-07-26 22:37:59', '[Pixel]: did this save?', ''),
(127, '2020-07-26 22:39:10', 'this is a test', ''),
(128, '2020-07-26 22:39:21', '[Pixel]: where is user?', ''),
(129, '2020-07-26 22:39:29', '[Pixel]: dsdf', ''),
(130, '2020-07-26 22:39:34', '[Pixel]: ok, seems better', ''),
(131, '2020-07-26 22:39:52', 'this is a test', ''),
(132, '2020-07-26 22:40:07', 'this is a test', ''),
(133, '2020-07-26 22:40:25', 'this is a test', ''),
(134, '2020-07-26 22:40:41', 'this is a test', ''),
(135, '2020-07-26 22:40:49', 'this is a test', ''),
(136, '2020-07-26 22:41:09', '[Pixel]: oh, is it the rfereshing causing the issue?', ''),
(137, '2020-07-26 22:41:12', '[Pixel]: i think so', ''),
(138, '2020-07-26 22:41:34', '[Pixel]: cleaning up the log', ''),
(139, '2020-07-26 22:42:02', 'this is a test', ''),
(140, '2020-07-26 22:42:21', '[Pixel]: why does it say this is a test when i referesh?', ''),
(141, '2020-07-26 22:42:23', 'this is a test', ''),
(142, '2020-07-26 22:43:11', 'this is a test', ''),
(143, '2020-07-26 22:43:18', 'this is a test', ''),
(144, '2020-07-26 22:44:09', '[Pixel]: figured it out', ''),
(145, '2020-07-28 22:03:16', '[reese]: aaa', ''),
(146, '2020-07-28 22:03:20', '[reese]: therr you go!', ''),
(147, '2020-07-28 22:03:24', '[reese]: seems to be working!', ''),
(148, '2020-07-28 22:03:32', '[reese]: nice job!', ''),
(149, '2020-07-28 22:04:23', '[reese]: what happens', ''),
(150, '2020-07-28 22:04:28', '[reese]: when you add to the bottom?', ''),
(151, '2020-07-28 22:04:33', '[reese]: It just keeps going!', ''),
(152, '2020-07-28 22:12:15', '[reese]: date format has now changed', ''),
(153, '2020-07-28 22:12:19', '[reese]: how is that?', ''),
(154, '2020-07-28 22:12:23', '[reese]: looks good!', ''),
(155, '2020-07-28 22:16:33', '[reese]: nice! I logged in!', ''),
(156, '2020-07-28 22:21:58', '[reese]: how\'z this?', ''),
(157, '2020-07-28 22:22:01', '[reese]: nice!', ''),
(158, '2020-07-28 22:30:09', '[mo]: what if i type something', ''),
(159, '2020-07-28 22:30:44', '[reese]: hey mo, what are you doing?', ''),
(160, '2020-07-28 22:30:53', '[mo]: nothing much', ''),
(161, '2020-07-28 22:30:58', '[mo]: just typing some code', ''),
(162, '2020-07-28 22:31:04', '[reese]: cool!', ''),
(163, '2020-07-28 22:34:51', '[reese]: anyone up?', ''),
(164, '2020-07-28 22:35:00', '[reese]: what if i type here?', ''),
(165, '2020-07-28 22:35:43', '[reese]: what ahhp', ''),
(166, '2020-07-29 08:22:16', '[reese]: asfda', ''),
(167, '2020-07-29 08:23:01', '[reese]: asfd', ''),
(168, '2020-07-29 12:30:00', '[reese]: Typing this on mobile', ''),
(169, '2020-07-29 12:30:09', '[reese]: Can', ''),
(170, '2020-07-29 12:30:11', '[reese]: You', ''),
(171, '2020-07-29 12:30:13', '[reese]: Read', ''),
(172, '2020-07-29 12:30:15', '[reese]: This', ''),
(173, '2020-07-29 12:30:25', '[reese]: that\'s cool!', ''),
(174, '2020-07-29 12:47:04', '[reese]: typing work', ''),
(175, '2020-07-29 12:47:38', '[reese]: Fhnjyfc', ''),
(176, '2020-07-29 12:47:41', '[reese]: sda', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chatlog`
--
ALTER TABLE `chatlog`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chatlog`
--
ALTER TABLE `chatlog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=177;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
