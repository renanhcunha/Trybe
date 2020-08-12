const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const newProperty = (object, key, value) => object[key] = value;

newProperty(lesson2, 'turno', 'manhã');
// console.log(lesson2);

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = object => Object.keys(object);

// console.log(`As chaves do objeto são: ${listKeys(lesson3)}`)

// 3. Crie uma função para mostrar o tamanho de um objeto.

const objectLength = object => Object.entries(object).length;
// console.log(objectLength(lesson1));

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objectValues = object => Object.values(object);
// console.log(objectValues(lesson3));

// 5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 

const allLessons = {lesson1, lesson2, lesson3};
console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = (object) => {
  let total = 0;
  let keys = Object.keys(object);
  for (let i = 0; i < keys.length; i += 1) {
    total += object[keys[i]].numeroEstudantes;
  }
  return total;
}
// console.log(totalStudents(allLessons));

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const keyValue = (object, key) => Object.values(object)[key];
// console.log(keyValue(lesson1, 0));

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

let letFindKeyValue = (object, key, value) => {
  let isKeyTrue = Object.keys(object).includes(key);
  let isValueTrue = Object.values(object).includes(value);
  if (isKeyTrue && isValueTrue) {
    return true;
  }
  return false;
}

console.log(letFindKeyValue(lesson3, 'professor', 'Maria Clara'));