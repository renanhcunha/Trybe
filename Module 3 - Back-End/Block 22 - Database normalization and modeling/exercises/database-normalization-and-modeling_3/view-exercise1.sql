USE sakila;

CREATE VIEW film_with_categories AS
SELECT
f.title AS `Título`,
fc.category_id AS category_id,
c.name AS Categoria
FROM film_category AS fc
INNER JOIN film AS f ON fc.film_id = f.film_id
INNER JOIN category AS c ON c.category_id = fc.category_id
ORDER BY `Título`;
