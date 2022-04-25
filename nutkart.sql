-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: nutkart
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `name` varchar(100) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES ('pratik','9340427313','pratikbhagat2707@gmail.com','12345678'),('wolverine','9999999999','wolverine@gmail.com','98765432');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `username` varchar(100) DEFAULT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `product_price` int DEFAULT NULL,
  `img_src1` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES ('wolverine','happilo-mulberries',556,'images/happilo-mulberries.jpg'),('wolverine','happilo-mulberries',556,'images/happilo-mulberries.jpg'),('wolverine','happilo-pinenut',555,'images/happilo-pinenut.jpg'),('wolverine','happilo-pinenut',555,'images/happilo-pinenut.jpg');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `current_users`
--

DROP TABLE IF EXISTS `current_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `current_users` (
  `current_user` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `current_users`
--

LOCK TABLES `current_users` WRITE;
/*!40000 ALTER TABLE `current_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `current_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `username` varchar(100) DEFAULT NULL,
  `product_name` varchar(50) DEFAULT NULL,
  `bill_amount` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES ('wolverine','happilo-brazilnut',510),('wolverine','happilo-brazilnuthappilo-mulberries',1066),('wolverine','happilo-brazilnuthappilo-mulberries',1066),('wolverine','happilo-brazilnuthappilo-mulberries',1066),('wolverine','happilo-brazilnuthappilo-mulberries',1066),('wolverine','happilo-brazilnuthappilo-mulberries',1066),('wolverine','happilo-brazilnuthappilo-mulberries',1066),('wolverine','happilo-brazilnuthappilo-mulberries',1066);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_name` varchar(100) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `img_src1` varchar(200) DEFAULT NULL,
  `img_src2` varchar(200) DEFAULT NULL,
  `img_src3` varchar(200) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('happilo-pista',444,100,'images/happilo-pista.jpg','images/happilo-pista2.jpg','images/happilo-pista3.jpg','pista','happilo'),('happilo-gojiberries',525,100,'images/happilo-gojiberries.jpg','images/happilo-gojiberries2.jpg','images/happilo-gojiberries3.jpg','berries','happilo'),('happilo-ajwadates',382,100,'images/happilo-ajwadates.jpg','images/happilo-ajwadates2.jpg','images/happilo-ajwadates3.jpg','dates','happilo'),('happilo-blueberries',400,100,'images/happilo-blueberries.jpg','images/happilo-blueberries2.jpg','images/happilo-blueberries3.jpg','berries','happilo'),('happilo-brazilnut',510,100,'images/happilo-brazilnut.jpg','images/happilo-brazilnut2.jpg','images/happilo-brazilnut3.jpg','nuts','happilo'),('happilo-driedkiwi',313,100,'images/happilo-driedkiwi.jpg','images/happilo-driedkiwi2.jpg','images/happilo-driedkiwi3.jpg','fruits','happilo'),('happilo-driedmango',539,100,'images/happilo-driedmango.jpg','images/happilo-driedmango2.jpg','images/happilo-driedmango3.jpg','fruits','happilo'),('happilo-driedpineapple',369,100,'images/happilo-driedpineapple.jpg','images/happilo-driedpineapple2.jpg','images/happilo-driedpineapple3.jpg','fruits','happilo'),('happilo-goldendates',427,100,'images/happilo-goldendates.jpg','images/happilo-goldendates2.jpg','images/happilo-goldendates3.jpg','dates','happilo'),('happilo-hazelnut',542,100,'images/happilo-hazelnut.jpg','images/happilo-hazelnut2.jpg','images/happilo-hazelnut3.jpg','nuts','happilo'),('happilo-healthmix',322,100,'images/happilo-healthmix.jpg','images/happilo-healthmix2.jpg','images/happilo-healthmix3.jpg','mixture','happilo'),('happilo-mamralmond',426,100,'images/happilo-mamraalmond.jpg','images/happilo-mamraalmond2.jpg','images/happilo-mamraalmond3.jpg','almonds','happilo'),('happilo-medjoul',497,100,'images/happilo-medjoul.jpg','images/happilo-medjoul2.jpg','images/happilo-medjoul3.jpg','dates','happilo'),('happilo-mulberries',556,100,'images/happilo-mulberries.jpg','images/happilo-mulberries2.jpg','images/happilo-mulberries3.jpg','berries','happilo'),('happilo-pecannut',314,100,'images/happilo-pecannut.jpg','images/happilo-pecannut2.jpg','images/happilo-pecannut3.jpg','nuts','happilo'),('happilo-pinenut',555,100,'images/happilo-pinenut.jpg','images/happilo-pinenut2.jpg','images/happilo-pinenut3.jpg','nuts','happilo'),('happilo-strawberry',517,100,'images/happilo-strawberry.jpg','images/happilo-strawberry2.jpg','images/happilo-strawberry3.jpg','fruits','happilo'),('happilo-wholecranberries',386,100,'images/happilo-wholecranberries.jpg','images/happilo-wholecranberries2.jpg','images/happilo-wholecranberries3.jpg','berries','happilo'),('paperboat-absolutehealth',489,100,'images/paperboat-absolutehealth.jpg','images/paperboat-absolutehealth2.jpg','images/paperboat-absolutehealth3.jpg','mixture','paperboat'),('paperboat-almonds',383,100,'images/paperboat-almonds.jpg','images/paperboat-almonds2.jpg','images/paperboat-almonds3.jpg','almonds','paperboat'),('paperboat-cashews',325,100,'images/paperboat-cashews.jpg','images/paperboat-cashews2.jpg','images/paperboat-cashews3.jpg','cashews','paperboat'),('paperboat-chatpata',364,100,'images/paperboat-chatpata.jpg','images/paperboat-chatpata2.jpg','images/paperboat-chatpata3.jpg','mixture','paperboat'),('paperboat-garlicandherb',502,100,'images/paperboat-garlicandherb.jpg','images/paperboat-garlicandherb2.jpg','images/paperboat-garlicandherb3.jpg','mixture','paperboat'),('paperboat-proteincrunch',484,100,'images/paperboat-proteincrunch.jpg','images/paperboat-proteincrunch2.jpg','images/paperboat-proteincrunch3.jpg','mixture','paperboat'),('paperboat-smokedalmonds',454,100,'images/paperboat-smokedalmond.jpg','images/paperboat-smokedalmond2.jpg','images/paperboat-smokedalmond3.jpg','almonds','paperboat'),('nutty-mixedberries',375,100,'images/nutty-mixedberries.jpg','images/nutty-mixedberries2.jpg','images/nutty-mixedberries3.jpg','berries','nutty');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `sessionid` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`sessionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('rVSFsl1TxFfk4Vb2YU3n3pQM7SjJZeN4',1650913006,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isAuth\":false}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `mobile` varchar(12) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('wolverine','pratikbhagat4668@gmail.com','9340427313','12345678'),('pratham','pratham@gmail.com','8989989917','pratham123'),('madhur','madhur@gmail.com','8967452345','madhur123'),('kuber','kuber@gmail.com','7855567889','kuber123'),('nithin','nithin@gmail.com','7845454567','nithin123');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-26  0:35:20
