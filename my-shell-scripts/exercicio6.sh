#!/bin/bash

### Exercicio 6 ###

if [ -f $1 ]
then
    echo "É um arquivo carai!"
elif [ -d $1 ]
then
    echo "É um diretório carai!"
else 
    echo "QUE PORRA É ESSA VÉI!"
fi

ls -l $1