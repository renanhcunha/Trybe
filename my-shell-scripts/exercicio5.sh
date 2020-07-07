#!/bin/bash

### Exercicio 5 ### 
read -p "Digite o caminho do arquivo ou diretório:" caminho

if [ -f $caminho ]
then
    echo "É um arquivo carai!"
elif [ -d $caminho ]
then
    echo "É um diretório carai!"
else 
    echo "QUE PORRA É ESSA VÉI!"
fi

ls -l $caminho