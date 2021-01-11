CREATE DATABASE IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE funcionario (
Funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
Nome VARCHAR(40) NOT NULL,
Sobrenome VARCHAR(40) NOT NULL,
Email VARCHAR(40) NOT NULL,
Telefone VARCHAR(40),
DataCadastro DATETIME NOT NULL
);

ALTER TABLE funcionario AUTO_INCREMENT = 12;

CREATE TABLE setores (
Setor_id INT PRIMARY KEY AUTO_INCREMENT,
Setor VARCHAR(40) NOT NULL
);

CREATE TABLE setor_funcionario (
Funcionario_id INT,
Setor_id INT,
FOREIGN KEY (Funcionario_id) REFERENCES funcionario(Funcionario_id),
FOREIGN KEY (Setor_id) REFERENCES setores(Setor_id)
);

INSERT INTO funcionario (Nome, Sobrenome, Email, Telefone, DataCadastro)
VALUES
('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
('André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
('Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO setores (Setor)
VALUES
('Administração'),
('Vendas'),
('Operacional'),
('Estratégico'),
('Marketing');

INSERT INTO setor_funcionario (Funcionario_id, Setor_id)
VALUES
(12, 1),
(12, 2),
(13, 3),
(14, 4),
(14, 2),
(15, 5);
