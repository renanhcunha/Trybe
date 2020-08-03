const estados = ["","AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
const selectEstados = document.querySelector('#estado');
let initDate = document.querySelector('#dataIni');
let dateValidation = false;
let dateMsg = '';
const myForm = document.querySelector('#my-form');
let formData = new FormData();

for (let index in estados) {
  const estado = document.createElement('option');
  estado.innerText = estados[index];
  selectEstados.appendChild(estado);
}

function verifyDate(event) {
  let date = event.target.value;
  // if (isNaN(date)){
  //   event.preventDefault();
  //   return;
  // }
  let splitDate = date.split('/');
  let day = splitDate[0];
  let month = splitDate[1];
  let year = splitDate[2];
  dateMsg = '';
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
  let formDiv = document.createElement('div');
  formData = new FormData(myForm);
  let name = {
    'Nome Completo:' : formData.get('name'), 
    'Email:' : formData.get('email'),
    'CPF:' : formData.get('cpf'),
    'Endereco:' : formData.get('endereco'),
    'Cidade:' : formData.get('cidade'),
    'Estado:' : formData.get('estado'),
    'Tipo de moradia:' : formData.get('tipo'),
    'Curriculo:' : formData.get('curriculo'),
    'Cargo:' : formData.get('cargo'),
    'Descrição do cargo:' : formData.get('desCargo'),
    'Data de Início:' : formData.get('data'),
  };
  formDiv.append(JSON.stringify(name));
  document.body.appendChild(formDiv);
  if (dateValidation !== true && dateMsg !== '') {
    alert(dateMsg);
  }
}
