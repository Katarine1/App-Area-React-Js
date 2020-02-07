import React, { Component } from 'react';
import '../css/figuras.css';
import { Link } from 'react-router-dom';

export default class Quadrado extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lado: '',
            resultado: '0'
        };

        this.modificaLado = this.modificaLado.bind(this);
        this.calcularArea = this.calcularArea.bind(this);
    }

    modificaLado(lado) {
        this.setState({lado: lado.target.value});        
    }

    calcularArea() {
        let lado = parseFloat(this.state.lado);
        let area = Math.pow(lado, 2);
        this.setState({resultado: Math.floor(area)});
        lado.preventDefault();
    }

    render() {
        return (
            <div className="Div">
                <header className="Header">
                    <h1 className="H1">Quadrado</h1>
                </header>
                <section className="Section-resultado">
                    <h2 className="H2">Área</h2>
                    <h2 className="H2">{this.state.resultado}</h2>
                </section>
                <section className="Section-inputs">
                    <form className="Form" onSubmit={() => this.calcularArea()}>
                        <input className="Input" type="text" name="lado" placeholder="Informe o valor do Lado" value={this.state.lado} onChange={this.modificaLado} /><br/>                       
                        <input className="Botao" type="submit" value="Calcular" />
                    </form>
                </section>
                <section className="SectionVoltar">
                    <Link className="Voltar" to="./Principal">Home</Link>
                </section>
            </div>
        );
    } 
}
