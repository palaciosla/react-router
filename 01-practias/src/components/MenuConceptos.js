import React from "react";
import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Menu con enlaces html (no recomendado)</span>
          <a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <span>Menu con enlaces Link</span>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="*">Error 404</Link>
        </li>
        <li>
          <span>Menu con enlaces NavLink</span>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/acerca" activeclassname="active">
            Acerca
          </NavLink>
          <NavLink to="/contacto" activeclassname="active">
            Contacto
          </NavLink>
          <NavLink to="*" activeclassname="active">
            Error 404
          </NavLink>
        </li>
        <li>
          <span>Parámetros:</span>
          <Link to="/usuario/leancavs">leancavs</Link>
          <Link to="/usuario/chichi">chichi</Link>
        </li>
        <li>
          <span>Parámetros de consultas:</span>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <span>Redirecciones:</span>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <span>Rutas Anidadas:</span>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>Rutas Privadas:</span>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
