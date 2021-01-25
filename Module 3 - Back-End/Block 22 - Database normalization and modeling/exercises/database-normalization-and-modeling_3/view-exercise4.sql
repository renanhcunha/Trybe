USE sakila;

CREATE VIEW movies_languages AS
SELECT
f.title AS title,
f.language_id AS language_id,
l.name AS language
FROM film AS f
INNER JOIN language AS l ON l.language_id = f.language_id;
