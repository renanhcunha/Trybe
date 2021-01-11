USE sakila;

CREATE VIEW film_info AS
SELECT
fa.actor_id AS actor_id,
CONCAT(a.first_name, ' ', a.last_name) AS actor,
f.title AS title
FROM film_actor AS fa
INNER JOIN actor AS a ON fa.actor_id = a.actor_id
INNER JOIN film AS f ON f.film_id = fa.film_id
ORDER BY actor;
