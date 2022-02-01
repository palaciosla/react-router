import React, { useState } from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Navigate,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Home from "../pages/Home";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Error404 from "../pages/Error404";
import MenuConceptos from "./MenuConceptos";
import Usuario from "../pages/Usuario";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

const ConceptosBasicos = () => {
  const [isLogin, setIsLogin] = useState(false);

  const logearse = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h2>Hash Router</h2>
      <HashRouter>
        <nav>
          <Link to="/">Homa</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
      <hr />
      <h2>Conceptos Básicos</h2>
      <Router>
        <MenuConceptos />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/usuario/:username" element={<Usuario />} />{" "}
          {/*el anteponer ":" se indica que va a ser un parametro dinamico */}
          <Route path="/productos" element={<Productos />} />
          <Route path="/react/*" element={<ReactTopics />} />
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route path="/contact" element={<Navigate to="/contacto" />} />
          <Route
            path="/login"
            element={<Login logearse={logearse} isLogin={isLogin} />}
          />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/dashboard" element={<PrivateRoute isLogin={isLogin} />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Error404 />} />{" "}
          {/*El error 404 se pone a lo ultimo*/}
        </Routes>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;

/*
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    let auth 
    auth = true

    // Si está autorizado, devuelve una salida que generará elementos secundarios
    // Si no, devuelve el elemento que navegará a la página de inicio de sesión
    return auth ? <Outlet/> : <Navigate to="/login" />;
}

export default PrivateRoute;

El componente <Outlet>
Este elemento es usado dentro del componente declarado en la ruta padre para renderizar sus elementos <Route> hijos. Esto permite a la interfaz anidada mostrar las rutas hijas cuando son renderizadas. Si la ruta seleccionada es la raíz, se renderizará la <Route index> hija. Si la ruta no está mapeada, se renderizará la <Route path='*'> hija.

en el componente de conceptos basicos quedaria asi
                    <Route path='/dashboard' element={<PrivateRoute/>}>
                        <Route path='/dashboard' element={<Dashboard/>}/>
                    </Route>
*/
