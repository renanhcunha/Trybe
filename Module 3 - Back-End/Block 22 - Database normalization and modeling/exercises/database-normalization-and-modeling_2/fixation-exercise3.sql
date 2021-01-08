CREATE DATABASE IF NOT EXISTS normalization;

use normalization;

CREATE TABLE funcionario (
Funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
Nome VARCHAR(40) NOT NULL,
Sobrenome VARCHAR(40) NOT NULL,
Email VARCHAR(40) NOT NULL,
Telefone VARCHAR(40),
DataCadastro DATETIME NOT NULL
);

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

-- INSERT INTO table_name (column1, column2, column3, ...)
-- VALUES (value1, value2, value3, ...);

-- INSERT INTO table_name -- Todos os valores
-- VALUES (value1, value2, value3, ...);
