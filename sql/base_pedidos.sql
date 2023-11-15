CREATE TABLE `pedidosCoco` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `telefono` int(30) NOT NULL,
  `mensaje` varchar(120) NOT NULL,
  `email` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
--
--
ALTER TABLE `pedidosCoco`
  ADD PRIMARY KEY (`ID`);
COMMIT;
