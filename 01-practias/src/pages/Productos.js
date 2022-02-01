import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Productos = () => {
  //   let location = useLocation();
  //   console.log(location)
  //productos?inicio=1&fin=20
  let { search } = useLocation();
  let query = new URLSearchParams(search);
//   console.log(query);

  let limit = 20;
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || limit;

  let navigate = useNavigate();

  const handlePrev = (e) => {
    navigate({ search: `?inicio=${start - limit}&fin=${end - limit}` });
  };
  const handleNext = (e) => {
    navigate({ search: `?inicio=${start + limit}&fin=${end + limit}` });
  };

//   console.log(navigate);
  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>
      </p>
      {start > 1 && <button onClick={handlePrev}>Atrás</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};

export default Productos;
