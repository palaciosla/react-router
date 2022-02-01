import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Topic from "./Topic";

const ReactTopics = () => {
  return (
    <div>
      <h3>React Topics</h3>
      <ul>
        <li>
          <Link to="jsx">JSX</Link>
        </li>
        <li>
          <Link to="props">Props</Link>
        </li>
        <li>
          <Link to="estado">Estado</Link>
        </li>
        <li>
          <Link to="componentes">Componentes</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":topic" element={<Topic/>}/>
      </Routes>
    </div>
  );
};

export default ReactTopics;
