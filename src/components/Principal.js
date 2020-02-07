import React from 'react';
import '../css/principal.css';
import { Link } from 'react-router-dom'

export default function Principal(props) {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-h1">Área das Figuras</h1>
            </header>
            <section className="App-section">
                <article className="App-article">
                    <Link className="App-a" to="./Retangulo">Retângulo</Link>
                </article>
                <article className="App-article">
                    <Link className="App-a" to="./Quadrado">Quadrado</Link>
                </article>
                <article className="App-article">
                    <Link className="App-a" to="./Circulo">Círculo</Link>
                </article>        
            </section>      
            <footer className="App-footer">
                <h3 className="App-h3">@Kba 2020</h3>
            </footer>
        </div>
    );
}