import React, {useRef} from "react";
import {Outlet, useNavigate} from "react-router-dom";

function Calculator() {
  const aRef = useRef(0);
  const bRef = useRef(0);
  const nav = useNavigate();
  const calculate = (op) => {
    nav(`/calculator/${op}/${aRef.current.value}/${bRef.current.value}`)
  }
  return(
    <>
      <h1>Calculator</h1>
      <input ref={aRef}
             className="form-control w-50"/>
      <input ref={bRef}
             className="form-control w-50"/>
      <button className="btn btn-warning w-25"
              onClick={() => {calculate('add')}}>+</button>
      <button className="btn btn-primary w-25"
              onClick={() => {calculate('subtract')}}>-</button><br/>
      <button className="btn btn-danger w-25"
              onClick={() => {calculate('multiply')}}>&times;</button>
      <button className="btn btn-success w-25"
              onClick={() => {calculate('divide')}}>&divide;</button>
      <Outlet/>
    </>
  )
}
export default Calculator;
