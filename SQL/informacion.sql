-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 29-12-2020 a las 00:26:10
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `informacion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) DEFAULT NULL,
  `title` varchar(15) DEFAULT NULL,
  `description` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(15) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=40 ;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user`, `password`) VALUES
(18, 'ale', '40bd001563085fc35165329ea1ff5c5ecbdbbeef'),
(19, 'ale', '40bd001563085fc35165329ea1ff5c5ecbdbbeef'),
(20, 'ale', '40bd001563085fc35165329ea1ff5c5ecbdbbeef'),
(21, 'alejandro', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220'),
(22, 'ale', '8cb2237d0679ca88db6464eac60da96345513964'),
(23, 'ale', '3e7e5691f31305b5338cfc43bd374021dfd6cb85'),
(24, 'ale', '7c4a8d09ca3762af61e59520943dc26494f8941b'),
(25, 'ale', 'd003eb01f6492f7429e2599c4d7961514cde0ce1'),
(26, 'ale', 'd003eb01f6492f7429e2599c4d7961514cde0ce1'),
(27, 'ale', 'd003eb01f6492f7429e2599c4d7961514cde0ce1'),
(28, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709'),
(29, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709'),
(30, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709'),
(31, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709'),
(32, 'zeito', '46139b0b16d7696468a818ef81ab82a93691f7d5'),
(33, 'zeito', '46139b0b16d7696468a818ef81ab82a93691f7d5'),
(34, 'zeito', '1fe171f65917db0072abc6880196989dd2a20025'),
(35, 'zeito', '6c1fec6e0ddafbec450344c8d5a5281adf931711'),
(36, 'zeito', 'b49189e03f4a07760bf65c588490f373a91dfaeb'),
(37, 'zeito', '3fdb13677b10691debb3909dd917b00ee751115a'),
(38, 'zeito', '4cf997735475afd79f8711e22efaa9d306294785'),
(39, 'ale', '3fdb13677b10691debb3909dd917b00ee751115a');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
