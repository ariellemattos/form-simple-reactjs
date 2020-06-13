import React, { Component } from 'react';

const TableHead = () => {
    return(
        <thead>
            <tr>
                <th> Autor </th>
                <th> Livro </th>
                <th> Preço </th>
                <th> Remover </th>
            </tr>
        </thead>
    );
}

const TabeleBody = props => {
    const linhas = props.autores.map((linha, index) => {
        return (
            <tr key={index}>
                <td> {linha.nome}  </td>
                <td> {linha.livro} </td>
                <td> {linha.preco} </td>
                <td> 
                    <button className= "waves-effect waves-light btn-small grey darken-4"
                            onClick = {() => {props.removerAutor(index)} }> 
                        Remover 
                    </button> 
                </td>
            </tr>
        )
    })

    return(
        <tbody>
            {linhas}
        </tbody>
    )
}

class Tabela extends Component{

    render(){

        const { autores, removerAutor } = this.props;

        return(
            <table className="responsive-table highlight centered"> 
                <TableHead/>

                <TabeleBody 
                    autores = {autores} 
                    removerAutor = {removerAutor}
                />
            </table>
        );
    }
}

export default Tabela;