// Remova todos os documentos publicados pelo George Lucas .

db.superheroes.deleteMany({publisher: "George Lucas"})