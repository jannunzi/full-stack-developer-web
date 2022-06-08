import React from "react";
import {useParams} from "react-router-dom";
function Add() {
  const {a, b} = useParams();
  return(
    <h2>
      {a} + {b} = {parseInt(a) + parseInt(b)}
    </h2>
  )
}
export default Add;
