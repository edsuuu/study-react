import { Component } from 'react';
import './Contador.css';
export class Contador extends Component {
  state = {
    counter: 0,
  };

  handleAClick = (event) => {
    event.preventDefault();//canelando o evento do link
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { counter } = this.state;

    return (
      <>
        <div className='Contador'>
          <h1>CANCELANDO O EVENDO DO LINK  E FAZENDO A CONTAGEM do contador</h1>
          <h1 className='Contador-numero'>{counter}</h1>
          <h1><a onClick={this.handleAClick} href="https://reactjs.org">Clica aqui</a></h1>
        </div>
      </>
    );
  }
}