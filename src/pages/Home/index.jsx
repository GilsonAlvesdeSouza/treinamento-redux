import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";

function Home({ usuario, setName, increment }) {
  const [inputName, SetInputName] = useState("");
  const history = useHistory();

  const handleButton = () => {
    setTimeout(() => history.replace("/sobre"), 2000);
  };

  const handleInputName = (e) => {
    SetInputName(e.target.value);
  };

  const handleKeyInput = (e) => {
    if (e.key === "Enter" && inputName !== "") {
      setName(inputName);
      SetInputName("");
    }
  };

  const handleButtonInput = () => {
    if (inputName !== "") {
      setName(inputName);
    }
  };

  const handleIncrement = () => {
    increment(usuario.count);
  };

  return (
    <div>
      <h1>Seja bem vindo! {usuario.name}</h1>
      <input
        type="text"
        value={inputName}
        onChange={(e) => handleInputName(e)}
        onKeyUp={(e) => handleKeyInput(e)}
      />
      <button onClick={handleButtonInput}>Mudar Nome</button>
      <p>Nome: {usuario.name}</p>
      <p>Contador: {usuario.count}</p>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleButton}>ir para a página sobre</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    usuario: state.usuario,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (newName) =>
      dispatch({
        type: "SET_NAME",
        payload: { name: newName },
      }),
    /* parte 1 de outra forma de se fazer a parte 2 esta no arquivo UsuarioReducer.js na linha 10 */
    // increment: () => dispatch({
    //   type: 'COUNT_UP',
    // }),
    increment: (count) =>
      dispatch({
        type: "COUNT_UP",
        payload: { count: count + 1 },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
