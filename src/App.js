import React, { Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Tabela from './components/Tabela';
import Form from './components/Formulario';
import Header from './components/Header'
import PopUp from './components/PopUp';

class App extends Component {

  state = {
    autores : [
      {
        nome: 'Clarice Lispector',
        livro: 'A hora da estrela',
        preco: '30,00'
      },
      {
        nome: 'Raphael Montes',
        livro: 'Suicidas',
        preco: '30,00'
      },
      {
        nome: 'John Green',
        livro: 'Tartarugas até lá em baixo',
        preco: '30,00'
      }
    ],
  };

  removerAutor = index => {
    const { autores } = this.state;

    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {
         return posAtual !== index;
        }),
      }
    );
    PopUp.exibeMensagem('success', 'Autor removido com sucesso')
  }

  escutadorSubmit = autor => {
    this.setState({autores : [...this.state.autores, autor]})
    PopUp.exibeMensagem('success', 'Autor adicionado com sucesso')
  }

  render(){
    return (
      <Fragment> 
        <Header></Header>
        <div className="container">
          <Tabela 
            autores = {this.state.autores} 
            removerAutor = {this.removerAutor}
          />

          <Form
            escutadorSubmit = {this.escutadorSubmit}
          />
        </div>
         
      </Fragment>
    );
  }

}

export default App;
