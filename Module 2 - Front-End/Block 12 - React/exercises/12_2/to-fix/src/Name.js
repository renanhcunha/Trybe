import React, { Component } from 'react'

class Name extends Component {
  render() {
    const { handleChange, handleErrors, nome } = this.props;
    let requiredError = false;
    (nome.length === 0) ? requiredError = true : requiredError = false;
    const nameErrors = requiredError;

    return (
      <label>
        Nome:
        <input type="text" name="nome" value={nome} onChange={handleChange}/>
        <span>{requiredError ? "Campo obrigatório!" : ''}</span>
      </label>
    );
  }
}

export default Name;