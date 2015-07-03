INSERT INTO veci (idveci, nazev, typ, vykon, socket, sloty, popis) VALUES
(0, 'Peníze', '', 0, '', '', 'Základní prostředek pro směnu, počítač z ních ale neposkládáš.'),
(1, 'Železo', '', 0, '', '', 'Surovina s chemickou značkou Fe.'),
(2, 'Měď', '', 0, '', '', 'Surovina s chemickou značkou Cu.'),
(3, 'Zlato', '', 0, '', '', 'Surovina s chemickou značkou Au.'),
(4, 'Křemík', '', 0, '', '', 'Surovina s chemickou značkou Si.'),
(5, 'Northbridge', '', 0, '', '', 'Materiál na základní desku.'),
(6, 'Southbridge', '', 0, '', '', 'Materiál na základní desku.'),
(7, 'Flash Bios', '', 0, '', '', 'Materiál na základní desku.'),
(8, 'RAM slots', '', 0, '', '', 'Materiál na základní desku.'),
(9, 'PCI-e', '', 0, '', '', 'Materiál na základní desku.'),
(10, 'Core', '', 0, '', '', 'Materiál na procesor.'),
(11, 'L3 Cache', '', 0, '', '', 'Materiál na procesor.'),
(12, 'Graphics', '', 0, '', '', 'Materiál na procesor.'),
(13, 'Controller', '', 0, '', '', 'Materiál na procesor.'),
(14, 'Graphics core', '', 0, '', '', 'Materiál na grafickou kartu.'),
(15, 'VRAM', '', 0, '', '', 'Materiál na grafickou kartu.'),
(16, 'PCB', '', 0, '', '', 'Materiál na grafickou kartu.'),
(17, 'MOSFET', '', 0, '', '', 'Materiál na grafickou kartu.'),
(18, 'Intel D975XBX (Pentium)', 'mb', 1, 'Pentium', '4;3;1', 'Třída Pentium'),
(19, 'Abit IP35 (Core)', 'mb', 1, 'Core', '4;1;1', 'Třída Core'),
(20, 'Asus P5Q Deluxe (Core)', 'mb', 1, 'Core', '4;2;1', 'Třída Core'),
(21, 'Asus EVGA 132-CK-NF78-A1 (Core)', 'mb', 1, 'Core', '4;3;1', 'Třída Core'),
(22, 'Asus P7P55D Deluxe (Nehalem)', 'mb', 1, 'Nehalem', '4;3;1', 'Třída Nehalem'),
(23, 'EVGA P55 Classified (Nehalem)', 'mb', 1, 'Nehalem', '4;4;1', 'Třída Nehalem'),
(24, 'EVGA X58 Classified 4x SLI (Nehalem)', 'mb', 1, 'Nehalem', '6;4;1', 'Třída Nehalem'),
(25, 'Pentium 4 630 (Pentium)', 'cpu', 300, 'Pentium', '', 'Pentium 4 630'),
(26, 'Pentium D 960 (Pentium)', 'cpu', 500, 'Pentium', '', 'Pentium D 960'),
(27, 'Celeron E3500 (Core)', 'cpu', 900, 'Core', '', 'Celeron E3500'),
(28, 'Pentium E5500 (Core)', 'cpu', 1200, 'Core', '', ''),
(29, 'Core 2 Duo E8400 (Core)', 'cpu', 1700, 'Core', '', ''),
(30, 'Core 2 Quad Q9300 (Core)', 'cpu', 2800, 'Core', '', ''),
(31, 'Core 2 Quad Q9650 (Core)', 'cpu', 3000, 'Core', '', ''),
(32, 'Core i3 550 (Nehalem)', 'cpu', 2300, 'Nehalem', '', ''),
(33, 'Core i5 760 (Nehalem)', 'cpu', 3400, 'Nehalem', '', ''),
(34, 'Core i7 950 (Nehalem)', 'cpu', 4300, 'Nehalem', '', ''),
(35, 'Core i7-E 980x (Nehalem)', 'cpu', 5000, 'Nehalem', '', ''),
(36, 'nVidia 6800 Ultra', 'gpu', 2300, 0, '', 'popis gpu'),
(37, 'AMD x850 XT PE', 'gpu', 2600, 0, '', 'popis gpu'),
(38, 'nVidia 7600 GT', 'gpu', 2800, 0, '', 'popis gpu'),
(39, 'AMD x1950 XT', 'gpu', 3000, 0, '', 'popis gpu'),
(40, 'nVidia 7950 GX2', 'gpu', 3700, 0, '', 'popis gpu'),
(41, 'nVidia 8600 GT', 'gpu', 4300, 0, '', 'popis gpu'),
(42, 'AMD 2900 XT', 'gpu', 5000, 0, '', 'popis gpu'),
(43, 'nVidia 8800 Ultra', 'gpu', 6300, 0, '', 'popis gpu'),
(44, 'RAM', 'ram', 1, 0, '', 'popis ram'),
(45, 'HDD', 'hdd', 1, 0, '', 'popis hdd'),
(46, 'SSD', 'hdd', 2, 0, '', 'popis ssd'),
(47, 'PSU', 'psu', 1000000000, 0, '', 'popis psu');

INSERT INTO recepty (vyrobek, suroviny, doba, vyzkum) VALUES
(5, '0;20;15;3;10;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 0),
(6, '0;20;15;3;10;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 0),
(7, '0;1800;1100;500;800;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 0),
(8, '0;1200;1000;300;200;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 0),
(9, '0;1000;1900;300;1000;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 0),
(10, '0;800;300;150;400;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 0),
(11, '0;100;200;30;150;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 0),
(12, '0;500;500;20;250;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 0),
(13, '0;600;500;200;200;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 0),
(14, '0;800;300;150;400;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 0),
(15, '0;100;200;30;150;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 0),
(16, '0;500;500;20;250;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 0),
(17, '0;600;500;200;200;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 0),
(18, '0;0;0;0;0;50;40;2;4;3;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 1),
(19, '0;0;0;0;0;60;45;2;4;1;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 2),
(20, '0;0;0;0;0;80;60;3;4;2;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 2),
(21, '0;0;0;0;0;95;80;4;4;3;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 2),
(25, '0;0;0;0;0;0;0;0;0;0;2;2;0;1;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 1),
(26, '0;0;0;0;0;0;0;0;0;0;2;4;0;2;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 1),
(27, '0;0;0;0;0;0;0;0;0;0;1;1;0;1;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 2),
(28, '0;0;0;0;0;0;0;0;0;0;2;2;0;1;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 2),
(29, '0;0;0;0;0;0;0;0;0;0;2;6;0;2;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 2),
(30, '0;0;0;0;0;0;0;0;0;0;4;6;0;2;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 2),
(31, '0;0;0;0;0;0;0;0;0;0;4;12;0;2;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 60, 2);
