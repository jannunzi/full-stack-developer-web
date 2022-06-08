import React from "react";
import {useParams} from "react-router-dom";
function Subtract() {
  const {a, b} = useParams();
  return(
    <h2>
      {a} - {b} = {a - b}
    </h2>
  )
}
export default Subtract;
