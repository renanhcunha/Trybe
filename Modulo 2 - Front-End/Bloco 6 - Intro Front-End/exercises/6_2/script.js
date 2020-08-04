let dateValidation = false;
const myForm = document.querySelector('#my-form');

function getEstados() {
  const selectEstados = document.querySelector('#estado');
  const estados = ["","AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
  for (let index in estados) {
    const estado = document.createElement('option');
    estado.innerText = estados[index];
    selectEstados.appendChild(estado);
  }
}

function verifyDate(event) {
  let date = event.target.value;
  let splitDate = date.split('/');
  let day = splitDate[0];
  let month = splitDate[1];
  let year = splitDate[2];
  let dateMsg = '';
  dateValidation = false;
  if (!year || day.length !== 2 || month.length !== 2 || year.length !== 4) {
    dateMsg += 'Formato da data incorreto! O formato deve ser dd/mm/aaaa';
    return dateMsg;
  } else if (day < 1 || day > 31) {
    dateMsg += 'Erro: o dia da data de início deve estar entre os valores 01 e 31! ';
    return dateMsg;
  } else if (month < 1 || month > 12 ) {
    dateMsg += 'Erro: o mês da data de início deve estar entre os valores 01 e 12! ';
    return dateMsg;
  } else if (year < 0 ) {
    dateMsg += 'Erro: o ano da data de início não pode ser negativo!';
    return dateMsg;
  }  
  dateValidation = true;
}

function preventDef(event) {
  event.preventDefault();
  for (let i = 0; i < myForm.elements.length; i += 1){
    if (myForm.elements[i].tagName !== 'FIELDSET' && myForm.elements[i].tagName !== 'BUTTON') {
      let elementDiv = document.createElement('div');
      elementDiv.innerHTML = myForm.elements[i].name + ' : ' + myForm.elements[i].value;
      document.body.appendChild(elementDiv);
    }
  }
  if (dateValidation !== true && dateMsg !== '') {
    alert(dateMsg);
  }
}

getEstados();
