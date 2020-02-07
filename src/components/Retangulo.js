import React, { Component } from 'react';
import '../css/figuras.css';
import { Link } from 'react-router-dom';

export default class Retangulo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            base: '',
            altura: '',
            resultado: '0'
        };

        this.modificaBase = this.modificaBase.bind(this);
        this.modificaAltura = this.modificaAltura.bind(this);
        this.calcularArea = this.calcularArea.bind(this);
    }

    modificaBase(base) {
        this.setState({base: base.target.value});    
    }

    modificaAltura(altura) {
        this.setState({altura: altura.target.value});
    }

    calcularArea() {
        let base = parseFloat(this.state.base);
        let altura = parseFloat(this.state.altura);
        let area = base * altura;
        this.setState({resultado: Math.floor(area)});
        base.preventDefault(); 
        altura.preventDefault(); 
    }

    render() {
        return (
            <div className="Div">
                <header className="Header">
                    <h1 className="H1">Retângulo</h1>
                </header>
                <section className="Section-resultado">
                    <h2 className="H2">Área</h2>
                    <h2 className="H2">{this.state.resultado}</h2>
                </section>
                <section className="Section-inputs">
                    <form className="Form" onSubmit={() => this.calcularArea()}>
                        <input className="Input" type="text" name="base" placeholder="Informe o valor da Base" value={this.state.base} onChange={this.modificaBase} /><br/>
                        <input className="Input" type="text" name="altura" placeholder="Informe o valor da Altura" value={this.state.altura} onChange={this.modificaAltura} /><br/>
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
