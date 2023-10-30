import React from "react";
import { GlobalStyle } from "./Styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import InspeccionVisual from "./pages/InspeccionVisual";
import AislamientoYBloqueo from "./pages/AislamientoYBloqueo";
import ValvulaNeumatica from "./pages/ValvulaNeumatica";
import Bomba from "./pages/Bomba";
import Tambor from "./pages/Tambor";
import './App.css';
import Mina from "./pages/MinaSubterranea/Mina";
import Bocamina from "./pages/MinaSubterranea/Bocamina";


function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <AislamientoYBloqueo/>
          </Route>

          <Route path="/identificacion-de-tipos-de-desgaste">
            <InspeccionVisual />
          </Route>

          <Route path="/valvula-neumatica-v2">
            <ValvulaNeumatica />
          </Route>
          <Route path="/laboratorio-bomba">
            <Bomba />
          </Route>
          <Route path="/laboratorio-tambor">
            <Tambor />
          </Route>
          <Route path="/mina-subterranea">
            <Mina/>
          </Route>
          <Route path="/mina-subterranea/bocamina">
            <Bocamina/>
          </Route>


        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
