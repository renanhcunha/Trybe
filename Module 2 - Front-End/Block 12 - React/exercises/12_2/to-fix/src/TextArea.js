import React, { Component } from 'react'

class TextArea extends Component {
  render() {
    const { handleChange, handleErrors, estadoFavorito } = this.props;
    let maxLengthError = undefined;
    let requiredError = undefined;
    if (estadoFavorito.length > 10) maxLengthError = "Maior que 10 caracteres!";
    if (estadoFavorito.length === 0) requiredError = "Campo obrigatório!";

    return (
      <label>
        Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
        <textarea name="estadoFavorito" value={estadoFavorito} onChange={handleChange} />
        <span>{maxLengthError ? maxLengthError : ''}</span>
        <span>{requiredError ? requiredError : ''}</span>
      </label>
    );
  }
}

export default TextArea;