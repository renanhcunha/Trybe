const skills = ['HTML', 'Javascript', 'CSS', 'Git', 'Github'];

let replaceX = (string, stringX) => {
  let newstr = stringX.replace(/ x /gi, ` ${string} `);
  return newstr;
}

let skillList = () => {
  const orderSkills = skills.sort();
  let list = '';
  for (let index in orderSkills) {
    list += `
    ${orderSkills[index]}`
  }
  return list;
}

let concatenate = (replace) => {
  concatString = 
  `
  ${replace}

  Minhas cinco principais habilidades são:
  ${skillList()}
  #goTrybe`;
  console.log(concatString);
};

concatenate(replaceX('Renan','Tryber x aqui!'));