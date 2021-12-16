import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/body/router/index/App.jsx';
import Inicio from './components/body/router/index/Inicio.jsx';
import Iniciarsesion from './components/body/router/login/Iniciarsesion.jsx';
import Recuperarcontrasena from './components/body/router/login/Recuperarcontrasena.jsx';
import Usuariodeplanta from './components/body/router/my-content/Usuariodeplanta.jsx';
import Agendarcita from './components/body/router/my-content/Agendarcita.jsx';
import Zservicios from './components/body/Zservicios';
import ModificarServicio from './components/body/ModificarServicio';
import GestionServicios from './components/body/GestionServicios';
import PerfilUsuarioMec from './components/body/PerfilUsuarioMec';
import EstadoVehiculo from './components/body/EstadoVehiculo';
import DashboardAdm from './components/body/DashboardAdm';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/Inicio" element={<Inicio/>} />
        <Route path="/Iniciarsesion" element={<Iniciarsesion/>} />
        <Route path="/Recuperarcontrasena" element={<Recuperarcontrasena/>} />
        <Route path="/Usuariodeplanta" element={<Usuariodeplanta/>} />
        <Route path="/Agendarcita" element={<Agendarcita/>} />
        <Route path="/Zservicios" element={<Zservicios/>} />
        <Route path="/ModificarServicio" element={<ModificarServicio/>} />
        <Route path="/GestionServicios" element={<GestionServicios/>} /> 
        <Route path="/UsuarioMecanico" element={<PerfilUsuarioMec/>} />
        <Route path="/EstadoVehiculo" element={<EstadoVehiculo/>} />
        <Route path="/DashboardAdm" element={<DashboardAdm/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

