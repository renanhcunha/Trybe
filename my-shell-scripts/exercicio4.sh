#!/bin/bash

### Exercício 4 ### 
caminho=`pwd`

if [ -e $caminho ]
then
    echo "O caminho $caminho está habilitado"
fi

if [ -w $caminho ]
then
    echo "Você tem permissão para editar $caminho"
else
    echo "Você NÃO foi autorizado a editar $caminho"
fi