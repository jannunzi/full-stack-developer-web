const parameters = {
  a: 3,
  b: 4,
  c: 7
}
const calculatorReducer = (state = parameters, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        a: action.a,
        b: action.b,
        c: parseInt(action.a) + parseInt(action.b)
      }
    case 'SUBTRACT':
      return {
        ...action,
        c: parseInt(action.a) - parseInt(action.b)
      }
    case 'MULTIPLY':
      return {
        ...action,
        c: parseInt(action.a) * parseInt(action.b)
      }
    case 'DIVIDE':
      return {
        ...action,
        c: parseInt(action.a) / parseInt(action.b)
      }
    default:
      return state;
  }
}
export default calculatorReducer;