// Utilizando o operador $in , selecione todos os super-heróis com cabelos pretos ou carecas ( "No Hair" ).

db.superheroes.find({"aspects.hairColor": {$in:[ "black", "No Hair"]} })