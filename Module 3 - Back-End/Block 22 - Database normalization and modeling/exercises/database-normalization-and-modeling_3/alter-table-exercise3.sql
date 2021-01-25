-- Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo e tamanho de dados.

ALTER TABLE countries CHANGE COUNTRY_NAME COUNTRY varchar(40) DEFAULT NULL;