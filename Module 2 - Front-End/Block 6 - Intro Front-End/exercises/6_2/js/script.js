window.onload = function() {
  var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    onSelect: function(date) {
      console.log(date);
    }
  });

  new window.JustValidate('.my-form', {
    rules: {
      name: {
        required: true,
        maxLength: 40
      },
      email: {
        required: true,
        email: true
      },
      cpf: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cidade: {
        required: true,
      },
      estado: {
        required: true,
      },
      tipo: {
        required: true,
      },
      curriculo: {
        required: true,
      },
      cargo: {
        required: true,
      },
      desCargo: {
        required: true,
      },
      data: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'O campo nome é obrigatório',
        maxLength: 'O campo excede o máximo de 40 caracteres',
      },
      email: {
        required: 'O campo email é obrigatório',
        email: 'O campo digitado é inválido'
      },
      cpf: 'O campo CPF é obrigatório',
      endereco: 'O campo de endereço é obrigatório',
      cidade: 'O campo Cidade é obrigatório',
      estado: 'O campo Estado é obrigatório',
      tipo: 'O campo Tipo de moradia é obrigatório',
      curriculo: 'O campo de Resumo do currículo é obrigatório',
      cargo: 'O campo Cargo é obrigatório',
      desCargo: 'O campo Descrição do cargo é obrigatório',
      data: 'O campo Data de início é obrigatório',
    },

    submitHandler: function (form, values, ajax) {
      console.log(form, values);
    },
  });
}

function getEstados() {
  const selectEstados = document.querySelector('#estado');
  const estados = ["","AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
  for (let index in estados) {
    const estado = document.createElement('option');
    estado.innerText = estados[index];
    estado.value = estados[index];
    selectEstados.appendChild(estado);
  }
}

getEstados();
