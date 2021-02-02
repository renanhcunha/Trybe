Agora vamos juntar tudo o que aprendemos até aqui e criar mais um script.

1. O script deve calcular o IMC de uma pessoa e exibi-lo na tela. Crie um novo pacote chamado calcula-imc , e utilize o script start do npm para executar nosso arquivo index.js . Siga utilizando o pacote readline-sync para coletar os dados do usuário. A fórmula para cálculo do IMC é peso / altura² .
Observação : Lembre-se que peso e altura não são sempre números inteiros e, portanto, não podemos utilizar a função questionInt do pacote readline-sync . No entanto, o mesmo pacote possui uma função para tratar números com casas decimais. Encontre essa função na documentação do readline-sync e não se esqueça de utilizar o toFixed(2) nos números decimais! Dica: Para utilizar o npm start , lembre-se de configurar seu package.json , adicionando a seus scripts um start: "node index.js" , por exemplo. Nesse exemplo, o index.js representa o arquivo main do seu package.json .

2. Agora, modifique o script acima para que ele informe se a pessoa, cujo IMC foi calculado, possui algum nível de obesidade. Considere a seguinte tabela para saber qual situação deve ser apresentada para cada resultado:
IMC	Situação
Abaixo de 18,5	Abaixo do peso (magreza)
Entre 18,5 e 24,9    	Peso normal
Entre 25,0 e 29,9	Acima do peso (sobrepeso)
Entre 30,0 e 34,9	Obesidade grau I
Entre 35,0 e 39,9	Obesidade grau II
40,0 e acima	Obesidade graus III e IV

3. Por último, modifique o script do exercício anteriror para que ele utilize o pacote inquirer para solicitar as informações ao usuário no terminal. Para entender como utilizar o inquirer , consulte a documentação no site do npm . Além disso, você pode precisar relembrar o que já aprendemos sobre Promises em outra aula
Observação : Utilize a propriedade validate das perguntas do inquirer para verificar se os valores digitados são números válidos.