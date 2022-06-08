import React from "react";
import {useParams} from "react-router-dom";
function Multiply() {
  const {a, b} = useParams();
  return(
    <h2>
      {a} &times; {b} = {a * b}
    </h2>
  )
}
export default Multiply;
