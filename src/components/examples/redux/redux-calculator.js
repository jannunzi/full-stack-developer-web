import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
const ReduxCalculator = () => {
  const aParam = useSelector(state => state.parameters.a);
  const bParam = useSelector(state => state.parameters.b);
  const cParam = useSelector(state => state.parameters.c);
  const [a, setA] = useState(aParam);
  const [b, setB] = useState(bParam);
  const [c, setC] = useState(cParam);
  const state = useSelector(state => state);
  useEffect(() => {
    setC(cParam);
  }, [cParam]);
  const dispatch = useDispatch();
  const calculate = (operation) => {
    dispatch({
      type: operation, a, b
    });
  }
  return(
    <div>
      {JSON.stringify(state)}
      <h2>Redux Calculator</h2>
      <input type="number" className="w-25 me-2" value={a}
             onChange={(e) =>
               setA(e.target.value)}/>
      <input type="number" className="w-25 me-2" value={b}
             onChange={(e) =>
               setB(e.target.value)}/>
      <i className="fas fa-equals"></i>
      <input type="number" className="w-25 ms-2" value={c}/>
      <div className="mt-2">
        <button onClick={() => calculate('ADD')}
                className="btn btn-success me-2">
          <i className="fas fa-plus"></i>
        </button>
        <button onClick={() => calculate('SUBTRACT')}
                className="btn btn-danger me-2">
          <i className="fas fa-minus"></i>
        </button>
        <button onClick={() => calculate('MULTIPLY')}
                className="btn btn-primary me-2">
          <i className="fas fa-times"></i>
        </button>
        <button onClick={() => calculate('DIVIDE')}
                className="btn btn-warning">
          <i className="fas fa-divide"></i>
        </button>
      </div>
    </div>
  );
}
export default ReduxCalculator;