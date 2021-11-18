const INITIAL_STATE = {
  name: "Gilson",
  count: 0,
};

const UsuarioReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload.name };
    // case "COUNT_UP": // parte 2
    //   let newCount = state.count + 1;
    // return {...state , count: newCount};
    case "COUNT_UP":
      return { ...state, count: action.payload.count };
    case "COUNT_DOWN":
      return { ...state, count: action.payload.count };
    default:
      break;
  }
  return state;
};

export default UsuarioReducer;
