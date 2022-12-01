DROP DATABASE IF EXISTS sound_bites;
CREATE DATABASE sound_bites;
USE sound_bites;


CREATE TABLE `users` (
   `id` INT AUTO_INCREMENT,
   `first_name` VARCHAR(30),
   `last_name` VARCHAR(30),
   `email` VARCHAR(255),
   `password` VARCHAR(255),
   `image` TEXT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `album` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(255),
   `artist_id` INT,
   `genre_id` INT,
   `label_id` INT,
   `image` TEXT,
   `description` TEXT,
   `price` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `genre` (
   `id` INT AUTO_INCREMENT,
   `genre_name` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `artists` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(255),
   `image` TEXT,
   `description` TEXT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `label` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `format` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `album_format` (
   `id` INT AUTO_INCREMENT,
   `album_id` INT,
   `format_id` INT,
   PRIMARY KEY (`id`)
);


ALTER TABLE `album` ADD CONSTRAINT `FK_58ce2270-91f5-4de5-b6f3-5949b6441ed3` FOREIGN KEY (`genre_id`) REFERENCES `genre`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `album` ADD CONSTRAINT `FK_efbf05e0-2e92-4f43-8531-7e8a11db7209` FOREIGN KEY (`label_id`) REFERENCES `label`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `album` ADD CONSTRAINT `FK_bc19feb4-997b-4f23-9e76-92832a4c627e` FOREIGN KEY (`artist_id`) REFERENCES `artists`(`id`)  ;

ALTER TABLE `album_format` ADD CONSTRAINT `FK_ff97940d-4703-4013-97b0-da8ddcc6ce37` FOREIGN KEY (`album_id`) REFERENCES `album`(`id`)  ;

ALTER TABLE `album_format` ADD CONSTRAINT `FK_d6cc32be-38c0-45e3-9b79-ba14ff4e8482` FOREIGN KEY (`format_id`) REFERENCES `format`(`id`)  ;
