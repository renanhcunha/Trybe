CREATE DATABASE IF NOT EXISTS albuns;

USE albuns;

CREATE TABLE artista(
artista_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(80) NOT NULL 
);

CREATE TABLE estilo_musical(
estilo_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(80) NOT NULL 
);

CREATE TABLE album(
album_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(80) NOT NULL,
preço DECIMAL(5, 2) NOT NULL,
artista_id INT NOT NULL,
estilo_id INT NOT NULL,
FOREIGN KEY (artista_id) REFERENCES artista (artista_id),
FOREIGN KEY (estilo_id) REFERENCES estilo_musical (estilo_id)
);

CREATE TABLE canção(
canção_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(80) NOT NULL,
album_id INT NOT NULL,
FOREIGN KEY (album_id) REFERENCES album (album_id)
);