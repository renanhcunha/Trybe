# Atividade 6:  
**Rota**: /recipe/:id  
**Objetivo**: Deletar a receita no banco de dados e retornar a receita deletada. Caso o id fornecido não exista, retorne um erro recipe not found .  
Use o array abaixo para simular o banco de dados:  

```
const recipes = [  
  {  
    id:12345,  
    name:'farofa de bacon',  
    ingredientes:['farofa', 'bacon']  
  },  
  {  
    id:12346,  
    name:'ovo mexido',  
    ingredientes:['ovo']  
  }  
]
```