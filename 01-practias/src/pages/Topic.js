import React from "react";
import { useParams } from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();
  return (
    <div>
      <h4>Notas de {topic}</h4>
    </div>
  );
};

export default Topic;
<h4>topics</h4>;
