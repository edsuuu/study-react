import { Component } from 'react';
import './TrocandoNome.css';

export class TrocandoNome extends Component {
  state = {
    name: 'PRIMEIRO NOME',
  };

  buttonClick = () => {
    this.setState({ name: 'SEGUNDO NOME' });
  }

  render() {
    const { name } = this.state;
    return (
      <div className='BuscandoDadosAPI'>
        <h1>Trocar o nome para outro: <span className='TrocandoNome-name'>{name}</span></h1>
        <button onClick={this.buttonClick}>Trocar Nome</button>
      </div>
    );
  }
}
