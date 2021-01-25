-- Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de dados.

ALTER TABLE regions CHANGE REGION_NAME REGION varchar(25) DEFAULT NULL;