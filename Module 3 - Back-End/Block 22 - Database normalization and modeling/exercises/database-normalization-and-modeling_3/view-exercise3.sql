USE sakila;

CREATE VIEW address_info AS
SELECT
a.address_id AS address_id,
a.address AS address,
a.district AS district,
a.city_id AS city_id,
c.city AS city
FROM address AS a
INNER JOIN city AS c ON c.city_id = a.city_id
ORDER BY city;
