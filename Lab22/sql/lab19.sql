-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: coches
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `asigna`
--

DROP TABLE IF EXISTS `asigna`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asigna` (
  `username` varchar(255) NOT NULL,
  `idrol` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`username`,`idrol`),
  KEY `idrol` (`idrol`),
  CONSTRAINT `asigna_ibfk_1` FOREIGN KEY (`username`) REFERENCES `usuario` (`username`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `asigna_ibfk_2` FOREIGN KEY (`idrol`) REFERENCES `rol` (`idrol`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asigna`
--

LOCK TABLES `asigna` WRITE;
/*!40000 ALTER TABLE `asigna` DISABLE KEYS */;
INSERT INTO `asigna` VALUES ('asana',3,'2024-03-18 08:59:12'),('nico',1,'2024-03-18 07:18:52'),('val',3,'2024-03-18 23:57:55'),('vale',3,'2024-03-18 07:18:52');
/*!40000 ALTER TABLE `asigna` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coches`
--

DROP TABLE IF EXISTS `coches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coches` (
  `Marca` varchar(20) NOT NULL,
  `Modelo` varchar(20) NOT NULL,
  `Motor` varchar(20) NOT NULL,
  `Imagen` varchar(255) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coches`
--

LOCK TABLES `coches` WRITE;
/*!40000 ALTER TABLE `coches` DISABLE KEYS */;
INSERT INTO `coches` VALUES ('Ferrari','F40','V10','https://i.pinimg.com/originals/38/a0/b4/38a0b462ad646c7b1426b168101a5ca6.jpg',13),('Lamborghini','Aventador SVJ','V12','https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2018/10/volante-lamborghini-aventador-svj_5.jpg',15),('Porsche','911 GT3 RS','V16','https://wallpapersmug.com/download/1280x960/d85f54/porsche-911-gt3-rs-2019-cgi.jpg',16),('Ford','Mustang shelby 1967','V8','https://imagescdn.dealercarsearch.com/Media/14801/13834963/637154738629164880.jpg',17),('Ford','Ford Shelby Cobra','V8','https://img.favcars.com/shelby/cobra/shelby_cobra_1962_pictures_1.jpg',18),('Mercedes','BRABUS 900','x','https://www.brabus.com/_Resources/Persistent/3/6/f/5/36f5621b55b44ff3648314d6aeab49cd18b0d6ee/20210520_Brabus_Cannonball_event_3483-1170x780.jpg',19),('Nissan','GTR R34','I6 Biturbo','https://www.desktopbackground.org/download/1280x960/2010/11/02/105009_download-wallpapers-nissan-skyline-gtr-gt-r-r34-v-spec-2-nur_1980x1263_h.jpg',22),('Mazda','Cx-3','V4','https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/Mazda-CX-3-2019-C01.jpg',27),('aa','a','a','a',28);
/*!40000 ALTER TABLE `coches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posee`
--

DROP TABLE IF EXISTS `posee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posee` (
  `idrol` int NOT NULL,
  `idprivilegio` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idrol`,`idprivilegio`),
  KEY `idprivilegio` (`idprivilegio`),
  CONSTRAINT `posee_ibfk_1` FOREIGN KEY (`idrol`) REFERENCES `rol` (`idrol`),
  CONSTRAINT `posee_ibfk_2` FOREIGN KEY (`idprivilegio`) REFERENCES `privilegio` (`idprivilegio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posee`
--

LOCK TABLES `posee` WRITE;
/*!40000 ALTER TABLE `posee` DISABLE KEYS */;
INSERT INTO `posee` VALUES (1,1,'2024-03-18 07:14:38'),(1,2,'2024-03-18 07:14:38'),(1,3,'2024-03-19 01:11:47'),(1,4,'2024-03-19 01:11:47'),(3,2,'2024-03-18 07:14:38');
/*!40000 ALTER TABLE `posee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `privilegio`
--

DROP TABLE IF EXISTS `privilegio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `privilegio` (
  `idprivilegio` int NOT NULL,
  `permiso` varchar(40) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idprivilegio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `privilegio`
--

LOCK TABLES `privilegio` WRITE;
/*!40000 ALTER TABLE `privilegio` DISABLE KEYS */;
INSERT INTO `privilegio` VALUES (1,'crear_coche','2024-03-18 07:10:07'),(2,'ver_coches','2024-03-18 07:10:07'),(3,'admin_usuarios','2024-03-19 01:04:10'),(4,'editar_coches','2024-03-19 01:05:15');
/*!40000 ALTER TABLE `privilegio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `idrol` int NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idrol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'donhuayra','2024-03-18 07:11:52'),(2,'mecanico','2024-03-18 07:11:52'),(3,'chalan','2024-03-18 07:11:52');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `username` varchar(55) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('asana','asana asan asa','$2a$12$bOrAdZkCeTwPo6.AsD8iS.nCrZ4xZcJ/dMaEPKQx/Zudkxx.wXWoq'),('lakaka034','Temperatura','$2a$12$RVTxr2UW8W.tWKdE5YQJu.xFA/el7f.F6jEyh4kvMDlDss3vpCK9i'),('nico','Nicolas Hood Figueroa','$2a$12$RW75RgPFuS9in6w8opG3E.VskrDT4qV4cz.ryIc4UyOtvcKUTao.i'),('val','Valeria Bonilla','$2a$12$pkk8e4RaNYDZgh00DqJhne0labq4hqvUI4QSwPvZ6/kcpGYvYdy5C'),('vale','Valeria Bonilla','$2a$12$6ECJGcWLecXY7TiqUEM24OGUro3CdTWHA7og3.TjavfoCBC0Zy0V2');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'coches'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-18 20:12:48
