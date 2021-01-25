-- Escreva uma query SQL para alterar o nome da coluna street_address para address ,
-- mantendo o mesmo tipo e tamanho de dados.

ALTER TABLE locations CHANGE STREET_ADDRESS ADDRESS VARCHAR(40) DEFAULT NULL;