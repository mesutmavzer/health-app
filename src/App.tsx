import React from "react";
import { Styled } from "./App.styles";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import WatIsWat from "./pages/WatIsWat/WatIsWat";
import Calculatoren from "./pages/Calculator/Calulatoren";
import Calorieentabel from "./pages/CalorieenTabel/Calorieentabel";
import Login from "./pages/Login/Login";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Styled.Root>
      <Styled.Content>
        <Styled.Header />
        <NavBar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/watiswat" exact component={WatIsWat} />
          <Route path="/calculatoren" exact component={Calculatoren} />
          <Route path="/calorieentabel" exact component={Calorieentabel} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Styled.Content>
    </Styled.Root>
  );
}

export default App;
