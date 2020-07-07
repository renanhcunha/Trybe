#!/bin/bash

### BONUS 3 ###

cd ~/Capturas
data=`date +"%Y-%m-%d"` #date +%F

for IMAGEM in $(find . -name "*.png" -printf "%f\n"); #$(ls *png)
do 
    mv $IMAGEM $data-$IMAGEM
done

cd