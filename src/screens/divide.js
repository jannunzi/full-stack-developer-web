import React from "react";
import {useParams} from "react-router-dom";
function Divide() {
  const {a, b} = useParams();
  return(
    <h2>
      {a} &divide; {b} = {a / b}
    </h2>
  )
}
export default Divide;
