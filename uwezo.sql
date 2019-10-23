-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               10.4.6-MariaDB-1:10.4.6+maria~bionic - mariadb.org binary distribution
-- Server OS:                    debian-linux-gnu
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for uwezo
CREATE DATABASE IF NOT EXISTS `uwezo` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `uwezo`;

-- Dumping structure for table uwezo.client
CREATE TABLE IF NOT EXISTS `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_names` varchar(150) DEFAULT NULL,
  `passport` varchar(150) DEFAULT NULL,
  `phone` varchar(150) DEFAULT NULL,
  `nationality` varchar(150) DEFAULT NULL,
  `address` varchar(150) DEFAULT NULL,
  `town` varchar(150) DEFAULT NULL,
  `residence` varchar(150) DEFAULT NULL,
  `spouse` varchar(150) DEFAULT NULL,
  `spouseID` varchar(150) DEFAULT NULL,
  `spousePhone` varchar(150) DEFAULT NULL,
  `spouseNationality` varchar(150) DEFAULT NULL,
  `spouseAddress` varchar(150) DEFAULT NULL,
  `spouseTown` varchar(150) DEFAULT NULL,
  `spouseResidence` varchar(150) DEFAULT NULL,
  `branch` varchar(150) DEFAULT NULL,
  `centre` varchar(150) DEFAULT NULL,
  `creditOfficer` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- Dumping data for table uwezo.client: ~6 rows (approximately)
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
/*!40000 ALTER TABLE `client` ENABLE KEYS */;

-- Dumping structure for table uwezo.collateral
CREATE TABLE IF NOT EXISTS `collateral` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clientid` int(11) NOT NULL DEFAULT 0,
  `collateral` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '0' CHECK (json_valid(`collateral`)),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table uwezo.collateral: ~0 rows (approximately)
/*!40000 ALTER TABLE `collateral` DISABLE KEYS */;
/*!40000 ALTER TABLE `collateral` ENABLE KEYS */;

-- Dumping structure for table uwezo.delivery_point
CREATE TABLE IF NOT EXISTS `delivery_point` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL DEFAULT 0,
  `client_name` varchar(150) NOT NULL DEFAULT '0',
  `datesigned` varchar(150) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table uwezo.delivery_point: ~0 rows (approximately)
/*!40000 ALTER TABLE `delivery_point` DISABLE KEYS */;
/*!40000 ALTER TABLE `delivery_point` ENABLE KEYS */;

-- Dumping structure for table uwezo.loan_details
CREATE TABLE IF NOT EXISTS `loan_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clientId` int(11) NOT NULL DEFAULT 0,
  `loanAmount` varchar(50) NOT NULL DEFAULT '0',
  `loanTerm` varchar(50) NOT NULL DEFAULT '0',
  `interestRate` varchar(50) NOT NULL DEFAULT '0',
  `totalAmount` varchar(50) NOT NULL DEFAULT '0',
  `monthlyInstalments` varchar(50) NOT NULL DEFAULT '0',
  `gracePeriod` varchar(50) NOT NULL DEFAULT '0',
  `penaltyRate` varchar(50) NOT NULL DEFAULT '0',
  `charges` varchar(50) NOT NULL DEFAULT '0',
  `purpose` text NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table uwezo.loan_details: ~0 rows (approximately)
/*!40000 ALTER TABLE `loan_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `loan_details` ENABLE KEYS */;

-- Dumping structure for table uwezo.MyGuests
CREATE TABLE IF NOT EXISTS `MyGuests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(150) NOT NULL DEFAULT '0',
  `lastname` varchar(150) NOT NULL DEFAULT '0',
  `email` varchar(150) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table uwezo.MyGuests: ~2 rows (approximately)
/*!40000 ALTER TABLE `MyGuests` DISABLE KEYS */;
INSERT INTO `MyGuests` (`id`, `firstname`, `lastname`, `email`) VALUES
	(1, 'John', 'Doe', 'john@example.com'),
	(2, 'John', 'Doe', 'john@example.com');
/*!40000 ALTER TABLE `MyGuests` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
