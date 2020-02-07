import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Circulo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            raio: '',
            resultado: '0'
        };

        this.modificaRaio = this.modificaRaio.bind(this);
        this.calcularArea = this.calcularArea.bind(this);
    }

    modificaRaio(raio) {
        this.setState({raio: raio.target.value});        
    }

    calcularArea() {
        let raio = parseFloat(this.state.raio);
        let Pi = Math.PI;
        let area = Pi * Math.pow(raio, 2);
        this.setState({resultado: Math.floor(area)});
        raio.preventDefault();
    }

    render() {
        return (
            <div className="Div">
                <header className="Header">
                    <h1 className="H1">Círculo</h1>
                </header>
                <section className="Section-resultado">
                    <h2 className="H2">Área</h2>
                    <h2 className="H2">{this.state.resultado}</h2>
                </section>
                <section className="Section-inputs">
                    <form className="Form" onSubmit={() => this.calcularArea()}>
                        <input className="Input" type="text" name="raio" placeholder="Informe o valor do Raio" value={this.state.raio} onChange={this.modificaRaio} /><br/>                       
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
