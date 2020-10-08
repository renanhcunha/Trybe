import React, { Component } from 'react'
import './Form.css'
import TextArea from './TextArea';
import Name from './Name';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      numero: 0,
      palavraChaveFavorita: '',
      checkbox: false,
      arquivo: '',
      formularioComErros: false,
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleErrors(textAreaErrors = false, nameErrors = false) {
    const value = textAreaErrors || nameErrors;
    this.setState({
      formularioComErros: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <TextArea handleChange={this.handleChange} handleErrors={this.handleErrors} estadoFavorito={this.state.estadoFavorito} />
          <Name handleChange={this.handleChange} handleErrors={this.handleErrors} nome={this.state.nome} />
          <label>
            Número:
            <input type="number" name="numero" value={this.state.numero} onChange={this.handleChange}/>
          </label>
          <label>
            Escolha sua palavra chave favorita:
            <select name="palavraChaveFavorita" value={this.state.palavraChaveFavorita} onChange={this.handleChange}>
              <option value=""></option>
              <option value="Componente">Componente</option>
              <option value="Estado">Estado</option>
              <option value="Evento">Evento</option>
              <option value="Props">Props</option>
            </select>
          </label>
          <label>
            Checkbox:
            <input type="checkbox" name="checkbox" value={this.state.checkbox} onChange={this.handleChange}/>
          </label>
          <label>
            Envie seu arquivo:
            <input type="file" name="arquivo" value={this.state.arquivo} onChange={this.handleChange}/>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;