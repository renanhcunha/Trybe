CREATE FULLTEXT INDEX name_index ON sakila.category(name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

DROP INDEX name_index ON sakila.category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
