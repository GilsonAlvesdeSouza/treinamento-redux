import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function Home() {
  const [inputName, SetInputName] = useState("");
  const history = useHistory();
  const { name, count } = useSelector((state) => state.usuario);
  const dispatch = useDispatch();

  const handleButton = () => {
    setTimeout(() => history.replace("/sobre"), 2000);
  };

  const handleInputName = (e) => {
    SetInputName(e.target.value);
  };

  const handleKeyInput = (e) => {
    if (e.key === "Enter" && inputName !== "") {
      dispatch({
        type: "SET_NAME",
        payload: { name: inputName },
      });
      SetInputName("");
    }
  };

  const handleButtonInput = () => {
    if (inputName !== "") {
      dispatch({
        type: "SET_NAME",
        payload: { name: inputName },
      });
      SetInputName("");
    }
  };

  const handleIncrement = () => {
    dispatch({
      type: "COUNT_UP",
      payload: { count: count + 1 },
    });
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch({
        type: "COUNT_DOWN",
        payload: { count: count - 1 },
      });
    }
  };

  return (
    <div>
      <h1>Seja bem vindo! {name}</h1>
      <input
        type="text"
        value={inputName}
        onChange={(e) => handleInputName(e)}
        onKeyUp={(e) => handleKeyInput(e)}
      />
      <button onClick={handleButtonInput}>Mudar Nome</button>
      <p>Nome: {name}</p>
      <label>Contador: {count}</label>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <br />
      <button onClick={handleButton}>ir para a página sobre</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    usuario: state.usuario,
  };
};

export default Home;
