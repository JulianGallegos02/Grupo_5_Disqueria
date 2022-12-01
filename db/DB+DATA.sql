-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-12-2022 a las 09:19:32
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sound_bites`
--
DROP DATABASE IF EXISTS sound_bites;
CREATE DATABASE sound_bites;
USE sound_bites;

--
-- Estructura de tabla para la tabla `album`
--

CREATE TABLE `album` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `artist_id` int(11) DEFAULT NULL,
  `genre_id` int(11) DEFAULT NULL,
  `label_id` int(11) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `album`
--

INSERT INTO `album` (`id`, `name`, `artist_id`, `genre_id`, `label_id`, `image`, `description`, `price`) VALUES
(1, 'Flower Boy', 35, 7, 5, 'cover1669882397559-.jfif', 'Flower Boy es el cuarto álbum de estudio del rapero estadounidense Tyler, The Creator. Fue lanzado el 21 de julio de 2017 a través de Columbia Records.', 7000),
(2, 'When We All Fall Asleep, Where Do We Go?', 34, 1, 8, 'cover1669876057851-.jfif', 'When We All Fall Asleep, Where Do We Go? (estilizado en mayúsculas) es el primer álbum de estudio de la cantante estadounidense Billie Eilish. Está producido por su hermano Finneas O\'Connell y fue publicado el 29 de marzo de 2019 a través de Interscope Records. El álbum combina géneros como el electropop, influencias de R&B y el pop, y ha vendido más 6 millones de copias mundialmente hasta la fecha.', 2500),
(37, 'Will of The People', 36, 2, 3, 'cover1669876256379-.jfif', 'Will of the people es el título del noveno álbum de Muse, y el de la pista de apertura del mismo. Un disco creado en Los Ángeles y Londres bajo el influjo de una creciente incertidumbre e inestabilidad en el mundo. Una pandemia, nuevas guerras en Europa, protestas y disturbios masivos, un intento de insurrección, la vacilación de la democracia occidental, el aumento del autoritarismo, los incendios forestales y los desastres naturales y la desestabilización del orden global, comentan en nota promocional, sobre unos tiempos de preocupación por las amenazas que planean sobre los seres humanos y el planeta en el que habitan. Esta obra es una navegación personal a través de esos miedos y la preparación para lo que viene después. Una colección de 10 pistas con Won\'t stand down como primer avance, una canción sobre defender tu posición contra los acosadores, estrenada junto a un audiovisual dirigido por Jared Hogan. Da continuidad Compliance el 17 de marzo de 2022 con un videoclip de Jeremi Durand, acompañando al anuncio del lanzamiento de \'Will of the people\', incluidos nombre, listado de temas y fecha de salida. Como tercer avance la pista titular, y el cuarto Kill or be killed. Con You make me feel like it\'s Halloween como single de enfoque.Sobre el sonido Matt Bellamy comentó a Apple Music 1: Este álbum va desde el metal hasta el pop hasta mi primera versión de una canción de Adele… mucha electrónica. Es como un completo… Lo producimos nosotros mismos. Estuvimos analizando todo lo que hemos hecho hasta la fecha. Con mucha aportación del baterista Dominic Howard. Bellamy añadió: \'\'Dejé que Dom tomara la iniciativa un poco. Es por eso que este álbum ha tomado dos años. Cada decisión tarda como una semana en volver con nosotros. Normalmente apresuro todo. Con él es muy lento, se toma su tiempo en cada decisión. Le permití tomar muchas decisiones sobre lo que era bueno y lo que no\'\'.', 3500),
(38, 'Freakout/Release', 37, 4, 6, 'cover1669876493713-.jfif', 'Freakout/Release es el octavo álbum de estudio de la banda inglesa de synthpop Hot Chip. Fue lanzado el 19 de agosto de 2022 a través de Domino.', 2550),
(39, 'Unknown Pleasures', 38, 6, 10, 'cover1669876732391-.jfif', 'Unknown Pleasures es el primer álbum de estudio y álbum debut de la banda británica de rock: Joy Division, publicado en junio de 1979.', 3600),
(40, 'First Impressions of Earth', 39, 2, 7, 'cover1669876878318-.jfif', 'First Impressions of Earth es el tercer álbum de la banda de rock estadounidense The Strokes. Fue publicado en enero de 2006, siendo precedido por el sencillo hit \"Juicebox\" algunas semanas antes. Además, es el primer álbum de The Strokes con Parental Advisory.', 4200),
(42, 'The New Abnormal', 39, 2, 7, 'cover1669877106226-.jfif', 'The New Abnormal es el sexto álbum de estudio de la banda de garage rock estadounidense The Strokes. Fue lanzado el 10 de abril de 2020 en todas las plataformas y países. Este álbum salió a la venta tras siete años sin un álbum de estudio, ya que \"Future Present Past\" es un EP publicado en 2016.\r\n\r\nEl álbum fue producido por Rick Rubin y grabado en su estudio Shangri-La en Malibu, California, con grabaciones adicionales en estudios en el condado de Los Ángeles y Hawái. The Strokes comenzaron a interpretar canciones del álbum por primera vez en diferentes programas en 2019, antes de revelar la lista de canciones y la portada del álbum a principios de 2020. Las canciones \"At the Door\", \"Bad Decisions\", \"Brooklyn Bridge to Chorus\" y \"The Adults Are Talking\" fueron lanzados como sencillos antes y durante el lanzamiento del álbum.', 4500),
(43, 'Unas vacaciones raras', 40, 2, 10, 'cover1669877263217-.jfif', 'Cuando Netflix se encontró en el aprieto que impedía reutilizar la banda sonora original de Okupas para su reestreno, el creador de la serie Bruno Stagnaro aprovechó el altercado legal para darle a la ocasión un giro significativo. El reconocido director argentino entonces decidió contactar a Santiago Motorizado con el objetivo de que tomara las riendas del asunto. Siendo un cinéfilo indiscutido y fan de la miniserie de culto, el músico platense aceptó el desafío. El resultado está compilado en Unas vacaciones raras, el disco que reúne las canciones de El Mató a un Policía Motorizado que relevaron a los clásicos de The Rolling Stones, The Doors y The Beatles, entre otros grupos emblemáticos, que fueron utilizadas dos décadas atrás en uno de los unitarios más valiosos de la televisión nacional.', 7500),
(44, 'This Old Dog', 41, 9, 10, 'cover1669877400045-.jfif', 'This Old Dog es el tercer álbum de estudio de larga duración del cantautor y multiinstrumentista Mac DeMarco, lanzado el 5 de mayo de 2017 a través de Captured Tracks. Tras el lanzamiento de Another One, DeMarco se mudó de su aislado hogar de Queens a una casa en Los Ángeles para crear el álbum.', 3450),
(45, 'Hi, How Are You', 42, 9, 10, 'cover1669877544766-.jfif', 'Hi, How Are You: The Unfinished Album, comúnmente conocido simplemente como Hi, How Are You, es el sexto álbum de casete autoeditado por el cantautor Daniel Johnston, grabado en septiembre de 1983. Se puede decir que es su álbum más popular. Johnston afirmó que lo grabó durante un ataque de nervios.', 3333),
(46, 'Random Access Memories', 43, 4, 5, 'cover1669877690679-.jfif', 'Random Access Memories es el cuarto y último álbum de estudio del dúo francés Daft Punk. Se publicó oficialmente el 17 de mayo en Australia, el 20 de mayo en Reino Unido​ y el 21 de mayo de 2013 en Estados Unidos, ​ bajo licencia de Daft Life.', 3550),
(47, 'Alive 2007', 43, 4, 10, 'cover1669877760132-.jfif', 'Alive 2007 es un álbum en vivo de Daft Punk, fue lanzado por primera vez el 19 de noviembre de 2007. Es el segundo álbum grabado en vivo por el dúo, desde Alive 1997. Alive 2007 fue grabado durante una actuación en el Bercy de París, el 14 de junio de 2007, durante la gira Alive 2006/2007.', 5500);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `album_format`
--

CREATE TABLE `album_format` (
  `id` int(11) NOT NULL,
  `album_id` int(11) DEFAULT NULL,
  `format_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `artists`
--

CREATE TABLE `artists` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `artists`
--

INSERT INTO `artists` (`id`, `name`, `image`, `description`) VALUES
(34, 'Billie Eilish', 'image1669872975580-.jpg', 'Billie Eilish Pirate Baird O\'Connell (Los Ángeles, California; 18 de diciembre de 2001) es una cantante y compositora estadounidense. Adquirió fama como artista cuando tenía 13 años, a raíz del sencillo «Ocean Eyes» que se publicó en 2015 en SoundCloud y volvió a lanzarse con un vídeo musical en YouTube en 2016, a la edad de 14 años, lo que la convirtió en un fenómeno viral. En 2017, publicó su EP Don\'t Smile at Me, producido por su hermano Finneas O\'Connell.'),
(35, 'Tyler, the Creator', 'image1669875487690-.webp', 'Tyler Gregory Okonma (Los Ángeles, California; 6 de marzo de 1991), conocido artísticamente como Tyler, the Creator, es un rapero, compositor, productor, actor, escritor, director y diseñador estadounidense de origen canadiense.\r\n\r\nSe hizo conocido en los inicios de los 2010 al ser el líder y cofundador del grupo de rap Odd Future, habiendo cantado y producido casi todas las canciones de la agrupación.1 Como solista, Tyler lanzó un mixtape y seis álbumes de estudio, todos producidos por él mismo.'),
(36, 'Muse', 'image1669876131371-.jpg', 'Muse es una banda de rock británica formada en 1994, en Teignmouth, Devon. Desde su formación, sus integrantes son: Matt Bellamy, Christopher Wolstenholme y Dominic Howard.'),
(37, 'Hot Chip', 'image1669876398242-.webp', 'Hot Chip es una banda británica de indietronica. Tiene seis álbumes en el mercado: Coming on Strong, The Warning, Made in the Dark, One Life Stand, In Our Heads y Why Make Sense?.'),
(38, 'Joy Division', 'image1669876658300-.webp', 'Joy Division fue una banda de post-punk inglesa, formada en 1976 en Salford, Gran Mánchester. Originalmente llamada Warsaw, la banda estuvo formada por Ian Curtis, Bernard Sumner, ​ Peter Hook y Stephen Morris.'),
(39, 'The Strokes', 'image1669876806257-.webp', 'The Strokes es una banda de rock estadounidense de la ciudad de Nueva York. Formada en 1998, la banda está compuesta por el cantante Julian Casablancas, los guitarristas Nick Valensi y Albert Hammond, Jr., el bajista Nikolai Fraiture y el baterista Fabrizio Moretti.'),
(40, 'Él Mató a un Policía Motorizado', 'image1669877196278-.jpg', 'Él Mató a un Policía Motorizado es una banda de indie rock con origen en la ciudad de La Plata, Argentina fundada en 2003. La banda combina el punk rock con el noise rock y el noise pop, logrando un sonido de guitarras fuertemente distorsionadas y en primer plano.​'),
(41, 'Mac DeMarco', 'image1669877351337-.jpg', 'McBriare Samuel Lanyon Mac DeMarco, de nacimiento Vernor Winfield McBriare Smith IV, es un cantautor, multinstrumentista y productor discográfico canadiense.​ Se le considera una de las principales figuras de la escena del bedroom pop de los 2010.​'),
(42, 'Daniel Johnston', 'image1669877499019-.webp', 'Daniel Dale Johnston​ ​ fue un músico, cantautor y artista estadounidense. Sus canciones han sido calificadas como atormentadas, presentando una mezcla entre naif y música tenebrosa.'),
(43, 'Daft Punk', 'image1669877624412-.webp', 'Daft Punk fue un dúo francés de french house formado por los DJ\'s y productores Guy-Manuel de Homem-Christo y Thomas Bangalter.​​​ Daft Punk alcanzó una gran popularidad dentro del house a mediados de los años 1990 en Francia y continuó con su éxito en los años posteriores.​​​');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `format`
--

CREATE TABLE `format` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `format`
--

INSERT INTO `format` (`id`, `name`) VALUES
(1, 'Vinyl'),
(2, 'Cassette'),
(3, 'CD'),
(4, 'Digital');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genre`
--

CREATE TABLE `genre` (
  `id` int(11) NOT NULL,
  `genre_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `genre`
--

INSERT INTO `genre` (`id`, `genre_name`) VALUES
(1, 'Pop'),
(2, 'Rock'),
(3, 'Metal'),
(4, 'Electronica'),
(5, 'Rap'),
(6, 'Punk'),
(7, 'Hip Hop'),
(8, 'Funk'),
(9, 'Chill'),
(10, 'Otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `label`
--

CREATE TABLE `label` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `label`
--

INSERT INTO `label` (`id`, `name`) VALUES
(1, 'Universal Music Group'),
(2, 'Sony Music Entertainment'),
(3, 'Warner Music Group'),
(4, 'Atlantic Records'),
(5, 'Columbia Records'),
(6, 'Domino Records'),
(7, 'RCA Records'),
(8, 'Interscope Records'),
(9, 'Capitol Records'),
(10, 'Otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(30) DEFAULT NULL,
  `last_name` varchar(30) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `image`, `admin`) VALUES
(31, 'Julian', 'Gallegos', 'juliangallegos@soundbites.com', '$2a$10$ucAPa3G63Onav.pe.v/uMOR9PoLmHgrQjSJJYYxzPGxnbwJjLemzG', 'avatar1669830875919-.webp', 1),
(33, 'Agustin', 'Costa Ditarcio', 'aguscosta@soundbites.com', '$2a$10$Zj0CxIfzeAvtu..hOpkgeukORM0mbaWbdgEALWdy7VByDdnisQocO', 'avatar1669855134018-.JPG', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_58ce2270-91f5-4de5-b6f3-5949b6441ed3` (`genre_id`),
  ADD KEY `FK_efbf05e0-2e92-4f43-8531-7e8a11db7209` (`label_id`),
  ADD KEY `FK_bc19feb4-997b-4f23-9e76-92832a4c627e` (`artist_id`);

--
-- Indices de la tabla `album_format`
--
ALTER TABLE `album_format`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ff97940d-4703-4013-97b0-da8ddcc6ce37` (`album_id`),
  ADD KEY `FK_d6cc32be-38c0-45e3-9b79-ba14ff4e8482` (`format_id`);

--
-- Indices de la tabla `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `format`
--
ALTER TABLE `format`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `label`
--
ALTER TABLE `label`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `album`
--
ALTER TABLE `album`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de la tabla `album_format`
--
ALTER TABLE `album_format`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `artists`
--
ALTER TABLE `artists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `format`
--
ALTER TABLE `format`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `genre`
--
ALTER TABLE `genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `label`
--
ALTER TABLE `label`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `album`
--
ALTER TABLE `album`
  ADD CONSTRAINT `FK_58ce2270-91f5-4de5-b6f3-5949b6441ed3` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_bc19feb4-997b-4f23-9e76-92832a4c627e` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`),
  ADD CONSTRAINT `FK_efbf05e0-2e92-4f43-8531-7e8a11db7209` FOREIGN KEY (`label_id`) REFERENCES `label` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `album_format`
--
ALTER TABLE `album_format`
  ADD CONSTRAINT `FK_d6cc32be-38c0-45e3-9b79-ba14ff4e8482` FOREIGN KEY (`format_id`) REFERENCES `format` (`id`),
  ADD CONSTRAINT `FK_ff97940d-4703-4013-97b0-da8ddcc6ce37` FOREIGN KEY (`album_id`) REFERENCES `album` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
