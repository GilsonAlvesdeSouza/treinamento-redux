import { useState } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { Container, NavMenu } from "./App.Style";
import { Clientes, Home, NotFound, Sobre, Login } from "./pages";

function App() {
  const [IsLogged, setIslloged] = useState(false);

  const logar = () => {
    setIslloged(!IsLogged);
  };

  const PrivateRoute = ({children}, ...rest) => {
    return (
      <Route {...rest}>{IsLogged ? children : <Redirect to="/login" />}</Route>
    );
  };

  console.log(IsLogged);
  return (
    <BrowserRouter>
      <Container>
        <header>
          <h1>Meu Site</h1>
          <NavMenu>
            <ul>
              <li>
                <Link className={"link"} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={"link"} to="/clientes?pessoa=fisica">
                  Clientes1
                </Link>
              </li>
              <li>
                <Link className={"link"} to="/clientes?pessoa=juridica">
                  Clientes2
                </Link>
              </li>
              <li>
                <Link className={"link"} to="/clientes?pessoa=fisica">
                  Clientes3
                </Link>
              </li>
              <li>
                <Link className={"link"} to="/sobre">
                  Sobre
                </Link>
              </li>
            </ul>
          </NavMenu>
        </header>
        <hr />
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/clientes">
            <Clientes />
          </PrivateRoute>
          <PrivateRoute path="/sobre">
            <Sobre />
          </PrivateRoute>
          <Route path="/quem-somos">
            <Redirect to="/sobre" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <footer>
          Todos os direitos reservados©️
          <button onClick={logar}>Logar / Deslogar</button>
        </footer>
      </Container>
    </BrowserRouter>
  );
}
export default App;
