import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Inicio from './Inicio';
import Iniciarsesion from './Iniciarsesion';
import Recuperarcontraseña from './Recuperarcontraseña';
import Usuariodeplanta from './Usuariodeplanta';
import Agendarcita from './Agendarcita';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/Inicio" element={<Inicio/>} />
        <Route path="/Iniciarsesion" element={<Iniciarsesion/>} />
        <Route path="/Recuperarcontraseña" element={<Recuperarcontraseña/>} />
        <Route path="/Usuariodeplanta" element={<Usuariodeplanta/>} />
        <Route path="/Agendarcita" element={<Agendarcita/>} /> 
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

