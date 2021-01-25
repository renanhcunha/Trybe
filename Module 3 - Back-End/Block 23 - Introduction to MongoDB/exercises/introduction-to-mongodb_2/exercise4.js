// Retorne o total de super-heróis com até 1.80m.

db.superheroes.find({"aspects.height": {$lte: 180} }).count()