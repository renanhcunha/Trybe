#!/bin/bash

### Exercicio 7 ### 

if [ -d "$1" ]
then
    FILENUM=`ls -1 $1 | wc -l`
    echo "O $1 tem $FILENUM arquivos."
else 
    echo "O argumento $1 não é um diretório!"
fi