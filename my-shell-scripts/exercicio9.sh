#!/bin/bash

### BONUS 2 ###

ARGS=$@

for ARG in $ARGS;
do
    if [ -f $ARG ]
    then
        echo -e "\n$ARG É um arquivo!"
    elif [ -d $ARG ]
    then
        echo -e "\n$ARG É um diretório!"
    else 
        echo -e "\nQUE PORRA É ESSA VÉI!"
    fi

ls -l $ARG
done