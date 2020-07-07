#!/bin/bash

### BONUS 4 ###

diretorio=$1
tipo=$2
data=`date +%F`
cd $diretorio

for IMAGEM in $(ls *.$tipo);
do 
    echo "Como era o arquivo: $IMAGEM"
    echo -e "Como vai ficar o arquivo: $data-$IMAGEM\n"
    mv $IMAGEM $data-$IMAGEM
done