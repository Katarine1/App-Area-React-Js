import React from 'react';
//import './css/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Principal from './components/Principal';
import Retangulo from './components/Retangulo';
import Quadrado from './components/Quadrado';
import Circulo from './components/Circulo';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Principal} />
            <Route path="/Principal" component={Principal} />
            <Route path="/Retangulo" component={Retangulo} />
            <Route path="/Quadrado" component={Quadrado} />
            <Route path="/Circulo" component={Circulo} />            
        </Switch>
    </ BrowserRouter>
  );
}

export default App;
